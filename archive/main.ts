// let hello:any = 'Hi!'

// var hi = 'Hello'


// hello = 'abc'
// hi  = 'asdsds'

// let abc = 'another'

import { MustHaveCofee } from './src/cofee/getcofee'

function f(input: boolean) {

	let a = 100
	if (input) {
		let b = a + 1002010
		return b;
	} 
	return a;
}

console.log(f(true))
console.log(f(false))

let cofee = new MustHaveCofee()