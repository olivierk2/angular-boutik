import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private navService: NavigationService,
    private productsService: ProductsService,
    ) { }

  ngOnInit() {
  }

  onInput($event:any) {
    this.navService.setSearch($event.target.value);
  }

}
