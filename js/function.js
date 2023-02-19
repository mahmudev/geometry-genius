//random color generate
randomColor = function(id) {
    const card = document.getElementById(id);
    card.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}
//take value from input
function getValueFromInput(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
//set value function
function setValueInText (id,returnValue){
    const inputId = document.getElementById(id)
    inputId.innerText = returnValue;
}
//set value function
function setInnerText (inputOne,inputTwo,setOne,setTwo){
    const formulaA = document.getElementById(inputOne);
    const formulaB = document.getElementById(inputTwo);
    if(isNaN(setOne) || isNaN(setTwo) || setOne < 0 || setTwo < 0){
        alert("Enter a valid number")
        return;
    }
    formulaA.innerText = setOne;
    formulaB.innerText = setTwo;
}
//create new element
let value = 0;
function createNewElement (area, areaName){
    const areaContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    value++;
    tr.innerHTML = `
    <td>${value}.</td>
    <td class="pl-2 text-sm w-8">${areaName}</td>
    <td class="px-2 text-sm">${area.toFixed(2)}cm<sup>2</sup></td>
    <td><button class="bg-blue-400 text-white font-semibold px-3 rounded-md">Convert to m<sup>2</sup></button></td>`
    if(isNaN(area)){
        return;
    }
    areaContainer.appendChild(tr);
}
