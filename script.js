function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function getRandom (element) {
    element.value = parseInt(Math.random() * 100);
}

let buttonStarter = document.getElementById("button-start-randomizer");
let form = document.getElementById("form-input").elements;

function startRandom() {
    let stopRandomizer = false;
    buttonStarter.value = 'Остановить'
    buttonStarter.onclick = async function () {
        stopRandomizer = true;
        buttonStarter.value = 'Старт';
        buttonStarter.onclick = startRandom;
        for (let elem of form) {
            await sleep(3000);
            getRandom(elem)
            elem.readOnly = false;
        }
    };
    setTimeout(function run() {
        for (let elem of form) {
            getRandom(elem);
            elem.readOnly = true;
        }
        if (!stopRandomizer) {
            setTimeout(run, 300);
        }
    }, 300);
}
