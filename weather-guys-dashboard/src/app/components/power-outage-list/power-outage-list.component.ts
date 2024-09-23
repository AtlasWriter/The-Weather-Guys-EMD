import { Component, OnInit } from '@angular/core';
import { PowerOutageService } from '../../services/power-outage.service';
import { powerOutages } from '../../Models/powerOutages';

@Component({
  selector: 'app-power-outage-list',
  templateUrl: './power-outage-list.component.html',
  styleUrls: ['./power-outage-list.component.css'],
})
export class PowerOutageListComponent implements OnInit {
  powerOutages: powerOutages[] = [];

  constructor(private powerOutageService: PowerOutageService) {}

  ngOnInit(): void {
    this.powerOutageService.getPowerOutages().subscribe((data) => {
      this.powerOutages = data;
    });
  }

  deletePowerOutage(id: number): void {
    this.powerOutageService.deletePowerOutage(id).subscribe(() => {
      this.powerOutages = this.powerOutages.filter((powerOutage) => powerOutage.id !== id);
    });
  }
}
