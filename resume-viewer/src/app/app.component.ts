import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-viewer';
doc: string="https://resume-file-collection.s3.ap-south-1.amazonaws.com/ankit.docx";
pdf:string="https://resume-file-collection.s3.ap-south-1.amazonaws.com/ankit.pdf";
}
