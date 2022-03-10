//BMI Calculator==========================
let patients = document.querySelectorAll('.patient')

BMIcalc = (weight,height) => {
  let BMI = weight / height / height * 10000
  return BMI.toFixed(2)
}
//Add patient================================
getPatient = (form) => {
  let patient = {
    name: form.name.value,
    weight: form.weight.value,
    height: form.height.value,
    BMI: BMIcalc(form.weight.value, form.height.value)
  }
  return patient
}
buildTd = (data, cla) => {
  let td = document.createElement('td')
  td.textContent = data
  td.classList.add(cla)
  return td
}
buildTr = (patient) => {
  let patientTr = document.createElement('tr')
  patientTr.classList.add('patient')
  patientTr.appendChild(buildTd(patient.name, 'info-name'))
  patientTr.appendChild(buildTd(patient.weight, 'info-weight'))
  patientTr.appendChild(buildTd(patient.height, 'info-height'))
  patientTr.appendChild(buildTd(patient.BMI, 'info-BMI'))
  patientTr.appendChild(buildTd('Remove', 'remove-button'))
  console.log(patientTr)
  return patientTr
}
addPatient = (patient) => {
  let patientTr = buildTr(patient);
  let table = document.querySelector('#patients-table');
  table.appendChild(patientTr);

}
let addButton = document.querySelector('#add-patient-btn')
add = (event) => {
  event.preventDefault();
  let form = document.querySelector('#add-patient')
  let patient = getPatient(form)
  addPatient(patient)
  form.reset()
}
addButton.addEventListener('click', add)
//===========================================
//Insert BMI into the table================
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

//remove patient ============
removePatient = (event) => {
  event.target.parentNode.classList.add('remove')
}
let removePatientButton = document.querySelectorAll('.remove-button')
for (let i = 0; i < removePatientButton.length; i++) {
  removePatientButton[i].addEventListener('click', removePatient)
  
}


