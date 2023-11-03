import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  cadasterParking:any = {}
  mensagem:string = ''
  constructor(private http:HttpClient) {}

  cadaster():void {
    this.http.post('https://park-rvud.onrender.com/parking-spot', this.cadasterParking).subscribe((data:any)=> {
      this.cadasterParking = data;
      this.mensagem = 'Vaga reservada com sucesso';
    },
    (error:any)=>{
      this.mensagem = 'Error em reservar o cliente';
    }
    );

  }

}
