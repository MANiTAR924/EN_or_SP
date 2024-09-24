
const input0 = document.querySelector("input");
const button = document.getElementById('btn');
const container = document.getElementById("container");
document.getElementById('reg').addEventListener('click', () => {
    fetch('/sign').then(loli => console.log(loli))
});


button.addEventListener('click', () => {
    // Создаем новый элемент
    const newElement = document.createElement('li');
    newElement.classList.toggle('newBlankSt')
    newElement.textContent = `${input0.value}`;

    // Добавляем его в контейнер
 
    container.appendChild(newElement);
});

