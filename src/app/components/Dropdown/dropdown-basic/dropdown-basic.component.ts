import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-dropdown-basic',
	standalone: true,
	imports: [RouterLink, NgbDropdownModule],
	templateUrl: './dropdown-basic.component.html',
})
export class NgbdDropdownBasic {}
