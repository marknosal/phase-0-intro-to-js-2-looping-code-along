function writeCards(name, event) {
    const sentCards = [];
    for (let i = 0; i < name.length; i++) {
        sentCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    console.log(sentCards);
    return sentCards;
}

writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise')

function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
        console.log(countDown);
        countDown--;
    }
}

countDown (10);