import { Component, OnInit } from '@angular/core';
import { SchoolClosingService } from '../../services/school-closing.service';
import { schoolClosings } from '../../Models/schoolClosings';

@Component({
  selector: 'app-school-closing-list',
  templateUrl: './school-closing-list.component.html',
  styleUrls: ['./school-closing-list.component.css'],
})
export class SchoolClosingListComponent implements OnInit {
  schoolClosings: schoolClosings[] = [];

  constructor(private schoolClosingService: SchoolClosingService) {}

  ngOnInit(): void {
    this.schoolClosingService.getSchoolClosings().subscribe((data) => {
      this.schoolClosings = data;
    });
  }

  deleteSchoolClosing(id: number): void {
    this.schoolClosingService.deleteSchoolClosing(id).subscribe(() => {
      this.schoolClosings = this.schoolClosings.filter((schoolClosing) => schoolClosing.id !== id);
    });
  }
}
