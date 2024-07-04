let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
    {
        quote: `"Do not pity the dead, Harry. Pity the living, and, above all those who live without love."`,
        person: `Albus Dumbledore`
    },
    {
        quote: `"It is impossible to manufacture or imitate love"`,
        person: `"Horace Slughorn"`
    },
    {
        quote: `"Being different isn't a bad thing. I mean that you are brave enough to be yourself."`,
        person: `"Luna Lovegood"`
    },
    {
        quote: `"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals."`,
        person: `"Sirius Black"`
    },
    {
        quote: `"Never trust anything that can think for itself if you can’t see where it keeps its brain."`,
        person: `"Arthur Weasley"`
    },
    {
        quote: `"Every human life is worth the same, and worth saving."`,
        person: `"Kingsley Shacklebolt"`
    },
    {
        quote: `"Have a biscuit, Potter."`,
        person: `"Minerva McGonagall"`
    },
    {
        quote: `"Happiness can be found even in the darkest of times if one only remembers to turn on the light."`,
        person: `"Albus Dumbledore"`
    },
    {
        quote: `"Socks are Dobby’s favorite, favorite clothes, sir!"`,
        person: `"Dobby"`
    }
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
