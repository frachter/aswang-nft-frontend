import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FusionsComponent } from './components/fusions/fusions.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FusionDetailComponent } from './components/fusion-detail/fusion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FusionsComponent,
    NavigationComponent,
    HeaderComponent,
    DescriptionComponent,
    FooterComponent,
    FusionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
