let patients = document.querySelectorAll('.patient')

BMIcalc = (weight,height) => {
  let BMI = weight / height / height * 10000
  return BMI.toFixed(2)
}

for (let i = 0; i < patients.length; i++) {
  let patient = patients[i];
  let weight = patient.querySelector('.info-weight').textContent
  let height = patient.querySelector('.info-height').textContent
  let tdBMI = patient.querySelector('.info-BMI')
  let validWeight = weight>0 && weight<1000
  let validHeight = height>0 && height<300

  if (!validWeight) {
    tdBMI.textContent = 'Invalid weight!'
    patient.classList.add('invalid-patient')
  }

  if (!validHeight) {
    tdBMI.textContent = 'Invalid height!'
    patient.classList.add('invalid-patient')
  }
  if(validWeight && validHeight){
    let BMI = BMIcalc(weight, height)
    tdBMI.textContent = BMI
  }
}
