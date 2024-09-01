import { Component, OnInit } from '@angular/core';
import { StormReportService } from '../../services/storm-report.service';
import { stormReports } from '../../Models/stormReports';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-storm-report-list',
  templateUrl: './storm-report-list.component.html',
  styleUrls: ['./storm-report-list.component.css'],
})
export class StormReportListComponent implements OnInit {
  stormReports: stormReports[] = [];

  constructor(private stormReportService: StormReportService) {}

  ngOnInit(): void {
    this.stormReportService.getStormReports().subscribe((data) => {
      this.stormReports = data;
    });
  }

  deleteStormReport(id: number): void {
    this.stormReportService.deleteStormReport(id).subscribe(() => {
      this.stormReports = this.stormReports.filter((stormReport) => stormReport.id !== id);
    });
  }
}
