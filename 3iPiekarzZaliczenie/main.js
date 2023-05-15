const form1 = document.querySelector('#addingItems');
const username = document.querySelector('#userName');
const age = document.querySelector('#userAge');
const displayFavoriteAnimals = document.querySelector('#displayFavoriteAnimals');
const displayAddingItems = document.querySelector('#displayAddingItems');
const form2 = document.querySelector('#calculations');
const num1=document.querySelector('#num1');
const num2=document.querySelector('#num2');
const sumSpan=document.querySelector('#sumSpan');
const divideSpan=document.querySelector('#divideSpan');
parseInt(num1.value);
parseInt(num2.value);
form1.addEventListener('submit', (evt) =>{
evt.preventDefault();
if (username.value=="" || username.value==null){
	displayAddingItems.innerText='Podaj swoje imię';
} else {
	const animal = document.querySelector('[name="favoritAnimals"]:checked');
    const randomArry = greetings[Math.floor(Math.random() * greetings.length)];
	const element1 = document.createElement('p');
    const element2 = document.createElement('p');
    for(let i=0;i<=(username.value).length;i++){
	element1.innerText += `${randomArry} ${username.value}, Your age is ${age.value}`;
    displayAddingItems.appendChild(element1);
    }
    element2.innerText = `Ja też lubię ${animal.value}`;
	displayFavoriteAnimals.appendChild(element2);
}
})

form2.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    console.log(num2.value);
    if (isNaN(parseInt(num1.value)) || isNaN(parseInt(num2.value))){
        divideSpan.innerText='Podaj liczbę';
        sumSpan.innerText='Podaj liczbę';
    } else {
    const sum = document.createElement('p');

    const suma = (Number(num1.value))+(Number(num2.value));
    sum.innerText+=`${suma}`;
    sumSpan.appendChild(sum);
    const divide = document.createElement('p');
    const dzielenie = (num1.value)/(num2.value);
    divide.innerText +=`${dzielenie}`;
    divideSpan.appendChild(divide);
}
})