const profootballAPI = 'https://profootballapi.com';
const apiKey = '?api_key=NKWzXrvIJ2pacls6bSdjEUHoin8RCGM5';
const offense = '&stats_type=offense';

function players_apiCall(baseURL, key, statsType) {
    var players_callURL = baseURL + '/players' + key + statsType + '&player_name=d.watson';
    $.ajax({
        url: players_callURL,
        method: "POST"
    })
    .then(response => {
        console.log(response);
        //var output = response;
    });
    //console.log(output);
}

players_apiCall(profootballAPI,apiKey,offense);