import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StormReportService } from '../../services/storm-report.service';
import { stormReports } from '../../Models/stormReports';

@Component({
  selector: 'app-storm-report-form',
  templateUrl: './storm-report-form.component.html',
  styleUrls: ['./storm-report-form.component.css']
})
export class StormReportFormComponent implements OnInit {
  stormReport: stormReports = {
    event: '',
    description: '',
    date: '',
    street: '',
    isGreenville: false,
    isSpartanburg: false,
    id: 0
  };
  editMode = false;

  constructor(
    private stormReportService: StormReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.stormReportService
        .getStormReport(Number(id))
        .subscribe((data) => (this.stormReport = data));
    }
  }

  saveStormReport(): void {
    if (this.editMode) {
      this.stormReportService
        .updateStormReport(this.stormReport.id!, this.stormReport)
        .subscribe(() => {
          this.router.navigate(['/storm-reports']);
        });
    } else {
      this.stormReportService
        .createStormReport(this.stormReport)
        .subscribe(() => {
          this.router.navigate(['/storm-reports']);
        });
    }
  }
}
