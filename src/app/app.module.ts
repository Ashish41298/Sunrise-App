import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { NewserviceService } from './NSservice/NewserviceService';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TechnewsComponent } from './technews/technews.component';
import { LoginComponent } from './userAuth/login/login.component';
import { SignupComponent } from './userAuth/signup/signup.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForgateComponent } from './userAuth/forgate/forgate.component';
import { AuthService } from './NSservice/auth.service';
import { UsersService } from './NSservice/users.service';
import { ProfileComponent } from './userAuth/profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { TestgService } from './NSservice/testg.service';
import { WindowrefService } from './NSservice/windowref.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CommentsComponent } from './comments/comments.component';
import { DatePipe } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { CityweatherComponent } from './cityweather/cityweather.component';
import { GujaratComponent } from './gujarat/gujarat.component';
export interface ICustomWindow extends Window {
  __custom_global_stuff: string;
}
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '221132d1-11b5-4624-ae76-c18b2131fb2c',
      redirectUri: 'https://sunrise-app.tk'
    }
  })
}
import { CategoryComponent } from './category/category.component';
import { BusinessComponent } from './business/business.component';
import { BudgetComponent } from './category/budget/budget.component';
import { MagazineComponent } from './category/magazine/magazine.component';
import { SportsComponent } from './category/sports/sports.component';
import { LifestyleComponent } from './category/lifestyle/lifestyle.component';
import { UtilityComponent } from './category/utility/utility.component';
import { DharmdarshanComponent } from './category/dharmdarshan/dharmdarshan.component';
import { CovidComponent } from './category/covid/covid.component';
import { EntComponent } from './category/ent/ent.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';
import { TabsComponent } from './tabs/tabs.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    TechnewsComponent,
    LoginComponent,
    SignupComponent,
    ForgateComponent,
    ProfileComponent,
    CommentsComponent,
    CityweatherComponent,
    GujaratComponent,
    CategoryComponent,
    BusinessComponent,
    BudgetComponent,
    MagazineComponent,
    SportsComponent,
    LifestyleComponent,
    UtilityComponent,
    DharmdarshanComponent,
    CovidComponent,
    EntComponent,
    TabsComponent,
    Error404Component,
  ],
  imports: [
    PickerModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    TextFieldModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MsalModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot()
  ],
  providers: [NewserviceService, AuthService, UsersService,
    TestgService, WindowrefService, DatePipe,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    }, MsalService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
