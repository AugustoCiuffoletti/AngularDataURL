/*
Consult first https://en.wikipedia.org/wiki/Data_URI_scheme for the "data:"" URL scheme. Ina word

data:[<mediatype>][;base64],<data>
This alone allows 
*/
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  downloadUrl: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {
    const content = 'Hallo world!'; // Content to transfer
    const mediatype = 'text/plain'; // media type
    this.downloadUrl = this.sanitizer.bypassSecurityTrustUrl(
      'data:' + mediatype + ',' + content
    );
    console.log(this.downloadUrl);
  }
}
