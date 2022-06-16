import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import wordsToNumbers from 'words-to-numbers';

@Component({
  selector: 'app-kgf',
  templateUrl: './kgf.component.html',
  styleUrls: ['./kgf.component.css']
})
export class KGFComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  constructor() { }

  Userdata: any = []


  ngOnInit(): void {
    this.Userdata
  }
  inputform = new FormGroup({
    user: new FormControl('')
  });
  count: any = 0;
  chat = "AI Chatbot"
  G_rpl: any | string

  VAS = ["Hello", "Hii", "Hi", "Hey", "hi", "hii", "HI", "HII", "HELLO", "hello", "HEY", "hey"]
  d_W = ["Hello", "Hii", "Hi", "Hey"]
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  d = new Date()
  D: any
  DD: any
  MM: any
  YYYY: any
  Usersend() {
    debugger;
    var data = this.inputform.controls['user'].value;
    var fatc_data = data;

    if (fatc_data != null) {
      var vas_io = this.VAS.indexOf(fatc_data);
      if (this.count >= 3) {
        if (fatc_data.search(/why/i) >= 0) {
          this.G_rpl = "You are not a Good Person, say me Sorry and After i get replay!";
        } else if (fatc_data.search(/Sorry/i) >= 0) {
          this.G_rpl = "Okay, you have talk with me"
          this.count = 0;
        }
        else {
          this.G_rpl = "I am not Talk With You!"
        }
      } else {
        if (vas_io >= 0) {
          for (var i = 0; i < this.d_W.length; i++) {
            var L = this.d_W[i].toLowerCase();
            var U = this.d_W[i].toUpperCase();
            if (fatc_data == this.d_W[i] || fatc_data == L || fatc_data == U) {
              this.G_rpl = data + ", How can i help you."
              break;
            }
          }
        } else if (fatc_data.search(/Years/i) >= 0) {

          if (fatc_data.search(/This/i) >= 0) {
            this.YYYY = this.d.getFullYear()
            this.G_rpl = this.YYYY
          }
        } else if (fatc_data.search(/day/i) >= 0 || fatc_data.search(/Date/i) >= 0) {
          if (fatc_data.search(/Today/i) >= 0) {
            this.D = this.days[this.d.getDay()]
            this.DD = this.d.getDate()
            this.MM = this.d.getMonth()
            this.YYYY = this.d.getFullYear()
            this.G_rpl = this.D + ", " + this.DD + "/" + this.MM + "/" + this.YYYY
          } else if (fatc_data.search(/Yeasterday/i) >= 0) {
            this.D = this.days[this.d.getDay() - 1]
            this.DD = this.d.getDate() - 1
            this.MM = this.d.getMonth()
            this.YYYY = this.d.getFullYear()
            this.G_rpl = this.D + ", " + this.DD + "/" + this.MM + "/" + this.YYYY
          } else if (fatc_data.search(/Tomorrow/i) >= 0) {
            this.D = this.days[this.d.getDay() + 1]
            this.DD = this.d.getDate() + 1
            this.MM = this.d.getMonth();
            this.YYYY = this.d.getFullYear();
            this.G_rpl = this.D + ", " + this.DD + "/" + this.MM + "/" + this.YYYY
          } else {
            window.open("http://www.google.com/search?hl=en&q=" + fatc_data + "&btnG=Google+Search", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            this.G_rpl = "I think do you satisfied my Answer."
          }
        }else if(fatc_data.search(/this/i) >= 0 && fatc_data.search(/month/i) >= 0 || fatc_data.search(/current/i) >= 0 && fatc_data.search(/month/i) >= 0){
          this.MM = this.months[this.d.getMonth()];
          this.G_rpl = this.MM 
        } else if (fatc_data.search(/How are You/i) >= 0) {
          this.G_rpl = "I am robot so am always Good."
        } else if (fatc_data.search(/sex/i) >= 0) {
          this.G_rpl = "I don't like Your behaviour, don't call me again."
          this.count++;
        } else if(fatc_data.search(/okay/i) >= 0){
          this.G_rpl = "What is Okay, say me Your Question don't with me Bak*ch*di"
        }else if(fatc_data.search(/I love you/i) >= 0){
          this.G_rpl = "I am not your Girlfriend, so do your work."
        }else if(fatc_data.search(/You Like me/i) >= 0){
          this.G_rpl = "Yes, you are a my friend."
        }else if(fatc_data.search(/Youtube/i) >= 0 || fatc_data.search(/Video/i) >= 0 || fatc_data.search(/movie/i) >= 0){
          window.open("https://www.youtube.com/results?search_query="+fatc_data, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          this.G_rpl = "I think do you satisfied your Answer."
        }else {
          window.open("http://www.google.com/search?hl=en&q="+fatc_data, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          this.G_rpl = "I think do you satisfied your Answer."
        }
      }
      this.Userdata.push({
        You: data,
        garuda: this.G_rpl
      })
      this.inputform.controls['user'].setValue(null);
      this.G_rpl = null;
    }
  }
}
