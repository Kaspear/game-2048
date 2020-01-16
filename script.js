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
};

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
                } else if (board[j][k] === 16) {
                    cells[i].style.backgroundColor = 'yellow';
                } else if (board[j][k] === 32) {
                    cells[i].style.backgroundColor = 'green';
                } else if (board[j][k] === 8) {
                    cells[i].style.backgroundColor = 'yellowgreen';
                }

                cells[i].innerHTML = board[j][k];
            }

            i = i + 1;
        }
    }

};

addRandomNumber = () => {
    let index1 = Math.floor(Math.random() * 4);
    let index2 = Math.floor(Math.random() * 4);

    let number = Math.random();
    r = number > 0.5 ? 2 : 4;
    let count = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] !== 0) {
                count = count + 1;
            }
        }
    }
    if (count !== 16) {
        if (board[index1][index2] !== 0) {
            while (board[index1][index2] !== 0) {
                index1 = Math.floor(Math.random() * 4)
                index2 = Math.floor(Math.random() * 4)
            }
            board[index1][index2] = r;
        } else {
            board[index1][index2] = r;
        }
        draw();
    } else {
        return null;
    }
};

checkKey = (e) => {
    e = e || window.event;

    if (e.keyCode == '38') {
        up();
    } else if (e.keyCode == '40') {
        down();
    } else if (e.keyCode == '37') {
        left();
    } else if (e.keyCode == '39') {
        right();
    }
};
up = () => {
    for (let i = 3; i >=1; i--) {
        for (let j = 3; j >= 0; j--) {
            if (board[i][j] !== 0) {
                console.log(board);
                if (board[i - 1][j] === board[i][j] || board[i - 1][j] === 0) {
                    board[i - 1][j] = board[i][j] + board[i - 1][j];
                    board[i][j] = 0;
                }
            }
        }
    }
    draw();
    addRandomNumber();

};
down = () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] !== 0) {
                console.log(board);
                if (board[i + 1][j] === board[i][j] || board[i + 1][j] === 0) {
                    board[i + 1][j] = board[i][j] + board[i + 1][j];
                    board[i][j] = 0;
                }
            }
        }
    }
    draw();
    addRandomNumber();

};

left = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j >=0; j--) {
            if (board[i][j] !== 0) {
                console.log(board);
                if (board[i][j - 1] === board[i][j] || board[i][j - 1] === 0) {
                    board[i][j - 1] = board[i][j] + board[i][j - 1];
                    board[i][j] = 0;
                }
            }
        }
    }
    draw();
    addRandomNumber();

};

right = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] !== 0) {
                console.log(board);
                if (board[i][j + 1] === board[i][j] || board[i][j + 1] === 0) {
                    board[i][j + 1] = board[i][j] + board[i][j + 1];
                    board[i][j] = 0;
                }
            }
        }
    }
    draw();
    addRandomNumber();

};

window.onload = start;
