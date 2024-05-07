import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbdDropdownBasic } from '../Dropdown/dropdown-basic/dropdown-basic.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgbdDropdownBasic],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
