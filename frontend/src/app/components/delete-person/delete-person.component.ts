import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from '../people.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
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

  deletePerson(): void {
    this.peopleService.deletePerson(this.person.id).subscribe(
      () => {
        console.log('Person deleted successfully.');
        this.goBack();
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
