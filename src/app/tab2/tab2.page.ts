import { Component } from '@angular/core';
import { LembretesService } from '../services/lembretes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  lembretes: Array<any> = [];
  isLoading: Boolean = true;

  constructor(
    private lembretesService: LembretesService
  ) {
    this.loadLembretes();
  }

  async loadLembretes() {
    try {
      this.lembretes = await this.lembretesService.getLembretes();
      this.isLoading = false;
    } catch (err) {
      console.error(err);
    }
  }

  getPriorityColor(priority: Number): String {
    switch (priority) {
      case 1: return 'danger';
      case 2: return 'warning';
      default: return 'primary';
    }
  }

}
