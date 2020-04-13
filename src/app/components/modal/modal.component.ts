import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isShow: boolean;
  @Input() header: string;

  style: object = {
    minWidth: "70%",
  }

  constructor() { }

  ngOnInit(): void {
  }

}