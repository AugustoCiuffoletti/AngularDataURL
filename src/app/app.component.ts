/*
Consult first https://en.wikipedia.org/wiki/Data_URI_scheme for the "data:"" URL scheme.
In a word the URL scheme
  data:[<mediatype>][;base64],<data>
allows to transfer to the user data embedded in the HTML page. However, this is considered
since a bad developer might inject dangerous data, like a script. Angular automatically
prevents such kind of attack by inspecting the URl and blocking possibly dangerous ones. However, it
gives the deleloper the possibility to avoid such ckeck. The method bypassSecurityTrustUrl is used
to bybass the  controls performed by the "sanitizer", with the effect of allowing the processing of the data URL
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
    var content = 'Hallo world!'; // Content to transfer
    const mediatype = 'text/plain'; // media type (consider also '/text/json;base64')
//    content = encodeURIComponent(content); // Url encode content (needed for JSON)
    this.downloadUrl = this.sanitizer.bypassSecurityTrustUrl(
      'data:' + mediatype + ',' + content
    );
    console.log(this.downloadUrl);
  }
}
