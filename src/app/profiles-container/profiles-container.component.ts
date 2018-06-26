import { Component, OnInit } from '@angular/core';

import { Profile } from '../../Profile';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profiles-container',
  templateUrl: './profiles-container.component.html',
  styleUrls: ['./profiles-container.component.css']
})
export class ProfilesContainerComponent implements OnInit {
  profiles: Profile[];
  selected: boolean = false;

  constructor(private profilesService: ProfilesService) { }

  ngOnInit() {
    this.getProfiles();

  }
  getProfiles(): void {
    this.profilesService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);
  }
  toggle(): void {
    console.log(this.selected);
    this.selected = !this.selected;
  }

}
