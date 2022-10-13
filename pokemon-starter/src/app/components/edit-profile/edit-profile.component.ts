import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  values: Profile = {
    name: "",
    email: "",
    birthYear: NaN
  }
  showSavedMessage = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    // set starting form values as copy of current profile
    this.values = { ...this.profileService.getProfile() };
  }

  submitForm(): void {
    this.profileService.setProfile({ ...this.values });
    this.showSavedMessage = true;
  }

}
