import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiRestService:ApiRestService) { }
  public arrayFotos:any = [];

  ngOnInit(): void {
    this.obtenerValores();
  }

  obtenerValores(){
    this.apiRestService.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(respuesta =>{
      this.arrayFotos =  respuesta;
      console.log(this.arrayFotos);
    })
  }

}
