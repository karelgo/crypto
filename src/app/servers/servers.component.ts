import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false; 
  serverCreationStatus = 'Wat ben je vandaag?';
  serverName = 'testserver';
  Spreekwoord = ''

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Je bent vandaag jaaaaaaaaarig!';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
