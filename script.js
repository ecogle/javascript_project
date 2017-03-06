var gridSquares,player, winner;
buildGridArray();
// 1. code to toggle players(start with 'X')
//setEventListeners();
document.getElementById("btnPlay").addEventListener('click',function(){
    init();
});
function init(){
    
    player=0;
    winner=0;
    // clear boxes
    for(var i=0;i<gridSquares.length;i++){
        gridSquares[i].innerHTML="";
    }
}

// 2. code to fill squares with 'X' or 'O'
function checkIfContents(e){
    if( e.innerHTML === 'X' || e.innerHTML ==='O'){
        return true;
    }
    else{
        return false;
    }
}
function buildGridArray(){
    gridSquares = document.querySelector('.big-square').children;
}

//setting the event listeners with a function
/*
function setEventListeners(){
    for(var t=0;t<gridSquares.length;t++){
        gridSquares[t].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[t])&& winner===0){
        
        if(player===0){
            gridSquares[t].innerHTML="X";
            gridSquares[t].style.color='red';
            gridSquares[t].classList.remove('grid');
            gridSquares[t].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[t].innerHTML="O";
            gridSquares[t].style.color='yellow';
            gridSquares[t].classList.remove('grid');
            gridSquares[t].classList.add('grid-full');
            player=0;
        }
        checkForWinner();
    }
});
    }
}
*/

//each square gets eventListener for click
gridSquares[0].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[0])&& winner===0){
        
        if(player===0){
            gridSquares[0].innerHTML="X";
            gridSquares[0].style.color='red';
            gridSquares[0].classList.remove('grid');
            gridSquares[0].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[0].innerHTML="O";
            gridSquares[0].style.color='yellow';
            gridSquares[0].classList.remove('grid');
            gridSquares[0].classList.add('grid-full');
            player=0;
        }
        checkForWinner();
    }
});

gridSquares[1].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[1])){
        
        if(player===0){
            gridSquares[1].innerHTML="X";
            gridSquares[1].style.color='red';
            gridSquares[1].classList.remove('grid');
            gridSquares[1].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[1].innerHTML="O";
            gridSquares[1].style.color='yellow';
            gridSquares[1].classList.remove('grid');
            gridSquares[1].classList.add('grid-full');
            player=0;
        }
    }
});

gridSquares[2].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[2])){
        
        if(player===0){
            gridSquares[2].innerHTML="X";
            gridSquares[2].style.color='red';
            gridSquares[2].classList.remove('grid');
            gridSquares[2].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[2].innerHTML="O";
            gridSquares[2].style.color='yellow';
            gridSquares[2].classList.remove('grid');
            gridSquares[2].classList.add('grid-full');
            player=0;
        }
    }
});
gridSquares[3].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[3])){
        
        if(player===0){
            gridSquares[3].innerHTML="X";
            gridSquares[3].style.color='red';
            gridSquares[3].classList.remove('grid');
            gridSquares[3].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[3].innerHTML="O";
            gridSquares[3].style.color='yellow';
            gridSquares[3].classList.remove('grid');
            gridSquares[3].classList.add('grid-full');
            player=0;
        }
    }
});

gridSquares[4].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[4])){
        
        if(player===0){
            gridSquares[4].innerHTML="X";
            gridSquares[4].style.color='red';
            gridSquares[4].classList.remove('grid');
            gridSquares[4].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[4].innerHTML="O";
            gridSquares[4].style.color='yellow';
            gridSquares[4].classList.remove('grid');
            gridSquares[4].classList.add('grid-full');
            player=0;
        }
    }
});
gridSquares[5].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[5])){
        
        if(player===0){
            gridSquares[5].innerHTML="X";
            gridSquares[5].style.color='red';
            gridSquares[5].classList.remove('grid');
            gridSquares[5].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[5].innerHTML="O";
            gridSquares[5].style.color='yellow';
            gridSquares[5].classList.remove('grid');
            gridSquares[5].classList.add('grid-full');
            player=0;
        }
    }
});

gridSquares[6].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[6])){
        
        if(player===0){
            gridSquares[6].innerHTML="X";
            gridSquares[6].style.color='red';
            gridSquares[6].classList.remove('grid');
            gridSquares[6].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[6].innerHTML="O";
            gridSquares[6].style.color='yellow';
            gridSquares[6].classList.remove('grid');
            gridSquares[6].classList.add('grid-full');
            player=0;
        }
    }
});

gridSquares[7].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[7])){
        
        if(player===0){
            gridSquares[7].innerHTML="X";
            gridSquares[7].style.color='red';
            gridSquares[7].classList.remove('grid');
            gridSquares[7].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[7].innerHTML="O";
            gridSquares[7].style.color='yellow';
            gridSquares[7].classList.remove('grid');
            gridSquares[7].classList.add('grid-full');
            player=0;
        }
    }
});

gridSquares[8].addEventListener('click',function(){
    if (!checkIfContents(gridSquares[8])){
        
        if(player===0){
            gridSquares[8].innerHTML="X";
            gridSquares[8].style.color='red';
            gridSquares[8].classList.remove('grid');
            gridSquares[8].classList.add('grid-full');
            player=1;
        }else{
            gridSquares[8].innerHTML="O";
            gridSquares[8].style.color='yellow';
            gridSquares[8].classList.remove('grid');
            gridSquares[8].classList.add('grid-full');
            player=0;
        }
    }
});
    

 //end of event listeners
// 3. logic to determine winner.
    // if row is equal -> winner
    // if col is equal -> winner
    // if diagonal is equal -> winner

function checkForWinner(){
    
    if(checkTopRow()){
        var arr = (0,1,2);
        setWinnerStyle(arr);
        
    }else if(checkMiddleRow()){
        var arr = (3,4,5);
        setWinnerStyle(arr);
        
    }else
    if(checkBottomRow()){
        var arr=(6,7,8);
        setWinnerStyle(arr);
        
    }else
    if(checkLeftColumn()){
        var arr=(0,3,6);
        setWinnerStyle(arr);
        
    }else
    if(checkMiddleColumn()){
        var arr=(1,4,7);
        setWinnerStyle(1,4,7);
        
    }else
    if(checkRightColumn()){
        var arr = (2,5,8);
        setWinnerStyle(arr);
        
    }else
    if(checkLtoRDiagonal()){
        var arr=(6,4,2);
        setWinnerStyle(arr);
        
    }else
    if(checkRtoLDiagonal()){
        var arr=(0,4,8);
        setWinnerStyle(arr);
        
    }
}
function setWinnerStyle(arr){
    winner=1;
    for(var i = 0; i<arr.length;i++){
            gridSquares[i].style.backgroundColor="teal";
        }
}

function checkTopRow(){
    if((gridSquares[0].innerHTML==="X" && gridSquares[1].innerHTML==="X" && gridSquares[2].innerHTML==="X")||
      (gridSquares[0].innerHTML==="O" && gridSquares[1].innerHTML==="O" && gridSquares[2].innerHTML==="O")){
        return true;
    }
}
function checkMiddleRow(){
    if((gridSquares[3].innerHTML==="X" && gridSquares[4].innerHTML==="X" && gridSquares[5].innerHTML==="X")||
      (gridSquares[3].innerHTML==="O" && gridSquares[4].innerHTML==="O" && gridSquares[5].innerHTML==="O")){
        return true;
    }
}
function checkBottomRow(){
    if((gridSquares[6].innerHTML==="X" && gridSquares[7].innerHTML==="X" && gridSquares[8].innerHTML==="X")||
      (gridSquares[6].innerHTML==="O" && gridSquares[7].innerHTML==="O" && gridSquares[8].innerHTML==="O")){
        return true;
    }
}

function checkLeftColumn(){
    if((gridSquares[0].innerHTML==="X" && gridSquares[3].innerHTML==="X" && gridSquares[6].innerHTML==="X")||
      (gridSquares[0].innerHTML==="O" && gridSquares[3].innerHTML==="O" && gridSquares[6].innerHTML==="O")){
        return true;
    }
}

function checkMiddleColumn(){
    if((gridSquares[1].innerHTML==="X" && gridSquares[4].innerHTML==="X" && gridSquares[7].innerHTML==="X")||
      (gridSquares[1].innerHTML==="O" && gridSquares[4].innerHTML==="O" && gridSquares[7].innerHTML==="O")){
        return true;
    }
}
function checkRightColumn(){
    if((gridSquares[2].innerHTML==="X" && gridSquares[5].innerHTML==="X" && gridSquares[8].innerHTML==="X")||
      (gridSquares[2].innerHTML==="O" && gridSquares[5].innerHTML==="O" && gridSquares[8].innerHTML==="O")){
        return true;
    }
}

function checkRtoLDiagonal(){
    if((gridSquares[2].innerHTML==="X" && gridSquares[4].innerHTML==="X" && gridSquares[6].innerHTML==="X")||
      (gridSquares[2].innerHTML==="O" && gridSquares[4].innerHTML==="O" && gridSquares[6].innerHTML==="O")){
        return true;
    }
}

function checkLtoRDiagonal(){
    if((gridSquares[0].innerHTML==="X" && gridSquares[4].innerHTML==="X" && gridSquares[8].innerHTML==="X")||
      (gridSquares[0].innerHTML==="O" && gridSquares[4].innerHTML==="O" && gridSquares[8].innerHTML==="O")){
        return true;
    }
}

document.querySelector('#button').addEventListener('click',function(){
    document.getElementById('tl').innerHTML='X';
    gridSquares[0].classList.remove('grid');
    gridSquares[0].classList.add('grid-full');
});

