import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aeternity',
  templateUrl: './aeternity.component.html',
  styleUrls: ['./aeternity.component.css']
})
export class AeternityComponent implements OnInit {

  constructor() { }

  consensus: string = "";

  ngOnInit() {
  }

  showConsensus(consensus) {
    if (this.consensus == "") {
      this.consensus = "Consensus is achieved via a novel Proof-of-Work (PoW) algorithm. The \"Cuckoo Cycle\" PoW is more power-efficient and indirectly useful, as it encourages the development of better random access memory (DRAM) chips. Even smartphones can mine, achieving unparalleled decentralization. Proof-of-Stake (PoS) is used for governance, which is done via (delegated) voting, weighted by the amount of tokens the account holds.";
    } else {
      this.consensus = "";
    }
  }
}

