import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrls:[ './legal-notice.component.scss', './legal-notice.responsive.scss'] 
})
export class LegalNoticeComponent {
  constructor() { }
}