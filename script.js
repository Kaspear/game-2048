let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
let array_index = [];
const cells = document.getElementsByClassName('wrapper');

start = () => {
    addRandomNumber();
    document.onkeydown = checkKey;
}

draw = () => {
    let i = 0;
    for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
            if (board[j][k] === 0) {
                cells[i].style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                cells[i].innerHTML = "";
            } else {
                if (board[j][k] === 2) {
                    cells[i].style.backgroundColor = 'red';
                } else if (board[j][k] === 4) {
                    cells[i].style.backgroundColor = 'blue';
                } else if (board[j][k] === 8) {
                    cells[i].style.backgroundColor = 'purple';
                }
                cells[i].innerHTML = board[j][k];
            }

            i = i + 1;
        }
    }

}

addRandomNumber = () => {
    let index1 = Math.floor(Math.random() * 4);
    let index2 = Math.floor(Math.random() * 4);
    let obj = { x: index1, y: index2 };
    console.log(array_index);

    // if (array_index.includes(obj)) {
    //     while (array_index.includes(obj)) {
    //         index1 = Math.floor(Math.random() * 4)
    //         index2 = Math.floor(Math.random() * 4)
    //         obj = { x: index1, y: index2 };
    //     }
    //     array_index.push(obj);
    // } else {
    //     array_index.push(obj);
    // }
    let is_in = false;
    for (let i = 0; i < array_index.length; i++) {
        console.log(array_index[i].x)
        if (array_index[i].x === obj.x && array_index[i].y === obj.y) {
            is_in = true;
        }
    }
    if (is_in) {


    } else {
        array_index.push(obj);
    }
    let number = Math.random(1);
    r = number > 0.5 ? 2 : 4;
    board[index1][index2] = r;
    draw();
}

checkKey = (e) => {
    e = e || window.event;

    if (e.keyCode == '38') {
        up()
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
        // left arrow
    }
    else if (e.keyCode == '39') {
        // right arrow
    }
}
up = () => {
    // for (let i = 1; i < 4; i++) {
    //     for (let j = 0; j < 4; j++) {
    //         if (board[i][j] != 0 && board[i - 1][j] == 0) {
    //             board[i - 1][j] = board[i][j];
    //             board[i][j] = 0;
    //         }
    //     }
    // }
    addRandomNumber();
    // draw();
}
window.onload = start;
