// 입력 # string 5
// 출력 # stringstringstringstringstring

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    for(let i=0; i<n; i++){
        process.stdout.write(str);
        // process.stdout.write를 사용해서 줄바꿈없이 출력
    }
});