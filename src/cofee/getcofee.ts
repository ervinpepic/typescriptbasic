export class MustHaveCofee { 
	cofeeType: string;
	constructor() {
		console.log("Make it bulletproof")
	}
	setCofeeType(name:string){
		this.cofeeType = name
	}
}