const quotes=[
    {
        quote:`Anger is the ultimate destroyer of your own peace of mind.`,
        author:`- Dalai Lama`
    },
    {
        quote:`Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.`,
        author:`- Michelle Obama`
    },
    {
        quote:`Emotional empathy is what motivates us to help others.`,
        author:`- Brian Goldman`
    },
    {
        quote:`The true wealth of a nation lies not in it's gold or silver but in it's learning, wisdom and in the uprightness of its sons.`,
        author:`- Khalil Gibra`
    },
    {
        quote:`Make the decision, make another. Remake one past, you cannot.`,
        author:`- Yodha`
    },
    {
        quote:`If you want to see a rainbow you have to learn to see the rain.`,
        author:`- Paulio Coelho`
    },
    {
        quote:`We must dare to think unthinkable thoughts.`,
        author:`- James W. Fulvright`
    },
    {
        quote:`Remember to focus on goals that are within your control`,
        author:`- Tony Dungy`
    },
    {
        quote:`A cult is a religion with no political power.`,
        author:`- Tom Wolfe`
    },
    {
        quote:`Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.`,
        author:`- Georg Christoph Lichtenberg`
    },
    {
        quote:`In order to be irreplaceable one must always be different.`,
        author:`- Coco Chanel`
    },
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})