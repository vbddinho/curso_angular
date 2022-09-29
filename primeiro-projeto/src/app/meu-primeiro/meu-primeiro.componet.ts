

//
import { Component } from "@angular/core";

@Component({
    //nome da tag html para utiliza-la depois
    selector:'meu-primeiro-component',
    // Html inline
    template : `
    <p> Meu primeiro Componente pelo Template</p>  
    
    
    `
})
// Exporte espone a classe e é preciso colocar isto em app.module.ts em declarations
// syntax MeuPrimeiroComponent
export class MeuPrimeiroComponent{

}