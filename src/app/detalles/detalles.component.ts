import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public id:any;
  public respuesta:any;
  constructor(private rout: ActivatedRoute, private apiRestService:ApiRestService) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap;
      this.obtenerValor(params.id);
    })
  }

  obtenerValor(id:string){
    this.apiRestService.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
      console.log(this.respuesta);
    })
  }

}
