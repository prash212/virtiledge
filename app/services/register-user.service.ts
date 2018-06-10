import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterUserService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user){
    user = JSON.stringify(user);
    return this.http.post("http://www.virtiledge.com/service/user.php?action=insert",user)
  }

  verifyEmail(email){
    return this.http.post("http://www.virtiledge.com/service/verify_email.php?action=select",{"email":email})
  }
}
