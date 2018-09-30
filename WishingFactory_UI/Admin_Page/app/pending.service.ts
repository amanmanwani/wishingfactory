import { Pending, Wishes } from "./pending.models";
import { Injectable } from "../../node_modules/@angular/core";
import { getViewData } from "../../node_modules/@angular/core/src/render3/instructions";

@Injectable()
export class PendingService {
	private pend:Pending[]=[
	new Pending('Ram Dixit',
	'travel abroad',
	'to travel abroad once in his life along with his parents,but could not afford the expense'),

	new Pending('',
	'Buy a car',
	'to buy a new car for his father'),

	new Pending('Daisy Mehta','',''),
	new Pending('','',''),
	new Pending('','','')	
	]

	private wish:Wishes[]=[
		new Wishes('Poonam Waghela',
		'Get admission into IIT',
		'Dilip Raval',86000),

		new Wishes('Nisha',
		'To start a business',
		'Vinay',100000),

		new Wishes('Gia','To pay off the scholarship','Ananya',1000000),

		new Wishes('Nisha',
		'To start a business',
		'Vinay',
		100000),

		new Wishes('Mira',
		'Get admission into IIT',
		'Nancy',
		70000)
	]
    
getData(){
    console.log(this.pend);
    return this.pend;
}

get(){
	console.log(this.wish);
	return this.wish;
}
}