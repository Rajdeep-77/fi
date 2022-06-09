import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus;
  serverName='Test-Server';
  userName: string="name of the user";
  buttonClicked=false;
  servers = ['TestServer','TestServer2'];

  constructor() { 
    setTimeout(()=>{this.allowNewServer=true;},2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.buttonClicked=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server was created !, Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
