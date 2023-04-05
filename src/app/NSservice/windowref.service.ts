import { Injectable } from '@angular/core';
import { ICustomWindow } from '../app.module';


function getWindow(): any {
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class WindowrefService {

  get nativeWindow(): ICustomWindow {
    return getWindow();
  }
}
