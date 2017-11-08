class SweetSweetBasil { 
	name: string;
	color: string;
	constructor() {
		// console.log("hello" + name)
		// this.color = startcolor
	}

	getcolor() {
		console.log(this.color)
	}
}

// let ervin = new SweetSweetBasil("ervin", "green")
// let pepic = new SweetSweetBasil("Pepic", "Brown")

// ervin.getcolor()
// pepic.getcolor()

// console.log(pepic.color)

class Basil extends SweetSweetBasil {
	nameNew: string;
	constructor(name:string, startcolor:string) {
		super()
		this.nameNew = name
		this.color =startcolor

	}
	setNewColor(newColor:string) {
		this.color = newColor
		super.getcolor()
	}
}

let ervin1 = new Basil("hej","o")

ervin1.getcolor()
ervin1.setNewColor("roza")

