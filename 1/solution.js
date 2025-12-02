const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

/*
          v       x
-----------------------

Dial starts at 50

0 - 99

How many times dial points exaclty at 0

*/

const moveDial = input => input
    .split('\n')
    .map(i => [i[0] == 'R' ? 1 : -1 , Number(i.substring(1))])
    .reduce(([position, total], [heading, ticks]) => {
        const newPosition = (((position + (heading * ticks)) % 100) + 100) % 100;
        return [newPosition, newPosition === 0 ? total + 1 : total];
    }, [50, 0]);

// console.log('1) eg:    ', moveDial(eg));
// console.log('1) input: ', moveDial(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg:    ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:

Correct:
    1) 1055
    2) 
*/
