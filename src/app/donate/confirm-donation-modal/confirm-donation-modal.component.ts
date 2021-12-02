import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DonateService} from "../donate.service";

@Component({
  selector: 'app-confirm-donation-modal',
  templateUrl: './confirm-donation-modal.component.html',
  styleUrls: ['./confirm-donation-modal.component.scss'],
})
export class ConfirmDonationModalComponent implements OnInit {
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
