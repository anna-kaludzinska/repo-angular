import { Component } from '@angular/core';

export class Student {
	id: number;
	name: string;
}

const STUDENTS: Student[] = [
  { id: 11, name: 'Juri' },
  { id: 12, name: 'Roman' },
  { id: 13, name: 'Paweł' },
  { id: 14, name: 'Kasia' },
  { id: 15, name: 'Anita' },
  { id: 16, name: 'Ania' },
  { id: 17, name: 'Klaudia' },
  { id: 18, name: 'Lucyna' },
  { id: 19, name: 'Asia' },
  { id: 20, name: 'Rafał' }
];

@Component({
  selector: 'my-app',
	template: 
		`<h1>{{title}}</h1>
		<h2>Students</h2>
		<ul class="heroes">
			<li *ngFor="let student of students"
			[class.selected]="student === selectedStudent"
			(click)="onSelect(student)">
    			<span class="badge">{{student.id}}</span> {{student.name}}
  			</li>
		</ul>
		<div *ngIf="selectedStudent">
			<h2>{{selectedStudent.name}} details!</h2>
			<label>id: </label>{{selectedStudent.id}}
		 
		<div>
			<label>name: </label>
			<input [(ngModel)]="selectedStudent.name" placeholder="name">
		</div>
	</div>`,
		styles: [`
  		.selected {
    		background-color: #CFD8DC !important;
    		color: white;
  		}
  		.heroes {
			margin: 0 0 2em 0;
    		list-style-type: none;
    		padding: 0;
    		width: 15em;
  		}
  		.heroes li {
    		cursor: pointer;
    		position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		  }
  		.heroes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		  }
  		.heroes li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		  }
  		.heroes .text {
			position: relative;
			top: -3px;
		  }
  		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		  }
	`]
}) 

export class AppComponent  { 
	title = 'Akademia108 - Lista studentów';
	students = STUDENTS;
	selectedStudent: Student;
	
	onSelect(student: Student): void {
    this.selectedStudent = student;
  }
};

