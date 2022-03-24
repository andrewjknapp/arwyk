function addCard(id, info) {
    let location = document.getElementById(id);

    let newElement = document.createElement("section");

    let contents = `
    <h2>${info.title}</h2>
    <p>${info.text}</p>
    `

    newElement.innerHTML = contents;

    location.appendChild(newElement);
}

let mainCards = [
    {
        title: 'About',
        text: 'Arwyk is based out of sunny Encinitas, CA. Each beautiful guitar produced is a labor of love'
    },
    {
        title: 'Contact',
        text: "Let's get in touch, you can contact us at _____@gmail.com"
    }
]

function main() {
    mainCards.forEach(card => addCard('main', card))
}

main();