// ------------------------------------------------------
//  GLOBAL VARIABLES
// ------------------------------------------------------

var world = [
    // original code

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 2, 0, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 0, 0, 3, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 2, 0, 1, 2, 1, 1, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1, 2, 0, 3, 0, 2, 1, 1, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 1, 2, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 2, 2, 2, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 2],
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 1, 0, 2, 1, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2],
    [2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2],
    [2, 0, 0, 0, 1, 1, 1, 0, 3, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2],
    [2, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 0, 1, 0, 0, 0, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2],
    [2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 1, 0, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 0, 0, 1, 0, 2, 0, 3, 0, 2, 0, 1, 0, 0, 2],
    [2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2],
    [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 3, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]


];

var pacman = {
    x: 1,
    y: 14,
};

var redGhost = {
    x: 15,
    y: 18,
    currentDirection: 'down',
};

var redGhost1 = {
    x: 17,
    y: 18,
    currentDirection: 'down',
};

var redGhost2 = {
    x: 4,
    y: 4,
    currentDirection: 'down',
};

var redGhost3 = {
    x: 30,
    y: 14,
    currentDirection: 'down',
};

var redGhost4 = {
    x: 25,
    y: 5,
    currentDirection: 'down',
};

var redGhost5 = {
    x: 25,
    y: 26,
    currentDirection: 'down',
};

var redGhost6 = {
    x: 37,
    y: 6,
    currentDirection: 'down',
};

var orangeGhost = {
    x: 9,
    y: 5,
    currentDirection: 'right',
};

var orangeGhost1 = {
    x: 30,
    y: 17,
    currentDirection: 'right',
};

var orangeGhost2 = {
    x: 10,
    y: 25,
    currentDirection: 'right',
};

var orangeGhost3 = {
    x: 18,
    y: 1,
    currentDirection: 'right',
};

var orangeGhost4 = {
    x: 38,
    y: 6,
    currentDirection: 'right',
};

var orangeGhost5 = {
    x: 35,
    y: 3,
    currentDirection: 'right',
};

var blueGhost = {
    x: 16,
    y: 18,
    currentDirection: 'down',
};

var blueGhost1 = {
    x: 35,
    y: 22,
    currentDirection: 'right',
};

var blueGhost2 = {
    x: 10,
    y: 24,
    currentDirection: 'right',
};

var blueGhost3 = {
    x: 17,
    y: 5,
    currentDirection: 'right',
};

var blueGhost4 = {
    x: 40,
    y: 2,
    currentDirection: 'right',
};

var pinkGhost = {
    x: 3,
    y: 3,
    currentDirection: 'right',
};

var pinkGhost1 = {
    x: 33,
    y: 19,
    currentDirection: 'right',
};

var pinkGhost2 = {
    x: 10,
    y: 27,
    currentDirection: 'right',
};

var pinkGhost3 = {
    x: 25,
    y: 4,
    currentDirection: 'right',
};

var pinkGhost4 = {
    x: 36,
    y: 4,
    currentDirection: 'right',
};

// ------------------------------------------------------
//  GLOBAL STATUS VARIABLES
// ------------------------------------------------------

var pacmanGotHit = false;
var pacmanLives = 4;
var keysFound = 0;
var score = 0;
var status = "GameIntro";

var timeLeft = 240;
var elem = document.getElementById('timer');
var timerId = null;

// ------------------------------------------------------
//  UTILS FUNCTION
// ------------------------------------------------------

function isCollision(a, b) {
    return (a.x == b.x) && (a.y == b.y);
}

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        gameOver();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function lives() {
    if (pacmanLives === 3) {
        life3.style.display = "none";
    }
    if (pacmanLives === 2) {
        life2.style.display = "none";
    }
    if (pacmanLives === 1) {
        life1.style.display = "none";
        noLivesText.style.display = "inline-block";
    }
}

function reset() {
    pacmanGotHit = false;
    pacmanLives = 4;
    keysFound = 0;
    score = 0;

    timeLeft = 240;
    elem = document.getElementById('timer');

    timerId = setInterval(countdown, 1000);
}

// ------------------------------------------------------
//  AGENT FUNCTION
// ------------------------------------------------------

function upAndDownAgent(agent, agentDisplay) {
    if (agent.currentDirection == 'down') {
        if (world[agent.y + 1][agent.x] != 2) {
            agent.y++;
            agentDisplay();
            if (agent.x == pacman.x && agent.y == pacman.y) {
                gameOver();
            }
        } else if ((world[agent.y + 1][agent.x] == 2)) {
            agent.y--;
            agent.currentDirection = 'up';
            agentDisplay();
        }
    } else {
        if (world[agent.y - 1][agent.x] != 2) {
            agent.y--;
            agentDisplay();
            if (agent.x == pacman.x && agent.y == pacman.y) {
                pacmanGotHit = true;
                gameOver();

            }
        } else if ((world[agent.y - 1][agent.x] == 2)) {
            agent.y++;
            agent.currentDirection = 'down';
            agentDisplay();
        }
    }
}

function leftAndRightAgent(agent, agentDisplay) {
    if (agent.currentDirection == 'right') {
        if (world[agent.y][agent.x + 1] != 2) {
            agent.x++;
            agentDisplay();
            if (agent.x == pacman.x && agent.y == pacman.y) {
                gameOver();
            }
        } else if ((world[agent.y][agent.x + 1] == 2)) {
            agent.x--;
            agent.currentDirection = 'left';
            agentDisplay();
        }
    } else {
        if (world[agent.y][agent.x - 1] != 2) {
            agent.x--;
            agentDisplay();
            if (agent.x == pacman.x && agent.y == pacman.y) {
                pacmanGotHit = true;
                gameOver();

            }
        } else if ((world[agent.y][agent.x - 1] == 2)) {
            agent.x++;
            agent.currentDirection = 'right';
            agentDisplay();
        }
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
    var redGhostShow1 = document.getElementById("redGhost1");
    var redGhostShow2 = document.getElementById("redGhost2");
    var redGhostShow3 = document.getElementById("redGhost3");
    var redGhostShow4 = document.getElementById("redGhost4");
    var redGhostShow5 = document.getElementById("redGhost5");
    var redGhostShow6 = document.getElementById("redGhost6");
    var orangeGhostShow = document.getElementById("orangeGhost");
    var orangeGhostShow1 = document.getElementById("orangeGhost1");
    var orangeGhostShow2 = document.getElementById("orangeGhost2");
    var orangeGhostShow3 = document.getElementById("orangeGhost3");
    var orangeGhostShow4 = document.getElementById("orangeGhost4");
    var orangeGhostShow5 = document.getElementById("orangeGhost5");
    var blueGhostShow = document.getElementById("blueGhost");
    var blueGhostShow1 = document.getElementById("blueGhost1");
    var blueGhostShow2 = document.getElementById("blueGhost2");
    var blueGhostShow3 = document.getElementById("blueGhost3");;
    var blueGhostShow4 = document.getElementById("blueGhost4");;
    var pinkGhostShow = document.getElementById("pinkGhost");
    var pinkGhostShow1 = document.getElementById("pinkGhost1");
    var pinkGhostShow2 = document.getElementById("pinkGhost2");
    var pinkGhostShow3 = document.getElementById("pinkGhost3");
    var pinkGhostShow4 = document.getElementById("pinkGhost4");


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

    console.log(numOfCoins)
    if (numOfCoins == 0) {
        console.log("No more coins!");
    }
    console.log(numOfKeys)
    if (numOfKeys == 0) {
        console.log("No more keys!");
        var theScore = document.getElementById("youWinMessage");
        document.getElementById("scoreNum").innerHTML = "Your final score was " + score + " points!";
        pacman = {
            x: 1,
            y: 14
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
        if (redGhostShow1.style.display === "none") {
            redGhostShow1.style.display = "block";
        } else {
            redGhostShow1.style.display = "none";
        }
        if (redGhostShow2.style.display === "none") {
            redGhostShow2.style.display = "block";
        } else {
            redGhostShow2.style.display = "none";
        }
        if (redGhostShow3.style.display === "none") {
            redGhostShow3.style.display = "block";
        } else {
            redGhostShow3.style.display = "none";
        }
        if (redGhostShow4.style.display === "none") {
            redGhostShow4.style.display = "block";
        } else {
            redGhostShow4.style.display = "none";
        }
        if (redGhostShow5.style.display === "none") {
            redGhostShow5.style.display = "block";
        } else {
            redGhostShow5.style.display = "none";
        }
        if (redGhostShow6.style.display === "none") {
            redGhostShow6.style.display = "block";
        } else {
            redGhostShow6.style.display = "none";
        }
        if (orangeGhostShow.style.display === "none") {
            orangeGhostShow.style.display = "block";
        } else {
            orangeGhostShow.style.display = "none";
        }
        if (orangeGhostShow1.style.display === "none") {
            orangeGhostShow1.style.display = "block";
        } else {
            orangeGhostShow1.style.display = "none";
        }
        if (orangeGhostShow2.style.display === "none") {
            orangeGhostShow2.style.display = "block";
        } else {
            orangeGhostShow2.style.display = "none";
        }
        if (orangeGhostShow3.style.display === "none") {
            orangeGhostShow3.style.display = "block";
        } else {
            orangeGhostShow3.style.display = "none";
        }
        if (orangeGhostShow4.style.display === "none") {
            orangeGhostShow4.style.display = "block";
        } else {
            orangeGhostShow4.style.display = "none";
        }
        if (orangeGhostShow5.style.display === "none") {
            orangeGhostShow5.style.display = "block";
        } else {
            orangeGhostShow5.style.display = "none";
        }
        if (blueGhostShow.style.display === "none") {
            blueGhostShow.style.display = "block";
        } else {
            blueGhostShow.style.display = "none";
        }
        if (blueGhostShow1.style.display === "none") {
            blueGhostShow1.style.display = "block";
        } else {
            blueGhostShow1.style.display = "none";
        }
        if (blueGhostShow2.style.display === "none") {
            blueGhostShow2.style.display = "block";
        } else {
            blueGhostShow2.style.display = "none";
        }
        if (blueGhostShow3.style.display === "none") {
            blueGhostShow3.style.display = "block";
        } else {
            blueGhostShow3.style.display = "none";
        }
        if (blueGhostShow4.style.display === "none") {
            blueGhostShow4.style.display = "block";
        } else {
            blueGhostShow4.style.display = "none";
        }
        if (pinkGhostShow.style.display === "none") {
            pinkGhostShow.style.display = "block";
        } else {
            pinkGhostShow.style.display = "none";
        }
        if (pinkGhostShow1.style.display === "none") {
            pinkGhostShow1.style.display = "block";
        } else {
            pinkGhostShow1.style.display = "none";
        }
        if (pinkGhostShow2.style.display === "none") {
            pinkGhostShow2.style.display = "block";
        } else {
            pinkGhostShow2.style.display = "none";
        }
        if (pinkGhostShow3.style.display === "none") {
            pinkGhostShow3.style.display = "block";
        } else {
            pinkGhostShow3.style.display = "none";
        }

        if (pinkGhostShow4.style.display === "none") {
            pinkGhostShow4.style.display = "block";
        } else {
            pinkGhostShow4.style.display = "none";
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

    // console.log(output);
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

function displayRedGhost1() {
    document.getElementById('redGhost1').style.top = redGhost1.y * 24 + 'px';
    document.getElementById('redGhost1').style.left = redGhost1.x * 24 + 'px';
}

function displayRedGhost2() {
    document.getElementById('redGhost2').style.top = redGhost2.y * 24 + 'px';
    document.getElementById('redGhost2').style.left = redGhost2.x * 24 + 'px';
}

function displayRedGhost3() {
    document.getElementById('redGhost3').style.top = redGhost3.y * 24 + 'px';
    document.getElementById('redGhost3').style.left = redGhost3.x * 24 + 'px';
}

function displayRedGhost4() {
    document.getElementById('redGhost4').style.top = redGhost4.y * 24 + 'px';
    document.getElementById('redGhost4').style.left = redGhost4.x * 24 + 'px';
}

function displayRedGhost5() {
    document.getElementById('redGhost5').style.top = redGhost5.y * 24 + 'px';
    document.getElementById('redGhost5').style.left = redGhost5.x * 24 + 'px';
}

function displayRedGhost6() {
    document.getElementById('redGhost6').style.top = redGhost6.y * 24 + 'px';
    document.getElementById('redGhost6').style.left = redGhost6.x * 24 + 'px';
}

function displayOrangeGhost() {
    document.getElementById('orangeGhost').style.top = orangeGhost.y * 24 + 'px';
    document.getElementById('orangeGhost').style.left = orangeGhost.x * 24 + 'px';
}

function displayOrangeGhost1() {
    document.getElementById('orangeGhost1').style.top = orangeGhost1.y * 24 + 'px';
    document.getElementById('orangeGhost1').style.left = orangeGhost1.x * 24 + 'px';
}

function displayOrangeGhost2() {
    document.getElementById('orangeGhost2').style.top = orangeGhost2.y * 24 + 'px';
    document.getElementById('orangeGhost2').style.left = orangeGhost2.x * 24 + 'px';
}

function displayOrangeGhost3() {
    document.getElementById('orangeGhost3').style.top = orangeGhost3.y * 24 + 'px';
    document.getElementById('orangeGhost3').style.left = orangeGhost3.x * 24 + 'px';
}

function displayOrangeGhost4() {
    document.getElementById('orangeGhost4').style.top = orangeGhost4.y * 24 + 'px';
    document.getElementById('orangeGhost4').style.left = orangeGhost4.x * 24 + 'px';
}

function displayOrangeGhost5() {
    document.getElementById('orangeGhost5').style.top = orangeGhost5.y * 24 + 'px';
    document.getElementById('orangeGhost5').style.left = orangeGhost5.x * 24 + 'px';
}

function displayBlueGhost() {
    document.getElementById('blueGhost').style.top = blueGhost.y * 24 + 'px';
    document.getElementById('blueGhost').style.left = blueGhost.x * 24 + 'px';
}

function displayBlueGhost1() {
    document.getElementById('blueGhost1').style.top = blueGhost1.y * 24 + 'px';
    document.getElementById('blueGhost1').style.left = blueGhost1.x * 24 + 'px';
}

function displayBlueGhost2() {
    document.getElementById('blueGhost2').style.top = blueGhost2.y * 24 + 'px';
    document.getElementById('blueGhost2').style.left = blueGhost2.x * 24 + 'px';
}

function displayBlueGhost3() {
    document.getElementById('blueGhost3').style.top = blueGhost3.y * 24 + 'px';
    document.getElementById('blueGhost3').style.left = blueGhost3.x * 24 + 'px';
}

function displayBlueGhost4() {
    document.getElementById('blueGhost4').style.top = blueGhost4.y * 24 + 'px';
    document.getElementById('blueGhost4').style.left = blueGhost4.x * 24 + 'px';
}

function displayPinkGhost() {
    document.getElementById('pinkGhost').style.top = pinkGhost.y * 24 + 'px';
    document.getElementById('pinkGhost').style.left = pinkGhost.x * 24 + 'px';
}

function displayPinkGhost1() {
    document.getElementById('pinkGhost1').style.top = pinkGhost1.y * 24 + 'px';
    document.getElementById('pinkGhost1').style.left = pinkGhost1.x * 24 + 'px';
}

function displayPinkGhost2() {
    document.getElementById('pinkGhost2').style.top = pinkGhost2.y * 24 + 'px';
    document.getElementById('pinkGhost2').style.left = pinkGhost2.x * 24 + 'px';
}

function displayPinkGhost3() {
    document.getElementById('pinkGhost3').style.top = pinkGhost3.y * 24 + 'px';
    document.getElementById('pinkGhost3').style.left = pinkGhost3.x * 24 + 'px';
}

function displayPinkGhost4() {
    document.getElementById('pinkGhost4').style.top = pinkGhost4.y * 24 + 'px';
    document.getElementById('pinkGhost4').style.left = pinkGhost4.x * 24 + 'px';
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
    var redGhostShow1 = document.getElementById("redGhost1");
    var redGhostShow2 = document.getElementById("redGhost2");
    var redGhostShow3 = document.getElementById("redGhost3");
    var redGhostShow4 = document.getElementById("redGhost4");
    var redGhostShow5 = document.getElementById("redGhost5");
    var redGhostShow6 = document.getElementById("redGhost6");
    var orangeGhostShow = document.getElementById("orangeGhost");
    var orangeGhostShow1 = document.getElementById("orangeGhost1");
    var orangeGhostShow2 = document.getElementById("orangeGhost2");
    var orangeGhostShow3 = document.getElementById("orangeGhost3");
    var orangeGhostShow4 = document.getElementById("orangeGhost4");
    var orangeGhostShow5 = document.getElementById("orangeGhost5");
    var blueGhostShow = document.getElementById("blueGhost");
    var blueGhostShow1 = document.getElementById("blueGhost1");
    var blueGhostShow2 = document.getElementById("blueGhost2");
    var blueGhostShow3 = document.getElementById("blueGhost3");
    var blueGhostShow4 = document.getElementById("blueGhost4");
    var pinkGhostShow = document.getElementById("pinkGhost");
    var pinkGhostShow1 = document.getElementById("pinkGhost1");
    var pinkGhostShow2 = document.getElementById("pinkGhost2");
    var pinkGhostShow3 = document.getElementById("pinkGhost3");
    var pinkGhostShow4 = document.getElementById("pinkGhost4");

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
    if (redGhostShow1.style.display === "none") {
        redGhostShow1.style.display = "block";
    } else {
        redGhostShow1.style.display = "none";
    }
    if (redGhostShow2.style.display === "none") {
        redGhostShow2.style.display = "block";
    } else {
        redGhostShow2.style.display = "none";
    }
    if (redGhostShow3.style.display === "none") {
        redGhostShow3.style.display = "block";
    } else {
        redGhostShow3.style.display = "none";
    }
    if (redGhostShow4.style.display === "none") {
        redGhostShow4.style.display = "block";
    } else {
        redGhostShow4.style.display = "none";
    }
    if (redGhostShow5.style.display === "none") {
        redGhostShow5.style.display = "block";
    } else {
        redGhostShow5.style.display = "none";
    }
    if (redGhostShow6.style.display === "none") {
        redGhostShow6.style.display = "block";
    } else {
        redGhostShow6.style.display = "none";
    }
    if (orangeGhostShow.style.display === "none") {
        orangeGhostShow.style.display = "block";
    } else {
        orangeGhostShow.style.display = "none";
    }
    if (orangeGhostShow1.style.display === "none") {
        orangeGhostShow1.style.display = "block";
    } else {
        orangeGhostShow1.style.display = "none";
    }
    if (orangeGhostShow2.style.display === "none") {
        orangeGhostShow2.style.display = "block";
    } else {
        orangeGhostShow2.style.display = "none";
    }
    if (orangeGhostShow3.style.display === "none") {
        orangeGhostShow3.style.display = "block";
    } else {
        orangeGhostShow3.style.display = "none";
    }
    if (orangeGhostShow4.style.display === "none") {
        orangeGhostShow4.style.display = "block";
    } else {
        orangeGhostShow4.style.display = "none";
    }
    if (orangeGhostShow5.style.display === "none") {
        orangeGhostShow5.style.display = "block";
    } else {
        orangeGhostShow5.style.display = "none";
    }
    if (blueGhostShow.style.display === "none") {
        blueGhostShow.style.display = "block";
    } else {
        blueGhostShow.style.display = "none";
    }
    if (blueGhostShow1.style.display === "none") {
        blueGhostShow1.style.display = "block";
    } else {
        blueGhostShow1.style.display = "none";
    }
    if (blueGhostShow2.style.display === "none") {
        blueGhostShow2.style.display = "block";
    } else {
        blueGhostShow2.style.display = "none";
    }
    if (blueGhostShow3.style.display === "none") {
        blueGhostShow3.style.display = "block";
    } else {
        blueGhostShow3.style.display = "none";
    }
    if (blueGhostShow4.style.display === "none") {
        blueGhostShow4.style.display = "block";
    } else {
        blueGhostShow4.style.display = "none";
    }
    if (pinkGhostShow.style.display === "none") {
        pinkGhostShow.style.display = "block";
    } else {
        pinkGhostShow.style.display = "none";
    }
    if (pinkGhostShow1.style.display === "none") {
        pinkGhostShow1.style.display = "block";
    } else {
        pinkGhostShow1.style.display = "none";
    }
    if (pinkGhostShow2.style.display === "none") {
        pinkGhostShow2.style.display = "block";
    } else {
        pinkGhostShow2.style.display = "none";
    }
    if (pinkGhostShow3.style.display === "none") {
        pinkGhostShow3.style.display = "block";
    } else {
        pinkGhostShow3.style.display = "none";
    }
    if (pinkGhostShow4.style.display === "none") {
        pinkGhostShow4.style.display = "block";
    } else {
        pinkGhostShow4.style.display = "none";
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
        upAndDownAgent(redGhost, displayRedGhost);
    }, 200);

    window.setInterval(function() {
        upAndDownAgent(redGhost1, displayRedGhost1);
    }, 90);

    window.setInterval(function() {
        upAndDownAgent(blueGhost3, displayBlueGhost3);
    }, 1000);

    window.setInterval(function() {
        leftAndRightAgent(redGhost2, displayRedGhost2);
    }, 100);

    window.setInterval(function() {
        leftAndRightAgent(redGhost5, displayRedGhost5);
    }, 150);

    window.setInterval(function() {
        // console.log("moving!"
        if (redGhost3.currentDirection == 'right') {
            if (world[redGhost3.y][redGhost3.x + 1] != 2) {
                redGhost3.x++;
                displayRedGhost3();
                if (redGhost3.x == pacman.x && redGhost3.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[redGhost3.y][redGhost3.x + 1] == 2)) {
                redGhost3.x--;
                redGhost3.currentDirection = 'left';
                displayRedGhost3();
            }
        } else {
            if (world[redGhost3.y][redGhost3.x - 1] != 2) {
                redGhost3.x--;
                displayRedGhost3();
                if (redGhost3.x == pacman.x && redGhost3.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[redGhost3.y][redGhost3.x - 1] == 2)) {
                redGhost3.x++;
                redGhost3.currentDirection = 'right';
                displayRedGhost3();
            }
        }

    }, 100);

    window.setInterval(function() {
        // console.log("moving!"
        if (pinkGhost2.currentDirection == 'right') {
            if (world[pinkGhost2.y][pinkGhost2.x + 1] != 2) {
                pinkGhost2.x++;
                displayPinkGhost2();
                if (pinkGhost2.x == pacman.x && pinkGhost2.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[pinkGhost2.y][pinkGhost2.x + 1] == 2)) {
                pinkGhost2.x--;
                pinkGhost2.currentDirection = 'left';
                displayPinkGhost2();
            }
        } else {
            if (world[pinkGhost2.y][pinkGhost2.x - 1] != 2) {
                pinkGhost2.x--;
                displayPinkGhost2();
                if (pinkGhost2.x == pacman.x && pinkGhost2.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[pinkGhost2.y][pinkGhost2.x - 1] == 2)) {
                pinkGhost2.x++;
                pinkGhost2.currentDirection = 'right';
                displayPinkGhost2();
            }
        }

    }, 250);

    window.setInterval(function() {
        // console.log("moving!"
        if (pinkGhost3.currentDirection == 'right') {
            if (world[pinkGhost3.y][pinkGhost3.x + 1] != 2) {
                pinkGhost3.x++;
                displayPinkGhost3();
                if (pinkGhost3.x == pacman.x && pinkGhost3.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[pinkGhost3.y][pinkGhost3.x + 1] == 2)) {
                pinkGhost3.x--;
                pinkGhost3.currentDirection = 'left';
                displayPinkGhost3();
            }
        } else {
            if (world[pinkGhost3.y][pinkGhost3.x - 1] != 2) {
                pinkGhost3.x--;
                displayPinkGhost3();
                if (pinkGhost3.x == pacman.x && pinkGhost3.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[pinkGhost3.y][pinkGhost3.x - 1] == 2)) {
                pinkGhost3.x++;
                pinkGhost3.currentDirection = 'right';
                displayPinkGhost3();
            }
        }

    }, 1200);


    window.setInterval(function() {
        // console.log("moving!"
        if (orangeGhost.currentDirection == 'right') {
            if (world[orangeGhost.y][orangeGhost.x + 1] != 2) {
                orangeGhost.x++;
                displayOrangeGhost();
                if (orangeGhost.x == pacman.x && orangeGhost.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[orangeGhost.y][orangeGhost.x + 1] == 2)) {
                orangeGhost.x--;
                orangeGhost.currentDirection = 'left';
                displayOrangeGhost();
            }
        } else {
            if (world[orangeGhost.y][orangeGhost.x - 1] != 2) {
                orangeGhost.x--;
                displayOrangeGhost();
                if (orangeGhost.x == pacman.x && orangeGhost.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[orangeGhost.y][orangeGhost.x - 1] == 2)) {
                orangeGhost.x++;
                orangeGhost.currentDirection = 'right';
                displayOrangeGhost();
            }
        }

    }, 300);

    window.setInterval(function() {
        // console.log("moving!"
        if (orangeGhost2.currentDirection == 'right') {
            if (world[orangeGhost2.y][orangeGhost2.x + 1] != 2) {
                orangeGhost2.x++;
                displayOrangeGhost2();
                if (orangeGhost2.x == pacman.x && orangeGhost2.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[orangeGhost2.y][orangeGhost2.x + 1] == 2)) {
                orangeGhost2.x--;
                orangeGhost2.currentDirection = 'left';
                displayOrangeGhost2();
            }
        } else {
            if (world[orangeGhost2.y][orangeGhost2.x - 1] != 2) {
                orangeGhost2.x--;
                displayOrangeGhost2();
                if (orangeGhost2.x == pacman.x && orangeGhost2.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[orangeGhost2.y][orangeGhost2.x - 1] == 2)) {
                orangeGhost2.x++;
                orangeGhost2.currentDirection = 'right';
                displayOrangeGhost2();
            }
        }

    }, 150);

    window.setInterval(function() {
        // console.log("moving!"
        if (orangeGhost3.currentDirection == 'right') {
            if (world[orangeGhost3.y][orangeGhost3.x + 1] != 2) {
                orangeGhost3.x++;
                displayOrangeGhost3();
                if (orangeGhost3.x == pacman.x && orangeGhost3.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[orangeGhost3.y][orangeGhost3.x + 1] == 2)) {
                orangeGhost3.x--;
                orangeGhost3.currentDirection = 'left';
                displayOrangeGhost3();
            }
        } else {
            if (world[orangeGhost3.y][orangeGhost3.x - 1] != 2) {
                orangeGhost3.x--;
                displayOrangeGhost3();
                if (orangeGhost3.x == pacman.x && orangeGhost3.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[orangeGhost3.y][orangeGhost3.x - 1] == 2)) {
                orangeGhost3.x++;
                orangeGhost3.currentDirection = 'right';
                displayOrangeGhost3();
            }
        }

    }, 300);

    window.setInterval(function() {
        // console.log("moving!"
        if (orangeGhost4.currentDirection == 'right') {
            if (world[orangeGhost4.y][orangeGhost4.x + 1] != 2) {
                orangeGhost4.x++;
                displayOrangeGhost4();
                if (orangeGhost4.x == pacman.x && orangeGhost4.y == pacman.y) {
                    gameOverCheckPoint();
                }
            } else if ((world[orangeGhost4.y][orangeGhost4.x + 1] == 2)) {
                orangeGhost4.x--;
                orangeGhost4.currentDirection = 'left';
                displayOrangeGhost4();
            }
        } else {
            if (world[orangeGhost4.y][orangeGhost4.x - 1] != 2) {
                orangeGhost4.x--;
                displayOrangeGhost4();
                if (orangeGhost4.x == pacman.x && orangeGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();

                }
            } else if ((world[orangeGhost4.y][orangeGhost4.x - 1] == 2)) {
                orangeGhost4.x++;
                orangeGhost4.currentDirection = 'right';
                displayOrangeGhost4();
            }
        }

    }, 300);

    window.setInterval(function() {
        // console.log("moving!"
        if (blueGhost.currentDirection == 'down') {
            if (world[blueGhost.y + 1][blueGhost.x] != 2) {
                blueGhost.y++;
                displayBlueGhost();
                if (blueGhost.x == pacman.x && blueGhost.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[blueGhost.y + 1][blueGhost.x] == 2)) {
                blueGhost.y--;
                blueGhost.currentDirection = 'up';
                displayBlueGhost();
            }
        } else {
            if (world[blueGhost.y - 1][blueGhost.x] != 2) {
                blueGhost.y--;
                displayBlueGhost();
                if (blueGhost.x == pacman.x && blueGhost.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[blueGhost.y - 1][blueGhost.x] == 2)) {
                blueGhost.y++;
                blueGhost.currentDirection = 'down';
                displayBlueGhost();
            }
        }

    }, 100);

    window.setInterval(function() {
        // console.log("moving!"
        if (pinkGhost4.currentDirection == 'down') {
            if (world[pinkGhost4.y + 1][pinkGhost4.x] != 2) {
                pinkGhost4.y++;
                displayPinkGhost4();
                if (pinkGhost4.x == pacman.x && pinkGhost4.y == pacman.y) {
                    gameOverCheckPoint();
                }
            } else if ((world[pinkGhost4.y + 1][pinkGhost4.x] == 2)) {
                pinkGhost4.y--;
                pinkGhost4.currentDirection = 'up';
                displayPinkGhost4();
            }
        } else {
            if (world[pinkGhost4.y - 1][pinkGhost4.x] != 2) {
                pinkGhost4.y--;
                displayPinkGhost4();
                if (pinkGhost4.x == pacman.x && pinkGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();

                }
            } else if ((world[pinkGhost4.y - 1][pinkGhost4.x] == 2)) {
                pinkGhost4.y++;
                pinkGhost4.currentDirection = 'down';
                displayPinkGhost4();
            }
        }

    }, 300);

    window.setInterval(function() {
        // console.log("moving!"
        if (pinkGhost.currentDirection == 'right') {
            if (world[pinkGhost.y][pinkGhost.x + 1] != 2) {
                pinkGhost.x++;
                displayPinkGhost();
                if (pinkGhost.x == pacman.x && pinkGhost.y == pacman.y) {
                    gameOver();
                }
            } else if ((world[pinkGhost.y][pinkGhost.x + 1] == 2)) {
                pinkGhost.x--;
                pinkGhost.currentDirection = 'left';
                displayPinkGhost();
            }
        } else {
            if (world[pinkGhost.y][pinkGhost.x - 1] != 2) {
                pinkGhost.x--;
                displayPinkGhost();
                if (pinkGhost.x == pacman.x && pinkGhost.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();

                }
            } else if ((world[pinkGhost.y][pinkGhost.x - 1] == 2)) {
                pinkGhost.x++;
                pinkGhost.currentDirection = 'right';
                displayPinkGhost();
            }
        }

    }, 150);

    window.setInterval(function() {
        // console.log("moving!"
        if (pinkGhost1.currentDirection == 'right') {
            if (world[pinkGhost1.y][pinkGhost1.x + 1] != 2) {
                pinkGhost1.x++;
                displayPinkGhost1();
                if (pinkGhost1.x == pacman.x && pinkGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[pinkGhost1.y][pinkGhost1.x + 1] == 2)) {
                pinkGhost1.y++;
                pinkGhost1.currentDirection = 'down';
                displayPinkGhost1();
            }
        } else if (pinkGhost1.currentDirection == 'down') {
            if (world[pinkGhost1.y + 1][pinkGhost1.x] != 2) {
                pinkGhost1.y++;
                displayPinkGhost1();
                if (pinkGhost1.x == pacman.x && pinkGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[pinkGhost1.y + 1][pinkGhost1.x] == 2)) {
                pinkGhost1.x--;
                pinkGhost1.currentDirection = 'left';
                displayPinkGhost1();
            }
        } else if (pinkGhost1.currentDirection == 'left') {
            if (world[pinkGhost1.y][pinkGhost1.x - 1] != 2) {
                pinkGhost1.x--;
                displayPinkGhost1();
                if (pinkGhost1.x == pacman.x && pinkGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[pinkGhost1.y][pinkGhost1.x - 1] == 2)) {
                pinkGhost1.y--;
                pinkGhost1.currentDirection = 'up';
                displayPinkGhost1();
            }
        } else if (pinkGhost1.currentDirection == 'up') {
            if (world[pinkGhost1.y - 1][pinkGhost1.x] != 2) {
                pinkGhost1.y--;
                displayPinkGhost1();
                if (pinkGhost1.x == pacman.x && pinkGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[pinkGhost1.y - 1][pinkGhost1.x] == 2)) {
                pinkGhost1.x++;
                pinkGhost1.currentDirection = 'right';
                displayPinkGhost1();
            }
        }

    }, 100);

    window.setInterval(function() {
        // console.log("moving!"
        if (orangeGhost1.currentDirection == 'right') {
            if (world[orangeGhost1.y][orangeGhost1.x + 1] != 2) {
                orangeGhost1.x++;
                displayOrangeGhost1();
                if (orangeGhost1.x == pacman.x && orangeGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[orangeGhost1.y][orangeGhost1.x + 1] == 2)) {
                orangeGhost1.y++;
                orangeGhost1.currentDirection = 'down';
                displayOrangeGhost1();
            }
        } else if (orangeGhost1.currentDirection == 'down') {
            if (world[orangeGhost1.y + 1][orangeGhost1.x] != 2) {
                orangeGhost1.y++;
                displayOrangeGhost1();
                if (orangeGhost1.x == pacman.x && orangeGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[orangeGhost1.y + 1][orangeGhost1.x] == 2)) {
                orangeGhost1.x--;
                orangeGhost1.currentDirection = 'left';
                displayOrangeGhost1();
            }
        } else if (orangeGhost1.currentDirection == 'left') {
            if (world[orangeGhost1.y][orangeGhost1.x - 1] != 2) {
                orangeGhost1.x--;
                displayOrangeGhost1();
                if (orangeGhost1.x == pacman.x && orangeGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[orangeGhost1.y][orangeGhost1.x - 1] == 2)) {
                orangeGhost1.y--;
                orangeGhost1.currentDirection = 'up';
                displayOrangeGhost1();
            }
        } else if (orangeGhost1.currentDirection == 'up') {
            if (world[orangeGhost1.y - 1][orangeGhost1.x] != 2) {
                orangeGhost1.y--;
                displayOrangeGhost1();
                if (orangeGhost1.x == pacman.x && orangeGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[orangeGhost1.y - 1][orangeGhost1.x] == 2)) {
                orangeGhost1.x++;
                orangeGhost1.currentDirection = 'right';
                displayOrangeGhost1();
            }
        }

    }, 75);

    window.setInterval(function() {
        // console.log("moving!"
        if (blueGhost1.currentDirection == 'right') {
            if (world[blueGhost1.y][blueGhost1.x + 1] != 2) {
                blueGhost1.x++;
                displayBlueGhost1();
                if (blueGhost1.x == pacman.x && blueGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost1.y][blueGhost1.x + 1] == 2)) {
                blueGhost1.y++;
                blueGhost1.currentDirection = 'down';
                displayBlueGhost1();
            }
        } else if (blueGhost1.currentDirection == 'down') {
            if (world[blueGhost1.y + 1][blueGhost1.x] != 2) {
                blueGhost1.y++;
                displayBlueGhost1();
                if (blueGhost1.x == pacman.x && blueGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost1.y + 1][blueGhost1.x] == 2)) {
                blueGhost1.x--;
                blueGhost1.currentDirection = 'left';
                displayBlueGhost1();
            }
        } else if (blueGhost1.currentDirection == 'left') {
            if (world[blueGhost1.y][blueGhost1.x - 1] != 2) {
                blueGhost1.x--;
                displayBlueGhost1();
                if (blueGhost1.x == pacman.x && blueGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost1.y][blueGhost1.x - 1] == 2)) {
                blueGhost1.y--;
                blueGhost1.currentDirection = 'up';
                displayBlueGhost1();
            }
        } else if (blueGhost1.currentDirection == 'up') {
            if (world[blueGhost1.y - 1][blueGhost1.x] != 2) {
                blueGhost1.y--;
                displayBlueGhost1();
                if (blueGhost1.x == pacman.x && blueGhost1.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost1.y - 1][blueGhost1.x] == 2)) {
                blueGhost1.x++;
                blueGhost1.currentDirection = 'right';
                displayBlueGhost1();
            }
        }

    }, 300);

    window.setInterval(function() {
        // console.log("moving!"
        if (blueGhost2.currentDirection == 'right') {
            if (world[blueGhost2.y][blueGhost2.x + 1] != 2) {
                blueGhost2.x++;
                displayBlueGhost2();
                if (blueGhost2.x == pacman.x && blueGhost2.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost2.y][blueGhost2.x + 1] == 2)) {
                blueGhost2.y++;
                blueGhost2.currentDirection = 'down';
                displayBlueGhost2();
            }
        } else if (blueGhost2.currentDirection == 'down') {
            if (world[blueGhost2.y + 1][blueGhost2.x] != 2) {
                blueGhost2.y++;
                displayBlueGhost2();
                if (blueGhost2.x == pacman.x && blueGhost2.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost2.y + 1][blueGhost2.x] == 2)) {
                blueGhost2.x--;
                blueGhost2.currentDirection = 'left';
                displayBlueGhost2();
            }
        } else if (blueGhost2.currentDirection == 'left') {
            if (world[blueGhost2.y][blueGhost2.x - 1] != 2) {
                blueGhost2.x--;
                displayBlueGhost2();
                if (blueGhost2.x == pacman.x && blueGhost2.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost2.y][blueGhost2.x - 1] == 2)) {
                blueGhost2.y--;
                blueGhost2.currentDirection = 'up';
                displayBlueGhost2();
            }
        } else if (blueGhost2.currentDirection == 'up') {
            if (world[blueGhost2.y - 1][blueGhost2.x] != 2) {
                blueGhost2.y--;
                displayBlueGhost2();
                if (blueGhost2.x == pacman.x && blueGhost2.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[blueGhost2.y - 1][blueGhost2.x] == 2)) {
                blueGhost2.x++;
                blueGhost2.currentDirection = 'right';
                displayBlueGhost2();
            }
        }

    }, 110);

    window.setInterval(function() {
        // console.log("moving!"
        if (redGhost4.currentDirection == 'right') {
            if (world[redGhost4.y][redGhost4.x + 1] != 2) {
                redGhost4.x++;
                displayRedGhost4();
                if (redGhost4.x == pacman.x && redGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[redGhost4.y][redGhost4.x + 1] == 2)) {
                redGhost4.y++;
                redGhost4.currentDirection = 'down';
                displayRedGhost4();
            }
        } else if (redGhost4.currentDirection == 'down') {
            if (world[redGhost4.y + 1][redGhost4.x] != 2) {
                redGhost4.y++;
                displayRedGhost4();
                if (redGhost4.x == pacman.x && redGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[redGhost4.y + 1][redGhost4.x] == 2)) {
                redGhost4.x--;
                redGhost4.currentDirection = 'left';
                displayRedGhost4();
            }
        } else if (redGhost4.currentDirection == 'left') {
            if (world[redGhost4.y][redGhost4.x - 1] != 2) {
                redGhost4.x--;
                displayRedGhost4();
                if (redGhost4.x == pacman.x && redGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[redGhost4.y][redGhost4.x - 1] == 2)) {
                redGhost4.y--;
                redGhost4.currentDirection = 'up';
                displayRedGhost4();
            }
        } else if (redGhost4.currentDirection == 'up') {
            if (world[redGhost4.y - 1][redGhost4.x] != 2) {
                redGhost4.y--;
                displayRedGhost4();
                if (redGhost4.x == pacman.x && redGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOver();
                }
            } else if ((world[redGhost4.y - 1][redGhost4.x] == 2)) {
                redGhost4.x++;
                redGhost4.currentDirection = 'right';
                displayRedGhost4();
            }
        }

    }, 110);

    window.setInterval(function() {
        // console.log("moving!"
        if (redGhost6.currentDirection == 'right') {
            if (world[redGhost6.y][redGhost6.x + 1] != 2) {
                redGhost6.x++;
                displayRedGhost6();
                if (redGhost6.x == pacman.x && redGhost6.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[redGhost6.y][redGhost6.x + 1] == 2)) {
                redGhost6.y++;
                redGhost6.currentDirection = 'down';
                displayRedGhost6();
            }
        } else if (redGhost6.currentDirection == 'down') {
            if (world[redGhost6.y + 1][redGhost6.x] != 2) {
                redGhost6.y++;
                displayRedGhost6();
                if (redGhost6.x == pacman.x && redGhost6.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[redGhost6.y + 1][redGhost6.x] == 2)) {
                redGhost6.x--;
                redGhost6.currentDirection = 'left';
                displayRedGhost6();
            }
        } else if (redGhost6.currentDirection == 'left') {
            if (world[redGhost6.y][redGhost6.x - 1] != 2) {
                redGhost6.x--;
                displayRedGhost6();
                if (redGhost6.x == pacman.x && redGhost6.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[redGhost6.y][redGhost6.x - 1] == 2)) {
                redGhost6.y--;
                redGhost6.currentDirection = 'up';
                displayRedGhost6();
            }
        } else if (redGhost6.currentDirection == 'up') {
            if (world[redGhost6.y - 1][redGhost6.x] != 2) {
                redGhost6.y--;
                displayRedGhost6();
                if (redGhost6.x == pacman.x && redGhost6.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[redGhost6.y - 1][redGhost6.x] == 2)) {
                redGhost6.x++;
                redGhost6.currentDirection = 'right';
                displayRedGhost6();
            }
        }

    }, 300);

    window.setInterval(function() {
        // console.log("moving!"
        if (blueGhost4.currentDirection == 'right') {
            if (world[blueGhost4.y][blueGhost4.x + 1] != 2) {
                blueGhost4.x++;
                displayBlueGhost4();
                if (blueGhost4.x == pacman.x && blueGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[blueGhost4.y][blueGhost4.x + 1] == 2)) {
                blueGhost4.y++;
                blueGhost4.currentDirection = 'down';
                displayBlueGhost4();
            }
        } else if (blueGhost4.currentDirection == 'down') {
            if (world[blueGhost4.y + 1][blueGhost4.x] != 2) {
                blueGhost4.y++;
                displayBlueGhost4();
                if (blueGhost4.x == pacman.x && blueGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[blueGhost4.y + 1][blueGhost4.x] == 2)) {
                blueGhost4.x--;
                blueGhost4.currentDirection = 'left';
                displayBlueGhost4();
            }
        } else if (blueGhost4.currentDirection == 'left') {
            if (world[blueGhost4.y][blueGhost4.x - 1] != 2) {
                blueGhost4.x--;
                displayBlueGhost4();
                if (blueGhost4.x == pacman.x && blueGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[blueGhost4.y][blueGhost4.x - 1] == 2)) {
                blueGhost4.y--;
                blueGhost4.currentDirection = 'up';
                displayBlueGhost4();
            }
        } else if (blueGhost4.currentDirection == 'up') {
            if (world[blueGhost4.y - 1][blueGhost4.x] != 2) {
                blueGhost4.y--;
                displayBlueGhost4();
                if (blueGhost4.x == pacman.x && blueGhost4.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[blueGhost4.y - 1][blueGhost4.x] == 2)) {
                blueGhost4.x++;
                blueGhost4.currentDirection = 'right';
                displayBlueGhost4();
            }
        }

    }, 75);

    window.setInterval(function() {
        // console.log("moving!"
        if (orangeGhost5.currentDirection == 'right') {
            if (world[orangeGhost5.y][orangeGhost5.x + 1] != 2) {
                orangeGhost5.x++;
                displayOrangeGhost5();
                if (orangeGhost5.x == pacman.x && orangeGhost5.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[orangeGhost5.y][orangeGhost5.x + 1] == 2)) {
                orangeGhost5.y++;
                orangeGhost5.currentDirection = 'down';
                displayOrangeGhost5();
            }
        } else if (orangeGhost5.currentDirection == 'down') {
            if (world[orangeGhost5.y + 1][orangeGhost5.x] != 2) {
                orangeGhost5.y++;
                displayOrangeGhost5();
                if (orangeGhost5.x == pacman.x && orangeGhost5.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[orangeGhost5.y + 1][orangeGhost5.x] == 2)) {
                orangeGhost5.x--;
                orangeGhost5.currentDirection = 'left';
                displayOrangeGhost5();
            }
        } else if (orangeGhost5.currentDirection == 'left') {
            if (world[orangeGhost5.y][orangeGhost5.x - 1] != 2) {
                orangeGhost5.x--;
                displayOrangeGhost5();
                if (orangeGhost5.x == pacman.x && orangeGhost5.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[orangeGhost5.y][orangeGhost5.x - 1] == 2)) {
                orangeGhost5.y--;
                orangeGhost5.currentDirection = 'up';
                displayOrangeGhost5();
            }
        } else if (orangeGhost5.currentDirection == 'up') {
            if (world[orangeGhost5.y - 1][orangeGhost5.x] != 2) {
                orangeGhost5.y--;
                displayOrangeGhost5();
                if (orangeGhost5.x == pacman.x && orangeGhost5.y == pacman.y) {
                    pacmanGotHit = true;
                    gameOverCheckPoint();
                }
            } else if ((world[orangeGhost5.y - 1][orangeGhost5.x] == 2)) {
                orangeGhost5.x++;
                orangeGhost5.currentDirection = 'right';
                displayOrangeGhost5();
            }
        }

    }, 200);



    displayWorld();
    displayPacman();
    displayRedGhost();
    displayRedGhost1();
    displayRedGhost2();
    displayRedGhost3();
    displayRedGhost4();
    displayRedGhost5();
    displayRedGhost6();
    displayOrangeGhost();
    displayOrangeGhost1();
    displayOrangeGhost2();
    displayOrangeGhost3();
    displayOrangeGhost4();
    displayOrangeGhost5();
    displayBlueGhost();
    displayBlueGhost1();
    displayBlueGhost2();
    displayBlueGhost3();
    displayBlueGhost4();
    displayPinkGhost();
    displayPinkGhost1();
    displayPinkGhost2();
    displayPinkGhost3();
    displayPinkGhost4();

    displayScore();

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    document.onkeydown = function(movePacman) {
        console.log(movePacman.keyCode);
        if (movePacman.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
            pacmanShow.style.transform = "none";
            pacman.x++;
        } else if (movePacman.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
            pacmanShow.style.transform = "none";
            if (pacmanShow.style.transform === "none") {
                pacmanShow.style.transform = "rotate(180deg)";
            }
            pacman.x--;
        } else if (movePacman.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
            pacmanShow.style.transform = "none";
            if (pacmanShow.style.transform === "none") {
                pacmanShow.style.transform = "rotate(270deg)";
            }
            pacman.y--;
        } else if (movePacman.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
            pacmanShow.style.transform = "none";
            if (pacmanShow.style.transform === "none") {
                pacmanShow.style.transform = "rotate(90deg)";
            }
            pacman.y++;
        }
        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score += 10;
            displayScore();
            displayWorld();
        }
        if (world[pacman.y][pacman.x] == 3) {
            world[pacman.y][pacman.x] = 0;
            keysFound += 1;
            console.log("Found a key!")
            displayScore();
            displayWorld();
        }
        displayPacman();
        if (redGhost.x == pacman.x && redGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (redGhost1.x == pacman.x && redGhost1.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        if (redGhost2.x == pacman.x && redGhost2.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        if (redGhost3.x == pacman.x && redGhost3.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        if (redGhost4.x == pacman.x && redGhost4.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

        if (redGhost5.x == pacman.x && redGhost5.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

        if (redGhost6.x == pacman.x && redGhost6.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();

        if (orangeGhost.x == pacman.x && orangeGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (orangeGhost1.x == pacman.x && orangeGhost1.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (orangeGhost2.x == pacman.x && orangeGhost2.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (orangeGhost3.x == pacman.x && orangeGhost3.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (orangeGhost4.x == pacman.x && orangeGhost4.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (orangeGhost5.x == pacman.x && orangeGhost5.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (blueGhost.x == pacman.x && blueGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (blueGhost1.x == pacman.x && blueGhost1.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (blueGhost2.x == pacman.x && blueGhost2.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (blueGhost3.x == pacman.x && blueGhost3.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (blueGhost4.x == pacman.x && blueGhost4.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (pinkGhost.x == pacman.x && pinkGhost.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (pinkGhost1.x == pacman.x && pinkGhost1.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (pinkGhost2.x == pacman.x && pinkGhost2.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (pinkGhost3.x == pacman.x && pinkGhost3.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }
        displayPacman();
        if (pinkGhost4.x == pacman.x && pinkGhost4.y == pacman.y) {
            pacmanGotHit = true;
            gameOver();
        }

    }

    function gameOver() {
        console.log("lives = " + pacmanLives)

        if (timeLeft == 0) {

            console.log("game over!")
            document.getElementById("ghostsOrTimeMessage").innerHTML = "You ran out of time!";

            var theScore2 = document.getElementById("gameOverMessage");
            document.getElementById("scoreNum2").innerHTML = "Your final score was " + score + " points!";

            var theScore = document.getElementById("youWinMessage");
            document.getElementById("scoreNum2").innerHTML = "Your final score was " + score + " points!";
            pacman = {
                x: 1,
                y: 14
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
            if (redGhostShow1.style.display === "none") {
                redGhostShow1.style.display = "block";
            } else {
                redGhostShow1.style.display = "none";
            }
            if (redGhostShow2.style.display === "none") {
                redGhostShow2.style.display = "block";
            } else {
                redGhostShow2.style.display = "none";
            }
            if (redGhostShow3.style.display === "none") {
                redGhostShow3.style.display = "block";
            } else {
                redGhostShow3.style.display = "none";
            }
            if (redGhostShow4.style.display === "none") {
                redGhostShow4.style.display = "block";
            } else {
                redGhostShow4.style.display = "none";
            }
            if (redGhostShow5.style.display === "none") {
                redGhostShow5.style.display = "block";
            } else {
                redGhostShow5.style.display = "none";
            }
            if (redGhostShow6.style.display === "none") {
                redGhostShow6.style.display = "block";
            } else {
                redGhostShow6.style.display = "none";
            }
            if (orangeGhostShow.style.display === "none") {
                orangeGhostShow.style.display = "block";
            } else {
                orangeGhostShow.style.display = "none";
            }
            if (orangeGhostShow1.style.display === "none") {
                orangeGhostShow1.style.display = "block";
            } else {
                orangeGhostShow1.style.display = "none";
            }
            if (orangeGhostShow2.style.display === "none") {
                orangeGhostShow2.style.display = "block";
            } else {
                orangeGhostShow2.style.display = "none";
            }
            if (orangeGhostShow3.style.display === "none") {
                orangeGhostShow3.style.display = "block";
            } else {
                orangeGhostShow3.style.display = "none";
            }
            if (orangeGhostShow4.style.display === "none") {
                orangeGhostShow4.style.display = "block";
            } else {
                orangeGhostShow4.style.display = "none";
            }
            if (orangeGhostShow5.style.display === "none") {
                orangeGhostShow5.style.display = "block";
            } else {
                orangeGhostShow5.style.display = "none";
            }
            if (blueGhostShow.style.display === "none") {
                blueGhostShow.style.display = "block";
            } else {
                blueGhostShow.style.display = "none";
            }
            if (blueGhostShow1.style.display === "none") {
                blueGhostShow1.style.display = "block";
            } else {
                blueGhostShow1.style.display = "none";
            }
            if (blueGhostShow2.style.display === "none") {
                blueGhostShow2.style.display = "block";
            } else {
                blueGhostShow2.style.display = "none";
            }
            if (blueGhostShow3.style.display === "none") {
                blueGhostShow3.style.display = "block";
            } else {
                blueGhostShow3.style.display = "none";
            }
            if (blueGhostShow4.style.display === "none") {
                blueGhostShow4.style.display = "block";
            } else {
                blueGhostShow4.style.display = "none";
            }
            if (pinkGhostShow.style.display === "none") {
                pinkGhostShow.style.display = "block";
            } else {
                pinkGhostShow.style.display = "none";
            }
            if (pinkGhostShow1.style.display === "none") {
                pinkGhostShow1.style.display = "block";
            } else {
                pinkGhostShow1.style.display = "none";
            }
            if (pinkGhostShow2.style.display === "none") {
                pinkGhostShow2.style.display = "block";
            } else {
                pinkGhostShow2.style.display = "none";
            }
            if (pinkGhostShow3.style.display === "none") {
                pinkGhostShow3.style.display = "block";
            } else {
                pinkGhostShow3.style.display = "none";
            }
            if (pinkGhostShow4.style.display === "none") {
                pinkGhostShow4.style.display = "block";
            } else {
                pinkGhostShow4.style.display = "none";
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
        }

        if (pacmanLives == 1) {

            console.log("game over!")
            document.getElementById("ghostsOrTimeMessage").innerHTML = "The ghosts got you!";

            var theScore2 = document.getElementById("gameOverMessage");
            document.getElementById("scoreNum2").innerHTML = "Your final score was " + score + " points!";

            var theScore = document.getElementById("youWinMessage");
            document.getElementById("scoreNum2").innerHTML = "Your final score was " + score + " points!";
            pacman = {
                x: 1,
                y: 14
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
            if (redGhostShow1.style.display === "none") {
                redGhostShow1.style.display = "block";
            } else {
                redGhostShow1.style.display = "none";
            }
            if (redGhostShow2.style.display === "none") {
                redGhostShow2.style.display = "block";
            } else {
                redGhostShow2.style.display = "none";
            }
            if (redGhostShow3.style.display === "none") {
                redGhostShow3.style.display = "block";
            } else {
                redGhostShow3.style.display = "none";
            }
            if (redGhostShow4.style.display === "none") {
                redGhostShow4.style.display = "block";
            } else {
                redGhostShow4.style.display = "none";
            }
            if (redGhostShow5.style.display === "none") {
                redGhostShow5.style.display = "block";
            } else {
                redGhostShow5.style.display = "none";
            }
            if (redGhostShow6.style.display === "none") {
                redGhostShow6.style.display = "block";
            } else {
                redGhostShow6.style.display = "none";
            }
            if (orangeGhostShow.style.display === "none") {
                orangeGhostShow.style.display = "block";
            } else {
                orangeGhostShow.style.display = "none";
            }
            if (orangeGhostShow1.style.display === "none") {
                orangeGhostShow1.style.display = "block";
            } else {
                orangeGhostShow1.style.display = "none";
            }
            if (orangeGhostShow2.style.display === "none") {
                orangeGhostShow2.style.display = "block";
            } else {
                orangeGhostShow2.style.display = "none";
            }
            if (orangeGhostShow3.style.display === "none") {
                orangeGhostShow3.style.display = "block";
            } else {
                orangeGhostShow3.style.display = "none";
            }
            if (orangeGhostShow4.style.display === "none") {
                orangeGhostShow4.style.display = "block";
            } else {
                orangeGhostShow4.style.display = "none";
            }
            if (orangeGhostShow5.style.display === "none") {
                orangeGhostShow5.style.display = "block";
            } else {
                orangeGhostShow5.style.display = "none";
            }
            if (blueGhostShow.style.display === "none") {
                blueGhostShow.style.display = "block";
            } else {
                blueGhostShow.style.display = "none";
            }
            if (blueGhostShow1.style.display === "none") {
                blueGhostShow1.style.display = "block";
            } else {
                blueGhostShow1.style.display = "none";
            }
            if (blueGhostShow2.style.display === "none") {
                blueGhostShow2.style.display = "block";
            } else {
                blueGhostShow2.style.display = "none";
            }
            if (blueGhostShow3.style.display === "none") {
                blueGhostShow3.style.display = "block";
            } else {
                blueGhostShow3.style.display = "none";
            }
            if (blueGhostShow4.style.display === "none") {
                blueGhostShow4.style.display = "block";
            } else {
                blueGhostShow4.style.display = "none";
            }
            if (pinkGhostShow.style.display === "none") {
                pinkGhostShow.style.display = "block";
            } else {
                pinkGhostShow.style.display = "none";
            }
            if (pinkGhostShow1.style.display === "none") {
                pinkGhostShow1.style.display = "block";
            } else {
                pinkGhostShow1.style.display = "none";
            }
            if (pinkGhostShow2.style.display === "none") {
                pinkGhostShow2.style.display = "block";
            } else {
                pinkGhostShow2.style.display = "none";
            }
            if (pinkGhostShow3.style.display === "none") {
                pinkGhostShow3.style.display = "block";
            } else {
                pinkGhostShow3.style.display = "none";
            }
            if (pinkGhostShow4.style.display === "none") {
                pinkGhostShow4.style.display = "block";
            } else {
                pinkGhostShow4.style.display = "none";
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
            console.log("Lost a life! Remaining lives = " + pacmanLives)
            pacman = {
                x: 1,
                y: 14
            };
            lives();
            displayPacman();
            displayWorld();
        }
    }

    function gameOverCheckPoint() {
        if (pacmanLives == 1) {
            gameOver();
        } else {
            pacmanLives -= 1;
            console.log("Lost a life! Remaining lives = " + pacmanLives)
            pacman = {
                x: 29,
                y: 4
            };
            lives();
            displayPacman();
            displayWorld();
        }
    }

    function gameOverCheckPoint2() {
        if (pacmanLives == 1) {
            gameOver();
        } else {
            pacmanLives -= 1;
            console.log("Lost a life! Remaining lives = " + pacmanLives)
            pacman = {
                x: 29,
                y: 22
            };
            lives();
            displayPacman();
            displayWorld();
        }
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