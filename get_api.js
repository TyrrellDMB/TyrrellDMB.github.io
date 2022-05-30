const countUrl = 'https://igf5ctozsa.execute-api.us-east-1.amazonaws.com/default/updateViews'
const countElement = document.getElementById('count');

updateViewCount();

async function updateViewCount() {
    return  await fetch("countUrl"),
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      },
    }
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.stats;
    });
}