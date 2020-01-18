// var gameId = '2017012200'; //test game
// var URL = 'http://www.nfl.com/liveupdate/game-center/' + gameId + '/' + gameId + '_gtd.json';
// var gameId = '2020011901'; // GB vs SF
var gameId = "2020011900"; // Chiefs vs Titans
var URL = 'http://www.nfl.com/liveupdate/scores/scores.json'
var logoUrl = 'https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/';
var refreshTime = 5000;
var gridSelected = "";
var homeNumber = 0;
var homeColor = "#000000";
var awayNumber = 0;
var awayColor = "#000000";
var currentWinner = "";

$(document).ready(function() { 
    getScores();     
});

function getScores(){
    $.ajax({
        url: URL, success: function (data) {
            gameData = data[gameId];
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

            if (game.posTeam == gameData.home.abbr){
                $("#posHome").html(`<i class="fas fa-football-ball"></i>`);
            } else if (game.posTeam == gameData.away.abbr){
                $("#posAway").html(`<i class="fas fa-football-ball"></i>`);
            }
            
            homeNumber = gameData.home.score.T.toString().split('').pop();
            homeColor = getTeamColor(gameData.home.abbr);
            awayNumber = gameData.away.score.T.toString().split('').pop();
            awayColor = getTeamColor(gameData.away.abbr);

            //refreshTime = gameData.nextupdate * 1000;        
            populateGrid();  
        }
    });
}

function getTeamColor(name){
    switch(name) {
        case "KC":
            return "#E31837"
          break;
        case "TEN":
            return "#0C2340"
          break;
        case "SF":
            return "#AA0000"
            break;
        case "GB":
            return "#203731"
            break;
        default:
          // code block
          return "#000000"
      }
}