const { template } = require('@babel/core')


function calculateBMI(weight, height) {
  let BMI = weight/(height*height)
  return BMI;
}

function getBMIMeaning(weight, height){
  let BMI=calculateBMI(weight, height)
  if(BMI < 18.5){
  return 'Underweight';
  }
  if(BMI <= 24.9){
    return 'Normal weight';
  }
  if(BMI > 25){
    return 'Overweight';
  }
}

module.exports = getBMIMeaning