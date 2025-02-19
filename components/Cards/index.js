// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Cards(cardInfo) {
    // Create Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    // Create Structure 

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(name);
    imgContainer.appendChild(img);

    // Add Data 
    headline.textContent = cardInfo.headline;
    img.src = cardInfo.authorPhoto;
    name.textContent = cardInfo.authorName;

    // Add Styling
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
        console.log(results);
        const articleObj = results.data.articles;
        for(const prop in articleObj) {
            articleObj[prop].forEach(article => {
                cardsContainer.appendChild(Cards(article));
            })
        }
    })
    .catch((err) => {
        console.log(err);
})

const cardsContainer = document.querySelector('.cards-container');
