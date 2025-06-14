import { Component, OnInit } from '@angular/core';
import { StormUpdateService } from '../../services/storm-update.service';
import { stormUpdate } from '../../Models/stormUpdate';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-storm-update-form',
  templateUrl: './storm-update-form.component.html',
  styleUrls: ['./storm-update-form.component.css'],
})
export class StormUpdateFormComponent implements OnInit {
  stormUpdate: stormUpdate = {
    stromName: '',
    stormPosition: '',
    stormTrack: '',
    stormImpact: '',
    stormOpnionForecast: '',
    stormUpdateDate: '',
    id: 0
  };
  editMode = false;

  constructor(
    private stormUpdateService: StormUpdateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.stormUpdateService
        .getStormUpdate(Number(id))
        .subscribe((data) => (this.stormUpdate = data));
    }
  }


  saveStormUpdate(): void {
    console.log('Submitting storm update:', this.stormUpdate); // Add this line
    if (this.editMode) {
      this.stormUpdateService
        .updateStormUpdate(this.stormUpdate.id!, this.stormUpdate)
        .subscribe(() =>
          console.log('Update successful')); // Add this line
          this.router.navigate(['/storm-updates']);

    } else {
      this.stormUpdateService
        .createStormUpdate(this.stormUpdate)
        .subscribe(() =>
          console.log('Creation successful')); // Add this line
          this.router.navigate(['/storm-updates']);

    }
  }

}
