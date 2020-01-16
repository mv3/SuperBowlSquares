var gridValues = [
    ["","0","1","2","3","4","5","6","7","8","9"],
    ["1","MV","JP","KC","MS","TM","AS","GL","KH","MM","SH"],
    ["2","SH","MV","JP","KC","MS","TM","AS","GL","KH","MM"],
    ["3","MM","SH","MV","JP","KC","MS","TM","AS","GL","KH"],
    ["4","KH","MM","SH","MV","JP","KC","MS","TM","AS","GL"],
    ["5","GL","KH","MM","SH","MV","JP","KC","MS","TM","AS"],
    ["6","AS","GL","KH","MM","SH","MV","JP","KC","MS","TM"],
    ["7","TM","AS","GL","KH","MM","SH","MV","JP","KC","MS"],
    ["8","MS","TM","AS","GL","KH","MM","SH","MV","JP","KC"],
    ["9","KC","MS","TM","AS","GL","KH","MM","SH","MV","JP"],
    ["0","JP","KC","MS","TM","AS","GL","KH","MM","SH","MV"]                    
];

function populateGrid(){
    var gridHtml ="";
    for (var row = 0; row < gridValues.length; row++) {
        gridHtml += `<div class="row">`;
        for (var col = 0; col < gridValues[row].length; col++) {
            gridHtml += `<div class="col-">${gridValues[row][col]}</div>`;
        }
        gridHtml += `</div>`;
    }
    $("#gameGrid").html(gridHtml);
}