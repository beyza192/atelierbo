import { Component, OnInit } from '@angular/core';
import { Contact } from '../_classes/contact';
import { contactAtelierBo } from 'src/data/data-contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public contact: Contact = contactAtelierBo;
  public emailString: string = 'mailto:' + this.contact.email;

  ngOnInit() {
  }



}
