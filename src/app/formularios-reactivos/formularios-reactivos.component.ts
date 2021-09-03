import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrls: ['./formularios-reactivos.component.css']
})
export class FormulariosReactivosComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      formNombre : ['']
    })
  }

  verResultados(){
    console.log (this.myForm.value.formNombre);
  }

}
