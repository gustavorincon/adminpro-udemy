import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda : String= 'Leyenda';
  @Input() progreso: number=50;

  @Output() cambioValor: EventEmitter<number>= new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onChanges(newValue:number){
    if(newValue>=100){
      this.progreso=100;
    } else if(newValue <=1){
      this.progreso=0;
    } else{
      this.progreso=newValue;
    }
    this.txtProgress.nativeElement.value=this.progreso;
    this.txtProgress.nativeElement.focus();
    console.log(newValue);
    this.cambioValor.emit(this.progreso)
  }

  cambiarValor(valor:number){
    if(this.progreso>=100 && valor>0 ){
      this.progreso=100;
      return;
    }
    if(this.progreso<=0 && valor<0 ){
      this.progreso=0;
      return;
    }
    this.progreso= this.progreso+valor;
    this.cambioValor.emit(this.progreso)
  }

}
