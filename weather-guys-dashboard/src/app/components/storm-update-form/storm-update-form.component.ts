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
    id: 0,
    stromName: '',
    stormPosition: '',
    stormTrack: '',
    stormImpact: '',
    stormOpnionForecast: '',
    stormUpdateDate: ''
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
    if (this.editMode) {
      this.stormUpdateService
        .updateStormUpdate(this.stormUpdate.id!, this.stormUpdate)
        .subscribe(() => this.router.navigate(['/storm-updates']));
    } else {
      this.stormUpdateService
        .createStormUpdate(this.stormUpdate)
        .subscribe(() => this.router.navigate(['/storm-updates']));
    }
  }
}
