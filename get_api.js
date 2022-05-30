const countUrl = 'https://igf5ctozsa.execute-api.us-east-1.amazonaws.com/default/updateViews'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.NaN;
    });
}