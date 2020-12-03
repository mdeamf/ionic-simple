import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LembretesService {

  constructor() { }

  getLembretes(): Promise<Array<any>> {
    return new Promise((resolve) => {
      var lembretes = [
        { priority: 2, description: 'Ir aos Correios', time: '14h00min' },
        { priority: 1, description: 'Atuar no Projeto', time: '14h30min' },
        { priority: 2, description: 'Estudar Angular', time: '15h00min' },
        { priority: 3, description: 'Estudar Ionic', time: '16h00min' },
        { priority: 3, description: 'Estudar React', time: '17h00min' }
      ];

      setTimeout(() => {
        resolve(lembretes);
      }, 2000);
    });
  }
}
