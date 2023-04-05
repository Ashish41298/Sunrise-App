import { Component, ViewChild, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './NSservice/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { UsersService } from './NSservice/users.service';
import { MsalService } from '@azure/msal-angular';
import { doc, getDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { TestgService } from './NSservice/testg.service';
import { Auth, authState } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  // user$ = this.usersService.currentUserProfile$;
  currentUser$ = authState(this.auths)
  user$ = this.currentUser$;
  name: any = [];
  msname = this.msalservice.instance.getActiveAccount();
  hsh = "none"
  showFiller = false;
  public show: boolean = false;
  firebduser: any = {};
  dsdta: any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  uid: any;
  constructor(private observer: BreakpointObserver, private auth: AuthService, private toast: HotToastService,
    private router: Router, private usersService: UsersService, private msalservice: MsalService, private afs: Firestore,
    private wdcs: TestgService, private auths: Auth
  ) { }
  loader = false;

  async ngOnInit() {
    this.navtoggele();
    this.currentUser$.subscribe(async (res) => {
      this.uid = res?.uid;
      if (res?.uid) {
        const docRef = doc(this.afs, "users", res!.uid);
        const docSnap = await getDoc(docRef)
        this.firebduser = await docSnap.data();
      } else {
        console.log("null");
      }

    });

    this.loader = true;
    setInterval(() => {
      this.loader = false;
    }, 2000);
    const cityname: string = 'surendranagar';
    this.wdcs.getweatherdata(cityname).subscribe((res) => {
      this.dsdta = res.main.temp
    })
    if (this.msalservice.instance.getActiveAccount() !== null) {
      const uid: any = this.msalservice.instance.getActiveAccount()?.tenantId;
      const docRef = doc(this.afs, "users", uid);
      const docSnap = await getDoc(docRef);
      this.name = docSnap.data();

      this.name = {
        uid: this.msalservice.instance.getActiveAccount()?.tenantId,
        email: this.msalservice.instance.getActiveAccount()?.username,
        displayName: this.msalservice.instance.getActiveAccount()?.name

      };
    }

  }


  logout() {
    this.auth.anyout();

    this.auth.anyout().pipe(
      this.toast.observe({
        success: 'Logged out! thanks for visiting ✅',
        loading: 'Login out... ☕ ',
        error: ({ message }) => `${message} 😢 `,

      })
    ).subscribe(() => {
      this.router.navigate(['Login']);
    });
  }

  navigation() {
    this.router.navigate(['/profile']);
  }

  async ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(0.5))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        } else {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }

      });

  }

  winreload() {
    return window.location.reload();
  }

  isHidden: boolean = false;
  onhidden() {
    this.isHidden = !this.isHidden
  }
  toggle() {
    this.show = !this.show;
  }

  hn: boolean = true;
  navtoggele() {
    setInterval(() => {
      this.hn = false
    }, 20000);
    this.hn = !this.hn;
  }

}


