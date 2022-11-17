import { AfterContentChecked, AfterContentInit, AfterViewChecked, 
  AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  
  nombre: string = 'Javier';
  segundos: number = 0;
  timerSubscription!: Subscription;
  // primero cargar esto que normalmente son las inyecciones de dependencias
  // que necesita el HTML para mostrarse como uno quiere
  constructor() { 
    console.log('Constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecke.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }
  ngOnDestroy(): void {
    // ngOnDestroy se llama para destruir un componente
    // si se ha utilizado una directiva *ngIf no lo oculta sino que lo destruye;
    // display none o visibility hidden el elemento sigue estando no se destruye
    // con la directiva *ngIf se destruye y no lo crea hasta que se cumple el condicional
    console.log('ngOnDestroy.');
    this.timerSubscription.unsubscribe;
    console.log('timer Limpiado');
  }

  // ngOnInit es un Hook o Gancho. El componente esta inicializado ya se pueden hacer peticiones http ect 
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe( i => {
      this.segundos = i;
    })
  }
  
  guardar(){
    console.log('este le dice eh angular dispara ngDoCheck ngAfterContentCheched y ngViewChecked')
  }
  

}
