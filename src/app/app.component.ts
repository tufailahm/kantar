import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'kantar-app',
    templateUrl: 'app.component.html',
    styleUrls : ['app.component.css']
})
export class AppComponent implements OnInit {

    imageURL = "https://picsum.photos/200/300";
    userLogged = true;
    showHideDepartments = true;
    employeeName = "Neha Bhasin"
    color = 'red';
    departments = [ "HR", "Finance", "Security", "Logistics"]

    number1 !: string
    number2 !: string
    result !: number
    constructor(){
        console.log("default cons called");
        this.employeeName = "Jay Mehta"
    }
    ngOnInit(){
        console.log("ngOnInit called");
        this.employeeName = "Ahmed"
    }
    toggleDepartment(){
        this.showHideDepartments = !this.showHideDepartments;
    }
    changeName(){
        console.log("change name called");
        this.employeeName = "Karthik"
    }
    changeImage(){
        this.imageURL="https://loremflickr.com/320/240"
    }
    doSum(){
        this.result = parseInt(this.number1) + parseInt(this.number2); 
   }
   
}