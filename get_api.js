async function getvisits(){
    return  await fetch("https://igf5ctozsa.execute-api.us-east-1.amazonaws.com/default/updateViews",
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));
 }

async function visitCount() {
	var visits = await getvisits();
	document.getElementById("count").innerHTML = visits
}