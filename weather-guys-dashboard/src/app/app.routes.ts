import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StormUpdateListComponent } from './components/storm-update-list/storm-update-list.component';
import { StormUpdateFormComponent } from './components/storm-update-form/storm-update-form.component';
import { StormReportListComponent } from './components/storm-report-list/storm-report-list.component';
import { StormReportFormComponent } from './components/storm-report-form/storm-report-form.component';
import { SchoolClosingListComponent } from './components/school-closing-list/school-closing-list.component';
import { SchoolClosingFormComponent } from './components/school-closing-form/school-closing-form.component';
import { PowerOutageListComponent } from './components/power-outage-list/power-outage-list.component';
import { PowerOutageFormComponent } from './components/power-outage-form/power-outage-form.component';
import { ShelterListComponent } from './components/shelter-list/shelter-list.component';
import { ShelterFormComponent } from './components/shelter-form/shelter-form.component';
import { FormsModule } from '@angular/forms'; // Import this line
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';



export const routes: Routes = [

  { path: 'storm-updates', component: StormUpdateListComponent },
  { path: 'storm-updates/new', component: StormUpdateFormComponent },
  { path: 'storm-updates/edit/:id', component: StormUpdateFormComponent },
  { path: 'storm-reports', component: StormReportListComponent },
  { path: 'storm-reports/new', component: StormReportFormComponent },
  { path: 'storm-reports/edit/:id', component: StormReportFormComponent },
  { path: 'school-closings', component: SchoolClosingListComponent },
  { path: 'school-closings/new', component: SchoolClosingFormComponent },
  { path: 'school-closings/edit/:id', component: SchoolClosingFormComponent },
  { path: 'power-outages', component: PowerOutageListComponent },
  { path: 'power-outages/new', component: PowerOutageFormComponent },
  { path: 'power-outages/edit/:id', component: PowerOutageFormComponent },
  { path: 'shelters', component: ShelterListComponent },
  { path: 'shelters/new', component: ShelterFormComponent },
  { path: 'shelters/edit/:id', component: ShelterFormComponent },
];

@NgModule({
  declarations: [

    StormUpdateListComponent,
    StormUpdateFormComponent,
    StormReportListComponent,
    StormReportFormComponent,
    SchoolClosingListComponent,
    PowerOutageListComponent,
    ShelterListComponent,

    // Add other components as needed
  ],

  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Add the new HttpClient provider with interceptors if needed
  ],

  imports: [FormsModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
