import {
  Component,
  Inject,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-western-carolina-map',
  templateUrl: './western-carolina-map.component.html',
  styleUrls: ['./western-carolina-map.component.css'],
})
export class WesternCarolinaMapComponent implements OnInit, AfterViewInit {
  isBrowser: boolean;
  private countyAlerts: Record<string, string> = {};

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.loadWeatherAlerts().then(() => this.createMap());
    }
  }

  private async loadWeatherAlerts(): Promise<void> {
    const response = await fetch('https://api.weather.gov/alerts/active?area=NC,SC');
    const data = await response.json();

    this.countyAlerts = {};

    data.features.forEach((alert: any) => {
      const eventType = alert.properties.event;
      const areaDesc = alert.properties.areaDesc;

      const areas = areaDesc
        .split(';')
        .map((area: string) => area.trim().replace(' County', '').replace(', SC', '').replace(', NC', ''));

      areas.forEach((area: string) => {
        this.countyAlerts[area.toLowerCase()] = eventType;
        console.log(`Mapped ${area.toLowerCase()} to event: ${eventType}`);
      });
    });
  }

 private getAlertColor(alert: string | undefined): string {
  if (!alert) return '#80c1ff';

  const normalized = alert.trim().toLowerCase();

  switch (normalized) {
    case 'tornado warning':
      return '#FF0000';
    case 'severe thunderstorm warning':
      return '#FFA500';
    case 'flood advisory':
      return '#00FF00';
    case 'flash flood warning':
      return '#8B0000';
    case 'flood watch':
      return '#90EE90'; // ✅ light green
    default:
      return '#FFD700';
  }
}

  private createMap(): void {
    const width = 800;
    const height = 600;

    const svg = d3
      .select('#map')
      .attr('width', width)
      .attr('height', height);

    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);
    const tooltip = document.getElementById('tooltip') as HTMLDivElement;

    d3.json('assets/WesternCarolinaMapUp.geojson').then((geoData: any) => {
      projection.fitSize([width, height], geoData);

      svg
        .selectAll('path')
        .data(geoData.features)
        .enter()
        .append('path')
        .attr('d', path as any)
        .attr('fill', (d: any) => {
          const rawName = d.properties.NAMELSAD || '';
          const countyName = rawName.replace(' County', '').toLowerCase();
          const event = this.countyAlerts[countyName];
          return this.getAlertColor(event);
        })
        .attr('stroke', '#389')
        .style('cursor', 'pointer')
        .on('click', (event: MouseEvent, d: any) => {
          const rawName = d.properties.NAMELSAD || '';
          const countyName = rawName.replace(' County', '').toLowerCase();
          const eventText = this.countyAlerts[countyName] || 'None';

          if (tooltip) {
            tooltip.innerHTML = `
              <strong>County:</strong> ${rawName}<br>
              <strong>Alert:</strong> ${eventText}
            `;
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
            tooltip.style.display = 'block';
          }
        });

      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest('path')) {
          tooltip.style.display = 'none';
        }
      });
    });
  }
}
