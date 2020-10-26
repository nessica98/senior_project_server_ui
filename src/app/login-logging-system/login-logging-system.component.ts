import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-logging-system',
  templateUrl: './login-logging-system.component.html',
  styleUrls: ['./login-logging-system.component.css']
})
export class LoginLoggingSystemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var userInput = document.getElementById("email1") as HTMLInputElement;
    var passwordInput = document.getElementById("password1") as HTMLInputElement;
    var form_el = document.getElementById("login1");

    form_el.addEventListener('submit', (e)=>{
      e.preventDefault()
      console.log(userInput.value)

      if(userInput.value=='hwangjs'&&passwordInput.value=='js1998'){
        localStorage.setItem('isLoggedIn',"true")
        console.log('true')
        this.router.navigate(['/dashboard'])
        //window.location.replace("/logbook")
      }else{
        alert('Login fault')
        location.reload();
      }
    })
  }

}
