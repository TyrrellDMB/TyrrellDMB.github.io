const countUrl = 'https://igf5ctozsa.execute-api.us-east-1.amazonaws.com/default/updateViews'
const countElement = document.getElementById('count');

updateViewCount();

//Function Used to Update ViewCounter 

function updateViewCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerText = res;
    });
}
