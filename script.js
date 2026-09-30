
let turn = 'x';
let title = document.querySelector('.title');

let box = [];
function endGame(num1,num2,num3){
    title.innerHTML = `${box[num1]} win`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()}, 4000)
}

function winner() {
    for(let i = 1; i < 10; i++) {
        box[i] = document.getElementById('item' + i).innerHTML;
    }
    // Rows
    if(box[1] == box[2] && box[2] == box[3] && box[3] != ''){
        endGame(1,2,3);
    }
    else if(box[4] == box[5] && box[4] == box[6] && box[6] != ''){
        endGame(4,5,6);
    }
    else if(box[7] == box[8] && box[8] == box[9] && box[9] != ''){
        endGame(7,8,9);
    }

    // Columns
    else if(box[1] == box[4] && box[4] == box[7] && box[7] != ''){
        endGame(1,4,7);
    }
    else if(box[5] == box[2] && box[2] == box[8] && box[2] != ''){
        endGame(2,5,8);
    }
    else if(box[3] == box[6] && box[9] == box[6] && box[3] != ''){
        endGame(9,6,3);
    }

    // X
    else if(box[1] == box[5] && box[5] == box[9] && box[9] != ''){
        endGame(1,5,9);
    }
    else if(box[7] == box[5] && box[5] == box[3] && box[3] != ''){
        endGame(7,5,3);
    }
}

function game(id) {
    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'O Turn';
    }else if(turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'X Turn';
    }
    winner();
    darw();
}

function darw(){
    let counter = 0;
    for(let i = 1; i < 10; i++){
        if(box[i] != ''){
            counter++;
        }
    }
    if(counter == 9) {
        title.innerHTML = 'Draw';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()}, 4000)
    }
}