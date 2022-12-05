const { template } = require('@babel/core')


function calculateBMI(weight, height) {
   return weight/(height*height)
}

function getBMIMeaning(weight, height){
  const BMI = calculateBMI(weight, height)
  // if(BMI < 18.5){
  //   return "Underweight"
  // }
  // if(BMI <= 24.9){
  //   return "Normal weight"
  // }
  // if(BMI > 25.0){
  //   return "Overweight"
  // }

  return BMI < 18.5 ? "Underweight" : BMI <= 24.9 ? "Normal weight" : "Overweight"
}

module.exports = getBMIMeaning
