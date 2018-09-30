//export interface usdata {
//	name: string;
//	type: string;
//	details: string;
//}

export class User{
	public name:string;
	public type:string;
	public details:string;

constructor(name:string,type:string,details:string){
	this.name=name;
	this.type=type;
	this.details=details;
}
}