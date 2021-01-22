const sportsdataio = 'https://api.sportsdata.io/v3/nfl';
const apiKey = 'e0c645b4a8594f6d99e7c453ba756fd2';
const gameInProgress = '/scores/json/AreAnyGamesInProgress'

function apiCall(baseURL, extURL, key) {
    var callURL = baseURL + extURL + '?key=' + key;
    $.ajax({
        url: callURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(response);
    });
}

apiCall(sportsdataio,gameInProgress,apiKey);