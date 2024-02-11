// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181944?language=java

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    
    let answer = '';
    if (n % 2 === 0) { // 짝수일 경우
        answer = n + " is even"
    } else { // 홀수일 경우
        answer = n + " is odd"
    }
    
    console.log(answer);
});
