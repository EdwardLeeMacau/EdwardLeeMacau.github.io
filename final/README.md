# FrontEnd Final: Pacman

## Motivation 

Simulate a claasic game: Pacman. The idea come from arcade game machine at gongguan.

## How to play?

1. Using up, down, left, right to control pacman
2. Eat all beans and escape from the chasing of ghosts.
2. Win criteria:
    - Eat all beams
3. Loss criteria:
    - The player has 3 lives. Lifes - 1 if be catched by ghosts.

## Features

Easy to develop and extend this game. It's easy for other, even non-specialized, to modify the map and the action of the ghosts.
  - The map is defined by an array. `2` represents wall, `1` represents coins and `0` represents path.
  - Everyone can define a new AI logic like the code 173 - 204. 
  - Now the ghosts move with random paths, select random path for each cross section but won't walk back.

## Future

1. With a server, a multiplayer pacman game can be implemented. AJAX and socket might help this.
2. Implement a map editor (User Interface) for others.

## Version

- 2020.07.01 Beta 1.1
  - `FIXED`: Wall detection logic have been fixed, all character can't through the wall.
- 2020.06.30 Beta 1.0

## Library

- jQuery