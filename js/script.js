const profootballAPI = 'https://profootballapi.com';
const apiKey = '?api_key=NKWzXrvIJ2pacls6bSdjEUHoin8RCGM5';

const statsType_players = '/players';
const statsType_schedule = '/schedule';
const statsType_game = '/game';
const statsType_teams = '/teams';
const statsType_plays = '/plays';

function gamesArray_apiCall(baseURL, key, statsType) {
    var games_callURL = baseURL + statsType + key + '&season_type=REG&year=2019&week=4';
    $.ajax({
        url: games_callURL,
        method: "POST",
        dataType: "json"
    }).then(function (response) {
        console.log(response[0].away);
    });
}

gamesArray_apiCall(profootballAPI,apiKey,statsType_schedule);

