'use strict'
function pow(num, degree) {
	if (typeof num !== 'number' || typeof degree !== 'number') {
	  throw new Error('Обидва аргумента мають бути числом')
	}
  
	if (degree === 0) {
	  return 1
	} 

	else if (degree < 0) {
	  return 1 / pow(num, -degree)
	} 

	else if (degree % 2 === 0) {
	  return pow(num * num, degree / 2)
	} 

	else {
	  return num * pow(num * num, (degree - 1) / 2)
	}
  }
  
  console.log(pow(2, 3))
  console.log(pow(5, -2))
  console.log(pow(10, 'f'))
  console.log(pow('h', 2))
	
	
	
	
	
	
	
	
	
	
	
	
	
	

