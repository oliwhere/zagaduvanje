import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {VolunteerService} from "../volunteer.service";

@Component({
  selector: 'app-confirm-volunteer-modal',
  templateUrl: './confirm-volunteer-modal.component.html',
  styleUrls: ['./confirm-volunteer-modal.component.scss'],
})
export class ConfirmVolunteerModalComponent implements OnInit {
  @Input() volunteers: any;
  @Output() emitConfirm = new EventEmitter<any>();
  constructor(private modalService: NgbModal,
              public volunteerService: VolunteerService) {
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
