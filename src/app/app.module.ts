import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ZilliqaComponent } from './zilliqa/zilliqa.component';
import { WanchainComponent } from './wanchain/wanchain.component';
import { StratisComponent } from './stratis/stratis.component';
import { MakerComponent } from './maker/maker.component';
import { AeternityComponent } from './aeternity/aeternity.component';
import { StatusComponent } from './status/status.component';
import { ZeroX0xComponent } from './zero-x-0x/zero-x-0x.component';
import { AionComponent } from './aion/aion.component';
import { GolemComponent } from './golem/golem.component';
import { OntologyComponent } from './ontology/ontology.component';
import { AugurComponent } from './augur/augur.component';
import { SiacoinComponent } from './siacoin/siacoin.component';
import { BitsharesComponent } from './bitshares/bitshares.component';
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  // { path: 'servers', component: ServersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aeternity', component: AeternityComponent },
  { path: 'aion', component: AionComponent },
  { path: 'augur', component: AugurComponent },
  { path: 'bitshares', component: BitsharesComponent },
  { path: 'golem', component: GolemComponent },
  { path: 'maker', component: MakerComponent },
  { path: 'ontology', component: OntologyComponent },
  { path: 'siacoin', component: SiacoinComponent },
  { path: 'status', component: StatusComponent },
  { path: 'stratis', component: StratisComponent },
  { path: 'wanchain', component: WanchainComponent },
  { path: 'zero-x-0x', component: ZeroX0xComponent },
  { path: 'zilliqa', component: ZilliqaComponent }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    // ServersComponent,
    ZilliqaComponent,
    WanchainComponent,
    StratisComponent,
    MakerComponent,
    AeternityComponent,
    StatusComponent,
    ZeroX0xComponent,
    AionComponent,
    GolemComponent,
    OntologyComponent,
    AugurComponent,
    SiacoinComponent,
    BitsharesComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
