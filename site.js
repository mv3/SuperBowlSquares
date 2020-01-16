var gameId = '2017012200';
var URL = 'http://www.nfl.com/liveupdate/game-center/' + gameId + '/' + gameId + '_gtd.json';
var logoUrl = 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/';
var refreshTime = 1000;

$(document).ready(function() { 
    getScores(); 
    populateGrid();
});

function getScores(){
    $.ajax({
        url: URL, success: function (data) {
            gameData = data[gameId];
            console.log(gameData);
            $("#homeTeam").html( gameData.home.abbr);
            $("#homeLogo").html(`<img src="${logoUrl + gameData.home.abbr}.svg" alt="Home Team" class="teamLogo"></img>`);
            $("#homeScore").html( gameData.home.score.T);
            $("#awayTeam").html( gameData.away.abbr);
            $("#awayLogo").html(`<img src="${logoUrl + gameData.away.abbr}.svg" alt="Away Team" class="teamLogo"></img>`);
            $("#awayScore").html( gameData.away.score.T);
            $("#qtr").html( gameData.qtr);
            $("#down").html( gameData.down);
            $("#togo").html( gameData.togo);
            $("#posTeam").html( gameData.posTeam);
            $("#yl").html( gameData.yl);
            $("#clock").html( gameData.clock);

            refreshTime = gameData.nextupdate * 1000;
        }
    });
    //setTimeout(refreshTime,getScores());
}