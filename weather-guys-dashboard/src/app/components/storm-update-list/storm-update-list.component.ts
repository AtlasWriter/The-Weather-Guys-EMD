import { Component, OnInit } from '@angular/core';
import { StormUpdateService } from '../../services/storm-update.service';
import { stormUpdate } from '../../Models/stormUpdate';

@Component({
  selector: 'app-storm-update-list',
  templateUrl: './storm-update-list.component.html',
  styleUrls: ['./storm-update-list.component.css'],
})
export class StormUpdateListComponent implements OnInit {
  stormUpdates: stormUpdate[] = [];

  constructor(private stormUpdateService: StormUpdateService) {}

  ngOnInit(): void {
    this.stormUpdateService.getStormUpdates().subscribe((data) => {
      this.stormUpdates = data;
    });
  }

  deleteStormUpdate(id: number): void {
    this.stormUpdateService.deleteStormUpdate(id).subscribe(() => {
      this.stormUpdates = this.stormUpdates.filter(
        (stormUpdate) => stormUpdate.id !== id
      );
    });
  }
}
