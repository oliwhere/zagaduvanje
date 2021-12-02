import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {VolunteerService} from "../volunteer.service";

@Component({
  selector: 'app-remove-volunteer-modal',
  templateUrl: './remove-volunteer-modal.component.html',
  styleUrls: ['./remove-volunteer-modal.component.scss'],
})
export class RemoveVolunteerModalComponent implements OnInit {
  @Input() donation: any;
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
