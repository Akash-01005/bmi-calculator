const calculateBtn = document.getElementById('calculateBtn');
const results = document.getElementById('result');

const weightBox = document.getElementById('weight');
const heightBox = document.getElementById('height');
let bmiMsg;
let a = [];


calculateBtn.addEventListener('click',calculateBmi)


function calculateBmi(){
    let result = (weightBox.value)/(heightBox.value*heightBox.value);
    
    if(weightBox.value == "" && heightBox.value == ""){
        alert('Please Enter Height and Weight!!');
    }

    
    if (result < 18.5) {
        bmiMsg = "Underweight";
    } else if (result < 25) {
        bmiMsg = "Normal Weight";
    } else if (result < 30) {
        bmiMsg = "Overweight";
    } else if(result >= 30){
        bmiMsg = "Obese";
    }

    results.textContent = `Result: ${Math.round(result)} ( ${bmiMsg} )`;   
}

