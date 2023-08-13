import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { Position } from './services/admin/alertify.service';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrSerice: CustomToastrService,) {

    toastrSerice.message("Merhaba", "Furkan", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.BottomRigh
    });
    toastrSerice.message("Merhaba", "Furkan", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomRigh
    });

  }

}

