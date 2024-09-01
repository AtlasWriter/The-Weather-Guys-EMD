import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../../services/shelter.service';
import { shelters } from '../../Models/shelters';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css'],
})
export class ShelterListComponent implements OnInit {
  shelters: shelters[] = [];

  constructor(private shelterService: ShelterService) {}

  ngOnInit(): void {
    this.shelterService.getShelters().subscribe((data) => {
      this.shelters = data;
    });
  }

  deleteShelter(id: number): void {
    this.shelterService.deleteShelter(id).subscribe(() => {
      this.shelters = this.shelters.filter((shelter) => shelter.id !== id);
    });
  }
}
