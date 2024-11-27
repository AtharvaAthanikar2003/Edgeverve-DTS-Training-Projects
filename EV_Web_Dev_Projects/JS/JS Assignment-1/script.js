/* 
Pattern - A alphabet star by + or *, 
print 10101 5 times on new line
print reverse triangle
print pattern for numeric value "1"
*/

// Pattern - A alphabet star by + or *
function printAAlphabet() {
    const n = 5;
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        for (let j = 0; j < (2 * i + 1); j++) {
            if (i === Math.floor(n / 2)) {
                line += '*';
            } else {
                if (j === 0 || j === (2 * i)) {
                    line += '*';
                } else {
                    line += ' ';
                }
            }
        }
        console.log(line);
    }
}
printAAlphabet();

// Print 10101 5 times on new line
function printNumPattern() {
    const n = 5;
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '10101 ';
        }
        console.log(line.trim());
    }
}
printNumPattern();

// Print reverse triangle
function printReverseTriangle() {
    const n = 5;
    for (let i = n; i >= 1; i--) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '* '; 
        }
        console.log(line.trim());
    }
}
printReverseTriangle();

// Print pattern for numeric value "1"
function printNumericPattern() {
    const n = 5;
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '1 ';
        }
        console.log(line.trim());
    }
}
printNumericPattern();