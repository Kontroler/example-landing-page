import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EnovaDescriptionComponent } from './components/enova-description/enova-description.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FocusOnFeaturesComponent } from './components/focus-on-features/focus-on-features.component';
import { YourSuccessComponent } from './components/your-success/your-success.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EnovaDescriptionComponent,
    FocusOnFeaturesComponent,
    YourSuccessComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
