import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAllStudent(){
    return this.http.get(`http://13.233.50.4:8080/student/all`)
  }

  RegisterStudent(body:any){
    return this.http.post(`http://13.233.50.4:8080/student/register`,body)
  }

  getStudentById(id:number){
    return this.http.get(`http://13.233.50.4:8080/student/${id}`)
  }

  deleteStudent(id:number){
    return this.http.delete(`http://13.233.50.4:8080/student/${id}`)
  }
}
