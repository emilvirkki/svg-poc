// ope / mauno
// 1-5
// ääni / linkki
const persons = ['OPE', 'MAUNO'];
const numItems = 5;
let currentAudio;
let currentElement;

function setupSound(elem, person, i) {
    console.log(elem, person, i)
    elem.setAttribute('class', 'interactiveSound');
    let audio = new Audio(`sound/${person}_${i}.m4a`);
    elem.addEventListener('click', function() {
        if (currentAudio === audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentElement.setAttribute('class', 'interactiveSound');
            currentAudio = null;
            currentElement = null;
            return;
        }

        currentAudio && currentAudio.pause();
        currentAudio = audio;
        currentAudio.play();

        currentElement && currentElement.setAttribute('class', 'interactiveSound');
        currentElement = elem;
        currentElement.setAttribute('class', 'interactiveSound playing');
    })
}

function setupLink(elem, person, i) {
    elem.setAttribute('class', 'interactiveLink');
    // TODO add rect for linking
    elem.addEventListener('click', function() {
        window.open(`files/${person}_${i}.html`);
    })
}

window.addEventListener('DOMContentLoaded', function() {
    for(i = 1; i <= numItems; i++) {
        for (person of persons) {
            setupSound(document.getElementById(`${person}_${i}_ÄÄNI`), person, i)
            setupLink(document.getElementById(`${person}_${i}_LINKKI`), person, i)
        }
    }
});
