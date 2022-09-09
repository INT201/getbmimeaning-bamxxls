const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let BMI = weight/(height*height);
  return BMI;
}
function getBMIMeaning(weight, height) {
  if(calculateBMI() < 18.5){
  return "Underweight";
  }
  if(calculateBMI() >= 18.5 && calculateBMI() <= 24.9){
    return "Normal Weight";
  }
  if(calculateBMI() > 25){
    return "Overweight";
  }
}
module.exports = getBMIMeaning

