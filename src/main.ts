import * as $ from "jquery";
import { MustHaveCofee } from './cofee/getcofee'

class ReallyCofee extends MustHaveCofee {
	cofeeType = "booletproof"
	constructor() {super()}
		f(input: boolean) {
			let a = 100
			if (input) {
				let b = a + 1002010
				return b;
			} 
			return a;
		}
		setCofeeType(name:string) {
			super.setCofeeType(name)
			console.log("hello there" + this.cofeeType)
			$("body").css('background-color', 'red')
			$("body").html("<h1>" + this.cofeeType + "</h1>")
		}
	}
let newCofee = new ReallyCofee()
newCofee.f(true)
newCofee.setCofeeType("Bylettproof")

let oldCofee = new MustHaveCofee()





