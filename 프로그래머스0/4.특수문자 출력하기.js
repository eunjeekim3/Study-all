// 출력 # !@#$%^&*(\'"<>?:;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    //console.log('!@#$%^&*(\'"<>?:;')
    console.log('!@#$%^&*(\\\'"<>?:;')
    // 특수문자를 출력하기위해서는 \를 입력해야됨
});