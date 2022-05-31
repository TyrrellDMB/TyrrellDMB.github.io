const countUrl = 'https://igf5ctozsa.execute-api.us-east-1.amazonaws.com/default/updateViews'
const countElement = document.getElementById('count');

updateViewCount();

function updateViewCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.updateValues;
    });
}