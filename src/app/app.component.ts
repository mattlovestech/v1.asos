import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  isOn = true;
  mobileInput = '';
  showStep2 = false;
  selectedFriend = 'null';
  sendTime = 'null';
  url = 'https://8080red.pythonanywhere.com/send-api/';
  // Help Otw
  showHelpOtw = true;

  // Functions
  // Send SMS to API
  sendSms(smsUrl) {
    console.log(smsUrl);
    fetch(smsUrl)
      .then(response => response.json())
      .then(json => this.helpOtw(json));
      //  .then(json => console.log(json));
  }
  // Rotate to helpOtw page
  helpOtw(json) {
    console.log(json.sid);
    console.log(json);
    setTimeout('window.location.reload()', 8000);
    //  window.location.href = '/help-otw';
    this.showHelpOtw = false;

  }

  function($scope) {
    $scope.name = 'John Doe';
  }
}
