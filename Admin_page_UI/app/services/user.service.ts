import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model.ts';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private users:User[]=[
	new User('Ram Dixit',
	'travel abroad',
	'to travel abroad once in his life along with his parents,but could not afford the expense'),

	new User('Daisy Mehta',
	'to buy a car',
	'to buy a car for his father'),
	]

}
