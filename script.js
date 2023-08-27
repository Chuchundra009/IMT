const numWeight = document.querySelector('#weight');
const numHeight = document.querySelector('#height');
const btn = document.querySelector('#btn');
const conclusion = document.querySelector('.text-result');

let writeWeight = () => {
    const taskNum = numWeight.value;
    const taskNumTwo = numHeight.value;

    const conclNumTwo = taskNumTwo * 0.01;const formulaIMT =  taskNum/(conclNumTwo**2);

    const totalIMT = formulaIMT.toFixed(2);

    conclusion.innerHTML = `Индекс массы тела (ИМТ): ${totalIMT}`;
}


btn.addEventListener("click", writeWeight);