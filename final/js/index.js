// ------------------------------------------------------
//  GLOBAL VARIABLES
// ------------------------------------------------------

var world = [
    // original code


    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 3, 2, 0, 0, 2, 1, 2, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 2, 3, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 3, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 2],
    [2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    [2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

];

var pacman = {
    x: 13,
    y: 21,
};

var redGhost = {
    x: 11,
    y: 13,
    currentDirection: 'right',
};

var orangeGhost = {
    x: 12,
    y: 13,
    currentDirection: 'right',
};

var blueGhost = {
    x: 15,
    y: 13,
    currentDirection: 'left',
};

var pinkGhost = {
    x: 16,
    y: 13,
    currentDirection: 'left',
};

// ------------------------------------------------------
//  GLOBAL STATUS VARIABLES
// ------------------------------------------------------

var pacmanGotHit = false;
var pacmanLives = 3;
var keysFound = 0;
var score = 236;
var status = "GameIntro";


// ------------------------------------------------------
//  UTILS FUNCTION
// ------------------------------------------------------

function collision(a, b) {
    return (a.x == b.x) && (a.y == b.y);
}


function lives() {
    if (pacmanLives === 2) {
        life3.style.display = "none";
    }
    if (pacmanLives === 1) {
        life2.style.display = "none";
    }
}

function reset() {
    pacmanGotHit = false;
    pacmanLives = 3;
    keysFound = 0;
    score = 236;
}

function left(character) {
    loc = { x: character.x - 1, y: character.y };
    if (loc.x < 0) {
        loc.x += world[loc.y].length;
    }
    return loc;
}

function right(character) {
    loc = { x: character.x + 1, y: character.y };
    if (loc.x >= world[loc.y].length) {
        loc.x = 0;
    }
    return loc;
}

function up(character) {
    loc = { x: character.x, y: character.y - 1 };
    if (loc.y < 0) {
        loc.y += world.length;
    }
    return loc;
}

function down(character) {
    loc = { x: character.x, y: character.y + 1 };
    if (loc.y > world.length) {
        loc.y = 0;
    }
    return loc;
}

function availableDirection(loc, currentDir) {
    let tmp = [];

    newLoc = left(loc);
    if (world[newLoc.y][newLoc.x] != 2 && currentDir != "right") {
        tmp.push("left");
    }
    newLoc = right(loc);
    if (world[newLoc.y][newLoc.x] != 2 && currentDir != "left") {
        tmp.push("right");
    }
    newLoc = up(loc);
    if (world[newLoc.y][newLoc.x] != 2 && currentDir != "down") {
        tmp.push("up");
    }
    newLoc = down(loc);
    if (world[newLoc.y][newLoc.x] != 2 && currentDir != "up") {
        tmp.push("down");
    }

    if (!tmp.length) {
        newLoc = left(loc);
        if (world[newLoc.y][newLoc.x] != 2) { tmp.push("left"); }
        newLoc = right(loc);
        if (world[newLoc.y][newLoc.x] != 2) { tmp.push("right"); }
        newLoc = up(loc);
        if (world[newLoc.y][newLoc.x] != 2) { tmp.push("up"); }
        newLoc = down(loc);
        if (world[newLoc.y][newLoc.x] != 2) { tmp.push("down"); }
    }

    return tmp;
}

// ------------------------------------------------------
//  AGENT FUNCTION
// ------------------------------------------------------

function randomAgent(agent, agentDisplay) {
    let availableAction = availableDirection(agent, agent.currentDirection);
    const chooseAction = availableAction[Math.floor(Math.random() * availableAction.length)];

    if (chooseAction == "down") {
        agent.y = down(agent).y;
        agent.currentDirection = "down";
        agentDisplay();
    } else if (chooseAction == "up") {
        agent.y = up(agent).y;
        agent.currentDirection = "up";
        agentDisplay();
    } else if (chooseAction == "left") {
        agent.x = left(agent).x;
        agent.currentDirection = "left";
        agentDisplay();
    } else if (chooseAction == "right") {
        agent.x = right(agent).x;
        agent.currentDirection = "right";
        agentDisplay();
    }

    if (collision(agent, pacman)) {
        pacmanGotHit = true;
        gameOver();
        displayPacman();
    }
}

// ------------------------------------------------------
//  ANIMATE FUNCTION
// ------------------------------------------------------

function displayWorld() {
    var introHide = document.getElementById("introScreen");
    var worldBorderShow = document.getElementById("worldBorder");
    var worldShow = document.getElementById("world");
    var pacmanShow = document.getElementById("pacman");

    var redGhostShow = document.getElementById("redGhost");
    var orangeGhostShow = document.getElementById("orangeGhost");
    var blueGhostShow = document.getElementById("blueGhost");
    var pinkGhostShow = document.getElementById("pinkGhost");

    var scoreBoxShow = document.getElementById("scoreBox");
    var clickButton = document.getElementById("clickButton");
    var youWinMessage = document.getElementById("youWinMessage");
    var gameOverMessage = document.getElementById("gameOverMessage");

    var output = "";
    var numOfCoins = 0;
    var numOfKeys = 0;


    for (var i = 0; i < world.length; i++) {
        output += "\n<div class ='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "\n\t<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "\n\t<div class='coin'></div>";
            } else if (world[i][j] == 3) {
                output += "\n\t<div class='key'></div>";
            } else if (world[i][j] == 0) {
                output += "\n\t<div class='empty'></div>";
            }
            if (world[i][j] == 1) {
                numOfCoins++
            }
            if (world[i][j] == 3) {
                numOfKeys++
            }
        }
        output += "\n</div>";
    }

    if (numOfCoins == 0) {
        console.log("No more coins!");
    }

    if (score == 0) {
        console.log("No more keys!");
        var theScore = document.getElementById("youWinMessage");
        document.getElementById("scoreNum").innerHTML = "Your final score was " + score + " points!";
        pacman = {
            x: 13,
            y: 21
        };


        if (worldShow.style.display === "none") {
            worldShow.style.display = "block";
        } else {
            worldShow.style.display = "none";
        }
        if (worldBorderShow.style.display === "none") {
            worldBorderShow.style.display = "inline-block";
        } else {
            worldBorderShow.style.display = "none";
        }
        if (pacmanShow.style.display === "none") {
            pacmanShow.style.display = "block";
        } else {
            pacmanShow.style.display = "none";
        }
        if (redGhostShow.style.display === "none") {
            redGhostShow.style.display = "block";
        } else {
            redGhostShow.style.display = "none";
        }
        if (orangeGhostShow.style.display === "none") {
            orangeGhostShow.style.display = "block";
        } else {
            orangeGhostShow.style.display = "none";
        }
        if (blueGhostShow.style.display === "none") {
            blueGhostShow.style.display = "block";
        } else {
            blueGhostShow.style.display = "none";
        }
        if (pinkGhostShow.style.display === "none") {
            pinkGhostShow.style.display = "block";
        } else {
            pinkGhostShow.style.display = "none";
        }
        if (scoreBoxShow.style.display === "none") {
            scoreBoxShow.style.display = "inline-block";
        } else {
            scoreBoxShow.style.display = "none";
        }
        if (youWinMessage.style.display === "none") {
            youWinMessage.style.display = "block";
        } else {
            youWinMessage.style.display = "none";
        }
    }

    if (keysFound == 1) {
        if (key1.style.display === "none") {
            key1.style.display = "inline-block";
        }
    }
    if (keysFound == 2) {
        if (key2.style.display === "none") {
            key2.style.display = "inline-block";
        }
    }
    if (keysFound == 3) {
        if (key3.style.display === "none") {
            key3.style.display = "inline-block";
        }
    }
    if (keysFound == 4) {
        if (key4.style.display === "none") {
            key4.style.display = "inline-block";
        }
    }
    if (keysFound == 5) {
        if (key5.style.display === "none") {
            key5.style.display = "inline-block";
        }
    }
    if (keysFound == 6) {
        if (key6.style.display === "none") {
            key6.style.display = "inline-block";
        }
    }
    if (keysFound == 7) {
        if (key7.style.display === "none") {
            key7.style.display = "inline-block";
        }
    }
    if (keysFound == 8) {
        if (key8.style.display === "none") {
            key8.style.display = "inline-block";
        }
    }
    if (keysFound == 9) {
        if (key9.style.display === "none") {
            key9.style.display = "inline-block";
        }
    }

    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 24 + 'px';
    document.getElementById('pacman').style.left = pacman.x * 24 + 'px';
}


function displayRedGhost() {
    document.getElementById('redGhost').style.top = redGhost.y * 24 + 'px';
    document.getElementById('redGhost').style.left = redGhost.x * 24 + 'px';
}



function displayOrangeGhost() {
    document.getElementById('orangeGhost').style.top = orangeGhost.y * 24 + 'px';
    document.getElementById('orangeGhost').style.left = orangeGhost.x * 24 + 'px';
}



function displayBlueGhost() {
    document.getElementById('blueGhost').style.top = blueGhost.y * 24 + 'px';
    document.getElementById('blueGhost').style.left = blueGhost.x * 24 + 'px';
}



function displayPinkGhost() {
    document.getElementById('pinkGhost').style.top = pinkGhost.y * 24 + 'px';
    document.getElementById('pinkGhost').style.left = pinkGhost.x * 24 + 'px';
}



function displayScore() {
    document.getElementById('score').innerHTML = score;
}

// Game Init function
function worldFunction() {

    reset();

    var introHide = document.getElementById("introScreen");
    var worldBorderShow = document.getElementById("worldBorder");
    var worldShow = document.getElementById("world");
    var pacmanShow = document.getElementById("pacman");

    var redGhostShow = document.getElementById("redGhost");
    var orangeGhostShow = document.getElementById("orangeGhost");
    var blueGhostShow = document.getElementById("blueGhost");
    var pinkGhostShow = document.getElementById("pinkGhost");


    var scoreBoxShow = document.getElementById("scoreBox");
    var clickButton = document.getElementById("clickButton");
    var youWinMessage = document.getElementById("youWinMessage");
    var gameOverMessage = document.getElementById("gameOverMessage");

    if (introHide.style.display === "none") {
        introHide.style.display = "block";
    } else {
        introHide.style.display = "none";
    }
    if (worldBorderShow.style.display === "none") {
        worldBorderShow.style.display = "inline-block";
    } else {
        worldBorderShow.style.display = "none";
    }
    if (worldShow.style.display === "none") {
        worldShow.style.display = "block";
    } else {
        worldShow.style.display = "none";
    }
    if (pacmanShow.style.display === "none") {
        pacmanShow.style.display = "block";
    } else {
        pacmanShow.style.display = "none";
    }
    if (redGhostShow.style.display === "none") {
        redGhostShow.style.display = "block";
    } else {
        redGhostShow.style.display = "none";
    }
    if (orangeGhostShow.style.display === "none") {
        orangeGhostShow.style.display = "block";
    } else {
        orangeGhostShow.style.display = "none";
    }
    if (blueGhostShow.style.display === "none") {
        blueGhostShow.style.display = "block";
    } else {
        blueGhostShow.style.display = "none";
    }
    if (pinkGhostShow.style.display === "none") {
        pinkGhostShow.style.display = "block";
    } else {
        pinkGhostShow.style.display = "none";
    }
    if (scoreBoxShow.style.display === "none") {
        scoreBoxShow.style.display = "inline-block";
    } else {
        scoreBoxShow.style.display = "none";
    }
    if (youWinMessage.style.display === "none") {
        youWinMessage.style.display = "block";
    } else {
        youWinMessage.style.display = "none";
    }
    if (gameOverMessage.style.display === "none") {
        gameOverMessage.style.display = "block";
    } else {
        gameOverMessage.style.display = "none";
    }

    // ------------------------------------------------------
    //  AGENTS FUNCTION
    // ------------------------------------------------------

    window.setInterval(function() {
        randomAgent(redGhost, displayRedGhost);
    }, 200);

    window.setInterval(function() {
        randomAgent(orangeGhost, displayOrangeGhost);
    }, 300);

    window.setInterval(function() {
        randomAgent(blueGhost, displayBlueGhost);
    }, 100);

    window.setInterval(function() {
        randomAgent(pinkGhost, displayPinkGhost);
    }, 150);

    displayWorld();
    displayPacman();
    displayRedGhost();
    displayOrangeGhost();
    displayBlueGhost();
    displayPinkGhost();


    displayScore();

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    document.onkeydown = function(movePacman) {
        // RIGHT
        if (movePacman.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
            pacmanShow.style.transform = "none";
            pacman.x = right(pacman).x;
            // LEFT
        } else if (movePacman.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
            pacmanShow.style.transform = "rotate(180deg)";
            pacman.x = left(pacman).x;
            // UP
        } else if (movePacman.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
            pacmanShow.style.transform = "rotate(270deg)";
            pacman.y = up(pacman).y;
            // DOWN
        } else if (movePacman.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
            pacmanShow.style.transform = "rotate(90deg)";
            pacman.y = down(pacman).y;
        }

        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score--;
            displayScore();
            displayWorld();
        }
        if (world[pacman.y][pacman.x] == 3) {
            world[pacman.y][pacman.x] = 0;
            displayScore();
            displayWorld();
        }
        displayPacman();

        if (redGhost.x == pacman.x && redGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

        if (orangeGhost.x == pacman.x && orangeGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

        if (blueGhost.x == pacman.x && blueGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

        if (pinkGhost.x == pacman.x && pinkGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

    }

}

function gameOver() {

    if (pacmanLives == 1) {

        console.log("game over!")
        document.getElementById("ghostsOrTimeMessage").innerHTML = "The ghosts got you!";

        var theScore2 = document.getElementById("gameOverMessage");
        document.getElementById("scoreNum2").innerHTML = "Your final score was " + score + " points!";

        var theScore = document.getElementById("youWinMessage");
        document.getElementById("scoreNum2").innerHTML = "Your final score was " + score + " points!";
        pacman = {
            x: 13,
            y: 21
        };

        if (worldShow.style.display === "none") {
            worldShow.style.display = "block";
        } else {
            worldShow.style.display = "none";
        }
        if (worldBorderShow.style.display === "none") {
            worldBorderShow.style.display = "inline-block";
        } else {
            worldBorderShow.style.display = "none";
        }
        if (pacmanShow.style.display === "none") {
            pacmanShow.style.display = "block";
        } else {
            pacmanShow.style.display = "none";
        }
        if (redGhostShow.style.display === "none") {
            redGhostShow.style.display = "block";
        } else {
            redGhostShow.style.display = "none";
        }

        if (orangeGhostShow.style.display === "none") {
            orangeGhostShow.style.display = "block";
        } else {
            orangeGhostShow.style.display = "none";
        }

        if (blueGhostShow.style.display === "none") {
            blueGhostShow.style.display = "block";
        } else {
            blueGhostShow.style.display = "none";
        }

        if (pinkGhostShow.style.display === "none") {
            pinkGhostShow.style.display = "block";
        } else {
            pinkGhostShow.style.display = "none";
        }

        if (scoreBoxShow.style.display === "none") {
            scoreBoxShow.style.display = "inline-block";
        } else {
            scoreBoxShow.style.display = "none";
        }
        if (gameOverMessage.style.display === "none") {
            gameOverMessage.style.display = "block";
        } else {
            gameOverMessage.style.display = "none";
        }
    } else {
        pacmanLives -= 1;
        pacman = {
            x: 13,
            y: 21
        };
        lives();
        displayPacman();
        displayWorld();
    }
}

function refreshPage() {
    pacmanGotHit = false;
    window.location.reload();
}

function showWinScreen() {

    var introHide = document.getElementById("introScreen");
    var worldBorderShow = document.getElementById("worldBorder");
    var scoreBoxShow = document.getElementById("scoreBox");
    var youWinMessage = document.getElementById("youWinMessage");
    var gameOverMessage = document.getElementById("gameOverMessage");
    var theScore = document.getElementById("youWinMessage");

    document.getElementById("scoreNum").innerHTML = "Your final score was 0 points!";

    introHide.style.display = "none";
    worldBorderShow.style.display = "none";
    scoreBoxShow.style.display = "none";
    youWinMessage.style.display = "block";
    gameOverMessage.style.display = "none";

}

function showGameOverScreen() {

    var introHide = document.getElementById("introScreen");
    var worldBorderShow = document.getElementById("worldBorder");
    var scoreBoxShow = document.getElementById("scoreBox");
    var youWinMessage = document.getElementById("youWinMessage");
    var gameOverMessage = document.getElementById("gameOverMessage");
    var theScore = document.getElementById("youWinMessage");
    var theScore2 = document.getElementById("gameOverMessage");

    document.getElementById("scoreNum").innerHTML = "Your final score was 0 points!";
    document.getElementById("ghostsOrTimeMessage").innerHTML = "The ghosts got you!";

    var theScore2 = document.getElementById("gameOverMessage");
    document.getElementById("scoreNum2").innerHTML = "Your final score was 0 points!";


    introHide.style.display = "none";
    worldBorderShow.style.display = "none";
    scoreBoxShow.style.display = "none";
    youWinMessage.style.display = "none";
    gameOverMessage.style.display = "block";

}

function playAgain() {
    pacmanGotHit = false;
    window.location.reload();
    worldFunction();
}