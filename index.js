// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  if (document.body.lastChild === clonedBtn) {
    document.body.removeChild(clonedBtn);
  } else {
    clonedBtn.innerText = "Я изменю тебя";
    document.body.appendChild(clonedBtn);
    clonedBtn.style.backgroundColor = "#a78b71";
    clonedBtn.style.color = "white";
    clonedBtn.style.fontSize = "20px";
    clonedBtn.style.border = "none";
    clonedBtn.style.padding = "20px";
  }
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";  
})