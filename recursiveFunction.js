'use strict'
function pow(num, degree) {
	if (degree === 0) {
	  return 1
	}

	else if (degree === 1) {
		return num
	}

	else if (degree > 0) {
		return num * pow(num, degree - 1)
	}

	else if (degree < 0) {
	  return 1 / (num * pow(num, -degree - 1))
	} 
  }

console.log(pow(7, x))
console.log(pow(4, 3))
console.log(pow(9, 5))
console.log(pow(-9, -3))