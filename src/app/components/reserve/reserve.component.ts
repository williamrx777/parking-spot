import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit{
  dados:any[] = [];

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:8080/parking-spot').subscribe((data:any)=> {
     this.dados = data.content
    });
  }

  delete(id: number): void {
    if (confirm('Tem certeza de que deseja excluir este item?')) {
      this.http.delete(`http://localhost:8080/parking-spot/${id}`).subscribe(() => {
        // Após a exclusão bem-sucedida, você pode atualizar a lista de dados ou realizar outras ações necessárias.
        this.dados = this.dados.filter(dado => dado.id !== id);
      });
    }
  }

}
