var gridValues = [
    ["&nbsp;","9","1","6","7","8","5","0","2","3","4"],
    ["2","MV","SR","JP","SR","RS","KC","SR","MO","TC","KH"],
    ["5","KC","MV","SM","JP","MO","AS","AS","SM","RS","KC"],
    ["8","SR","RS","DS","SM","JP","SM","MO","SM","SM","RS"],
    ["7","AS","MO","AS","MV","SR","JP","KC","RS","SR","KC"],
    ["1","RS","SM","KC","SM","DS","RS","JP","SM","MO","AS"],
    ["4","TC","SR","MO","AS","SM","MV","SM","JP","SM","TC"],
    ["6","AS","SM","RS","SR","AS","MO","MV","KC","JP","KC"],
    ["3","TC","MO","SM","SM","SM","RS","AS","MV","SM","JP"],
    ["0","TC","KC","SR","SM","MO","SM","SM","SR","MV","TC"],
    ["9","KH","TC","AS","RS","KC","TC","MO","TC","TC","MV"]                 
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

