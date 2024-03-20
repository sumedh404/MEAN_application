import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';
import { Person} 

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  peopleList: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.peopleService.getAllPeople().subscribe(
      (data: Person[]) => {
        this.peopleList = data;
      },
      (error) => {
        console.error('Error fetching people:', error);
      }
    );
  }
}
