const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(arrayOfGifts) {
    let i = 0;
    while (i < arrayOfGifts.length) {
        console.log(`Wrapped ${arrayOfGifts[i]} and added a bow!`);
        i++;
    }

    return arrayOfGifts;
}

function writeCards (names, event) {
    const sentLetters = [];
    for (let i = 0; i < names.length; i++) {
        sentLetters[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        console.log(sentLetters[i]);
    }

    return sentLetters;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}