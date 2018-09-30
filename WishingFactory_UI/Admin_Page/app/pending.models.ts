export class Pending{
	public name:string;
	public type:string;
	public details:string;

constructor(name:string,type:string,details:string){
	this.name=name;
	this.type=type;
	this.details=details;
 }
}

export class Wishes{
	public name:string;
	public wish:string;
	public donor:string;
	public cost:number

constructor(name:string,wish:string,donor:string,cost:number){
	this.name=name;
	this.wish=wish;
	this.donor=donor;
	this.cost=cost;
 }
}
