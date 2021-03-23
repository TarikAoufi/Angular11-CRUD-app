import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDrivenService } from 'src/app/services/event-driven.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?:Product;
//@Output() eventEmitter:EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private enventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }

  onSelect(product:Product) {
  //this.eventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT, payload:product});
    this.enventDrivenService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT, payload:product});
  }

  onDelete(product:Product) {
  //this.eventEmitter.emit({type:ProductActionsTypes.DELECTE_PRODUCT, payload:product});
    this.enventDrivenService.publishEvent({type:ProductActionsTypes.DELECTE_PRODUCT, payload:product});
  }

  onEdit(product:Product) {
  //this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT, payload:product});
    this.enventDrivenService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT, payload:product});
  }

}
