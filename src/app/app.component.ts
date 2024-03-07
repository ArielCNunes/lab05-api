import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  students:any = [];
  weather:any = [];
  temp:any = "";
  constructor(private studentService:StudentService, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data) => {
        this.students = data.students; // local array is assiged data.students value from api
      }
    );
    
    this.weatherService.GetWeatherData().subscribe(
      (data) => {
        this.weather = data.weather;
        this.temp = data.main; // assing temp in data.main to our temp variable
      }
    );
  }
}