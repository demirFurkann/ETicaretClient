import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor(private spinner: NgxSpinnerService){}
  showSpinner(spinerNameType: SpinnerType){
        this.spinner.show(spinerNameType);

        setTimeout(()=>this.hideSpinner(spinerNameType),1000);
  }
  hideSpinner(spinnerNameType:SpinnerType){
    this.spinner.hide(spinnerNameType)
  }
}

export enum SpinnerType{
  BallAtom="s1",
  BallScaleMultiple="s2",
  BallSpinClockwiseFadeRotating="s3"
}