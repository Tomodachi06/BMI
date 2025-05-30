const input = document.getElementById('height');
const input2 = document.getElementById('weight');
const btn = document.getElementById("button");

input.addEventListener('input', () => {
  const value = input.value;
  if (value.length > 3) {
     alert("You can put 2 or 3 digits only based on your height(cm)");
    input.value = value.slice(0, 3);
  } 
});

input2.addEventListener('input', () => {
  const value1 = input2.value;
  if (value1.length > 3) {
     alert("You can put 2 or 3 digits only based on your weight(kg)");
    input2.value = value1.slice(0, 3);
  } 
});

let inputs = document.querySelectorAll('#height, #weight');

inputs.forEach(input => {
  input.addEventListener('input', function () {
    if (document.getElementById('height').value !== "" || document.getElementById('weight').value !== "") {
      btn.classList.add("button-active");
    }
    else if(document.getElementById('height').value !== "" || document.getElementById('weight').value !== ""){
      btn.classList.remove("button-active");
      }else{
      btn.classList.remove("button-active");
    }
  });
});

btn.addEventListener('click',
 function () {
   
   if (input.value === "" && input2.value === "") {
    alert("invalid! please enter your Height(cm) and Weight(kg)!");
    document.getElementById("result").innerHTML = "";
   }else if (input.value === "") {
     alert("please enter your Height(cm)!");
     document.getElementById("result").innerHTML = "";
   }else if (input2.value === "") {
     alert("please enter your Weight(kg)!");
     document.getElementById("result").innerHTML = "";
   }else{
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = weight / (height / 100) ** 2;
  function random() {
  const motivUnder = [
  "You got this!",
  "Believe in yourself!",
  "Keep pushing forward!",
  "Don't give up!",
  "You're stronger than you think!",
  "Every step forward is a step closer to success!",
  "Stay motivated, stay focused!",
  "You are capable of amazing things!",
  "Don't let fear hold you back!",
  "Keep going, you're almost there!"
];
return motivUnder[Math.floor(Math.random() * motivUnder.length)];
}
function random1(){
const motivNormal = [
  "You're rocking your healthy weight!",
  "Keep up the good work, you're on track!",
  "Your body is amazing just the way it is!",
  "You're strong and capable, keep shining!",
  "Healthy habits are paying off, keep it up!",
  "You're doing great, don't stop now!",
  "Your weight is just right, keep feeling confident!",
  "You're a healthy and happy person, keep smiling!",
  "Every day is a new chance to feel great, make the most of it!",
  "You're on the right path, keep moving forward!"
];
  return motivNormal[Math.floor(Math.random() * motivNormal.length)];
}
function random2(){
  const motivObese = [
  "Every step forward is a step closer to a healthier you!",
  "You can do this, one day at a time!",
  "Small changes today, a healthier tomorrow!",
  "Don't give up, every effort counts!",
  "You're taking control of your health, keep going!",
  "Every healthy choice you make is a step in the right direction!",
  "You're strong and capable, don't let anything hold you back!",
  "Focus on progress, not perfection!",
  "You're on a journey to a healthier you, keep moving forward!",
  "Celebrate every small victory, you're getting closer to your goal!"
];
return motivObese[Math.floor(Math.random() * motivObese.length)]
}
  switch (true) {
    case (bmi > 10 && bmi < 18.5):
      alert("you're Underweight " + random());
      break;
    case (bmi >= 18.5 && bmi < 25):
      alert("you're Normal weight " + random1());
      break;
    case (bmi >= 25 && bmi < 30):
      alert("you're Overweight " + random2());
      break;
   case (bmi >= 30 && bmi < 35):
    console.log("Class I Obesity " + random2());
    break;
  case (bmi >= 35 && bmi < 40):
    console.log("Class II Obesity " + random2());
    break;
  case (bmi >= 40 && bmi < 50):
    console.log("Morbid Obesity (Class III) " + random2());
    break;
  case (bmi >= 50 && bmi < 60):
    console.log("Super Obesity " + random2());
    break;
  default:
    console.log("Super-Super Obesity " + random2());
}
  document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;}
}
)



