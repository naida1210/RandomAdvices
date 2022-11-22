let num =  document.querySelector(".AdviceNumber");
let advice = document.querySelector(".advice");
let random  = document.querySelector(".random");

random.addEventListener('click', getAdvice);


 async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    num.innerHTML = "ADVICE  # "+data.slip.id;
    advice.innerHTML = '"' + data.slip.advice+ ' " ';


}