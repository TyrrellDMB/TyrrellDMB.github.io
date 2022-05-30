const countUrl = 'https://igf5ctozsa.execute-api.us-east-1.amazonaws.com/default/updateViews'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.visits;
    });
}

updateTemp();

function updateTemp() {
    fetch(tempUrl)
        .then(res => res.json())
        .then(res => {
// jsonpath doesn't work. quick and dirty fix now, proper fix TBD
//        tempElement.innerHTML = res.data.result[?(@.metric.job=='weatherpi')].value[1];
        tempElement.innerHTML = res.data.result[0].value[1];
    });
}