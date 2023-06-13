'use strict'
function pow(num, degree) {
	if (degree === 0) {
	  return 1
	} else if (degree < 0) {
	  return 1 / pow(num, -degree)
	} else {
	  return num * pow(num, degree - 1)
	}
  }

console.log(pow(7, 3))
console.log(pow(4, 3))
console.log(pow(9, 2))
console.log(pow(-9, -1))