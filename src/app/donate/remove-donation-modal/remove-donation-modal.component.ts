import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DonateService} from "../donate.service";

@Component({
  selector: 'app-remove-donation-modal',
  templateUrl: './remove-donation-modal.component.html',
  styleUrls: ['./remove-donation-modal.component.scss'],
})
export class RemoveDonationModalComponent implements OnInit {
  @Input() donation: any;
  @Output() emitConfirm = new EventEmitter<any>();
  constructor(private modalService: NgbModal,
              public donateService: DonateService) {
  }
  ngOnInit() {
  }

  public confirm(): void {
    this.emitConfirm.emit();
  }
  public closeModal(): void {
    this.modalService.dismissAll('done');
  }
}
