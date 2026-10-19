import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login-page');
    this.renderer.addClass(document.body, 'bg-body-secondary');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'bg-body-secondary');
  }
}