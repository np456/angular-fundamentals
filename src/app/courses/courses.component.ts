//Basic component setup

// Pascal naming convention, by convention use Component as well

import { Component } from '@angular/core';   //To convert to a component recognised by angular, use a declarator...called component
import { CoursesService} from './courses.service';

@Component(
    {
        //takes arguments e.g. add 1 or more properties to describe the component being defined
        // extend HTML vocabulary to define new elements of courses, wherever used, angular will render the component
        selector: 'courses', // CSS selector  e.g. <courses> becomes "courses", <div class="courses"> ".courses", <div id="courses"> "#courses"
        template: `
        <h2>{{"Title: " + getTitle()}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
        // Section 3.33
        //'<h2>{{"Title: " + getTitle()}}</h2>' //html markup to be renedered by this component, in real worl this is quite big so put in a seperate file normally
        // to repeat for each course <li></li> need angular directives, manipulate the DOM (add, remove, change class of DOM elements etc.)
        // use like attribute in html, set to a string expression
        // *ngFor special syntax with directives that modified structure of DOM, needs the *
        // write expression like in foreach block
        // let keyword allows you define a variable, of = keyword, courses = field to iterate over
        // each iteration will hold value of one course variable at a time
        //in real world apps, get the courses from the serve, need to use another angular building block called SERVICES
    }
)    //call like a function...declarator function
export class CoursesComponent{
    title = "List of courses"; // display dynamically
    courses; // array holding simple example of courses, in RL it's course objects

    constructor(service: CoursesService){
        // Section 3.34/3.35
        //let service = new CoursesService(); // tightly coupled courses component to the courses service
        this.courses = service.getCourses();    // aka. still have the same problem and any implementation by composition need to add the new arguments when the class is changed
        // solution is ask angular to do it by adding parameter to constructor and remove "let service..."

        //when creating instance of service
        // looks at constructor - sees the depdendency
        // creates an instance of coursesservice and pass it to constructor
        // addresses problem #2 and unit tests issue, can create a fake implementation of service that dont use the HTTP service on backend (decoupled component from service)
        // using NEW operator in constructor -> tightly coupled
        // but when using as a dependency -> good

        // Instruct angular to create instance of coursesservice and pass to coursecomponent aka. dependency injection
        // aka. inject dependencies of the class into the constructor e.g. service: coursesservice
        // DI framework inbuilt in Angular, need to register dependency somewhere in module 
        // app.module.ts
        // declare it in the @NgModule providers block
    }

    getTitle(){
        return this.title;
    }

    // add logic here to call HTTP service
}

//how to register in module? e.g. see App module (app.module.ts)

//3rd step
// anywhere where element courses
// angular will render template inside that element
// where to add? - see app.component.html (ext template for app component) - the markup is just the rendered landing page when you create the app