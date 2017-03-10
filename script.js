
var UIController = (function(){
    // get game board
    var board = document.querySelector('.big-square').children;
    var newGame = document.querySelector(".ion-ios-play");
    var reset = document.querySelector("#btnReset");
    var winner = false;
    return{
        //public method to return the board as an array
        getBoard: function(){
            return board;
        },
        getNewGameBtn: function(){
            return newGame;
        },
        getResetBtn: function(){
            return reset;
        },
        getRows:function(){
            var row1 = [board[0],board[1],board[2]];
            var row2 = [board[3],board[4],board[5]];
            var row3 = [board[6],board[7],board[8]];
            
            return [row1,row2,row3];
            
            
        },
        getCols:function(){
            var col1 = [board[0],board[3],board[6]];
            var col2 = [board[1],board[4],board[7]];
            var col3 = [board[2],board[5],board[8]];
            
            return [col1,col2,col3];
        },
        getDiag:function(){
            var diag1 = [board[0],board[4],board[8]];
            var diag2 = [board[2],board[4],board[6]];
            
            return [diag1,diag2];
        },
        setWinner: function(win){
            winner=win;
        },
        getWinner: function(){
            return winner;
        }
    }
    
})();

var GameController = (function(UICntrl){    
    
    var player;
    
    var board = UICntrl.getBoard();
    var setUpEventListeners = function(){
        
        var newBtn = UICntrl.getNewGameBtn();
        var reset = UICntrl.getResetBtn();
        for(var i =0; i<board.length;i++){
            board[i].addEventListener('click',squareClick.bind(this,board[i]));
        }
        
        //event listener for the new game button
            //may have to put outside of everthing
        newBtn.addEventListener('click',newGameClick.bind(this,board));
        
        reset.addEventListener('click',function(){
            location.reload();
        });
    }
    
    var squareClick = function(brd){
        
        if(isEmpty(brd) && UICntrl.getWinner() === false){
            if(player === 0){
                brd.innerHTML="X";
                brd.style.color='lightred';
                brd.classList.remove('grid');
                brd.classList.add('grid-full');
                player=1;
                if(isWinner()){
                    UICntrl.setWinner(true);
                    console.log("X WINS!!");
                }
            }
            else{
                brd.innerHTML="O";
                brd.style.color='lightyellow';
                brd.classList.remove('grid');
                brd.classList.add('grid-full');
                player=0;
                if(isWinner()){
                    UICntrl.setWinner(true);
                    console.log("O WINS!!");
                }
            }
        }
        else{
            console.log("WINNER");
        }        
    }
    
    var isWinner= function(){
        var rows = UICntrl.getRows();
        var cols = UICntrl.getCols();
        var diags = UICntrl.getDiag();
        
        if(checkRows(rows)){
            return true;
        }
        else if(checkCols(cols)){
            return true;
        }
        else if(checkDiags(diags)){
            return true;
        }
        else{
            return false;
        }        
    }
    
    var newGameClick = function(brd){
        console.log("new clicked");
        for(var t = 0; t< brd.length; t++){
            brd[t].innerHTML = "";
        }
        player=0;
    }
    
    var isEmpty = function(square){
        if(square.innerHTML === "X" || square.innerHTML === "O"){
            return false;
        }
        else{
            return true;
        }
    }
    
    var checkRows = function(rows){
        for(var i = 0; i<rows.length; i++){
            if(checkWinner(rows[i])){
                return true;
            }
        }
    }
    var checkCols = function(cols){
        for(var i = 0; i<cols.length; i++){
            if(checkWinner(cols[i])){
                
                return true;
            }
        }
    }
    var checkDiags = function(diags){
        for(var i = 0; i<diags.length; i++){
            if(checkWinner(diags[i])){
                return true;
            }
        }
    }
    var checkWinner = function(rowArray){
        var winner;
        var missingVal=false;
        for(var i=0; i<rowArray.length; i++){
            if(rowArray[i].innerHTML === ""){
                missingVal = true;
            }
        }
        
        if(!missingVal){
            if(
                (rowArray[0].innerHTML==="X"&&rowArray[1].innerHTML === "X" && rowArray[2].innerHTML ==="X") ||
                (rowArray[0].innerHTML==="O"&&rowArray[1].innerHTML === "O" && rowArray[2].innerHTML ==="O")
            ){
                for(var h = 0;h<rowArray.length;h++){
                    rowArray[h].style.backgroundColor="lightgray";
                    rowArray[h].style.color="#f127c8";
                }
                return true;
            }
            else {
                return false;
            }
        }
    }
    
    return{
        init: function(){
            player = 0;
            winner = 0;
            setUpEventListeners();
        }
    }    
    
})(UIController);



GameController.init();

