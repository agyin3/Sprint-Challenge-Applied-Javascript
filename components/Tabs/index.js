// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(results => {
        // console.log(results)
        results.data.topics.forEach(topic => {
            topicsContainer.appendChild(Tabs(topic));
        })
    })
    .catch(err => {
        console.log(err);
})

function Tabs(topic) {
    const tab = document.createElement('div');
    tab.textContent = topic;
    tab.classList.add('tab');
    tab.addEventListener('focus', () => {
        tab.classList.add('active-tab')
    }, true);
    tab.addEventListener('blur', () => {
        tab.classList.remove('active-tab')
    }, true)

    return tab;
}

const topicsContainer = document.querySelector('.topics');
