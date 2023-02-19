//triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const firstValue = getValueFromInput("triangle-first");
  const secondValue = getValueFromInput("triangle-second");
  const area = 0.5 * firstValue * secondValue;
  setInnerText("tri-a", "tri-b", firstValue, secondValue);
  createNewElement(area, "Triangle");
});
//rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const firstValue = getValueFromInput("rectangle-first");
  const secondValue = getValueFromInput("rectangle-second");
  const area = firstValue * secondValue;
  setInnerText("rec-a", "rec-b", firstValue, secondValue);
  createNewElement(area, "Rectangle");
});
//parallelogram calculation
document.getElementById("para-btn").addEventListener("click", function () {
  const firstValue = getValueFromInput("para-first");
  const secondValue = getValueFromInput("para-second");
  const area = firstValue * secondValue;
  setInnerText("par-a", "par-b", firstValue, secondValue);
  createNewElement(area, "Parallelogram");
});
//rhombus calculation
document.getElementById('rhombus-btn').addEventListener('click',function() {
  const firstValue = getValueFromInput('rhombus-first');
  const secondValue = getValueFromInput('rhombus-second');
  const area = 0.5 * firstValue * secondValue;
  setInnerText('rom-a','rom-b',firstValue,secondValue);
  createNewElement(area, "Rhombus");
});
//pentagon calculation
document.getElementById('pentagon-btn').addEventListener('click',function() {
  const firstValue = getValueFromInput('pentagon-first');
  const secondValue = getValueFromInput('pentagon-second');
  const area = 0.5 * firstValue * secondValue;
  setInnerText('pen-a','pen-b',firstValue,secondValue);
  createNewElement(area, "Pentagon");
});
//ellipse calculation
document.getElementById('ellipse-btn').addEventListener('click',function() {
  const firstValue = getValueFromInput('ellipse-first');
  const secondValue = getValueFromInput('ellipse-second');
  const area = 3.1416 * firstValue * secondValue;
  setInnerText('ell-a','ell-b',firstValue,secondValue);
  createNewElement(area, "Ellipse");

});