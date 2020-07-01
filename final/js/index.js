// ------------------------------------------------------
//  GLOBAL VARIABLES
// ------------------------------------------------------

var world = [
    // original code

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 0, 2, 0, 0, 2, 1, 2, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 2, 0, 2],
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
    [2, 0, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0, 2],
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
var status = "GameIntro";
var score = 236;

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

function getLoc(loc) {
    return world[loc.y][loc.x];
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

    var output = "";
    var numOfCoins = 0;

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
        }
        output += "\n</div>";
    }

    // WIN LOGIC
    if (score == 0) {
        $("#scoreNum").html("Your final score was " + 236 - score + " points!");

        pacman = {
            x: 13,
            y: 21
        };

        $("#worldBorder").css('display', 'none');
        $("#pacman").css('display', 'none');
        $("#world").css('display', 'none');
        $("#redGhost").css('display', 'none');
        $("#orangeGhost").css('display', 'none');
        $("#blueGhost").css('display', 'none');
        $("#pinkGhost").css('display', 'none');
        $("#scoreBox").css('display', 'none');
        $("#youWinMessage").css('display', 'block');
    }

    $("#world").html(output);
}

function updateLoc(loc) {

}

function displayPacman() {
    $("#pacman").css('top', pacman.y * 24 + "px");
    $("#pacman").css('left', pacman.x * 24 + "px");
}

function displayRedGhost() {
    $("#redGhost").css('top', redGhost.y * 24 + "px");
    $("#redGhost").css('left', redGhost.x * 24 + "px");
}

function displayOrangeGhost() {
    $("#orangeGhost").css('top', orangeGhost.y * 24 + "px");
    $("#orangeGhost").css('left', orangeGhost.x * 24 + "px");
}

function displayBlueGhost() {
    $("#blueGhost").css('top', blueGhost.y * 24 + "px");
    $("#blueGhost").css('left', blueGhost.x * 24 + "px");
}

function displayPinkGhost() {
    $("#pinkGhost").css('top', pinkGhost.y * 24 + "px");
    $("#pinkGhost").css('left', pinkGhost.x * 24 + "px");
}

function displayScore() {
    $("#score").html(score);
}

// ------------------------------------------------------
//  MAIN FUNCTION
// ------------------------------------------------------

// Game Init function
function worldFunction() {

    reset();

    $("#introScreen").css('display', 'none');
    $("#worldBorder").css('display', 'inline-block');
    $("#pacman").css('display', 'block');
    $("#world").css('display', 'block');
    $("#redGhost").css('display', 'block');
    $("#orangeGhost").css('display', 'block');
    $("#blueGhost").css('display', 'block');
    $("#pinkGhost").css('display', 'block');
    $("#scoreBox").css('display', 'inline-block');

    // ------------------------------------------------------
    //  AGENTS FUNCTION
    // ------------------------------------------------------

    window.setInterval(function() {
        randomAgent(redGhost, displayRedGhost);
    }, 300);

    window.setInterval(function() {
        randomAgent(orangeGhost, displayOrangeGhost);
    }, 300);

    window.setInterval(function() {
        randomAgent(blueGhost, displayBlueGhost);
    }, 500);

    window.setInterval(function() {
        randomAgent(pinkGhost, displayPinkGhost);
    }, 300);

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
        let newLoc = null;

        if (movePacman.keyCode == 39) {
            newLoc = right(pacman);

            if (getLoc(newLoc) != 2) {
                $("#pacman").css('transform', 'none');
                pacman.x = newLoc.x;
            }
        } else if (movePacman.keyCode == 37) {
            newLoc = left(pacman);

            if (getLoc(newLoc) != 2) {
                $("#pacman").css('transform', 'rotate(180deg)');
                pacman.x = left(pacman).x;
            }
        } else if (movePacman.keyCode == 38) {
            newLoc = up(pacman);

            if (getLoc(newLoc) != 2) {
                $("#pacman").css('transform', 'rotate(270deg)');
                pacman.y = up(pacman).y;
            }
        } else if (movePacman.keyCode == 40) {
            newLoc = down(pacman);

            if (getLoc(newLoc) != 2) {
                $("#pacman").css('transform', 'rotate(90deg)');
                pacman.y = down(pacman).y;
            }
        }

        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score--;
            displayScore();
            displayWorld();
        }
        // displayPacman();

        if (collision(redGhost, pacman)) {
            pacmanGotHit = true;
            gameOver();
        }
        // displayPacman();

        if (collision(orangeGhost, pacman)) {
            pacmanGotHit = true;
            gameOver();
        }
        // displayPacman();

        if (collision(blueGhost, pacman)) {
            pacmanGotHit = true;
            gameOver();
        }
        // displayPacman();

        if (collision(pinkGhost, pacman)) {
            pacmanGotHit = true;
            gameOver();
        }
        // displayPacman();

        displayPacman();
    }

}

function gameOver() {

    if (pacmanLives == 1) {
        $("#scoreNum2").html("Your final score was " + score + " points!");

        pacman = {
            x: 13,
            y: 21
        };

        $("#world").css('display', 'none');
        $("#worldBorder").css('display', 'none');
        $("#pacman").css('display', 'none');
        $("#redGhost").css('display', 'none');
        $("#orangeGhost").css('display', 'none');
        $("#blueGhost").css('display', 'none');
        $("#pinkGhost").css('display', 'none');
        $("#scoreBox").css('display', 'none');
        $("#gameOverMessage").css('display', "block");

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

function playAgain() {
    pacmanGotHit = false;
    window.location.reload();
    worldFunction();
}