import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from '../people.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: Person;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPersonById(id).subscribe(
      (data: Person) => {
        this.person = data;
      },
      (error) => {
        console.error('Error fetching person:', error);
      }
    );
  }

  saveChanges(): void {
    this.peopleService.updatePerson(this.person.id, this.person).subscribe(
      () => {
        console.log('Person updated successfully.');
        this.goBack();
      },
      (error) => {
        console.error('Error updating person:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
