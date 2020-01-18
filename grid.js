var gridValues = [
    ["&nbsp;","0","1","2","3","4","5","6","7","8","9"],
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
        gridHtml += `<div class="row  no-gutters">`;
        
        for (var col = 0; col < gridValues[row].length; col++) {
            var selectedClass = "";
            var borderClass = "";
            var bgStyle = "";

            if(row == 0 && col > 0){
                bgStyle = "color: #ffffff; background-color: " + homeColor;
            }
            if(col == 0 && row > 0){
                bgStyle = "color: #ffffff; background-color: " + awayColor;
            }
            if (gridValues[0][col] == homeNumber || gridValues[row][0] == awayNumber){
                borderClass = "border-warning";
            }
            if (row == 0 && gridValues[row][col] == homeNumber){
                borderClass = "border-warning";
            }
            if (col == 0 && gridValues[row][col] == awayNumber){
                borderClass = "border-warning";
            }
            if (row > 0 && col > 0 && gridSelected == gridValues[row][col]){
                selectedClass = "bg-primary";
            }
            if (row > 0 && col > 0 && gridSelected == gridValues[row][col] ){
                selectedClass = "bg-primary";
            }
            if (gridValues[0][col] == homeNumber && gridValues[row][0] == awayNumber){
                selectedClass = "bg-warning";
                currentWinner = gridValues[row][col];
            }
            
            gridHtml += `<div style="${bgStyle}" class="col text-center border ${borderClass} ${selectedClass}"><span id="square${row}${col}" onclick="pickInitials('${gridValues[row][col]}')">${gridValues[row][col]}</span></div>`;
        }
        gridHtml += `</div>`;
    }
    $("#gameGrid").html(gridHtml);
}

function pickInitials(selected){
    gridSelected = selected;
    populateGrid();
}

