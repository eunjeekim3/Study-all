// 입력 # 4 5
// 출력 # a = 4 / b = 5

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// line, close는 readline 인터페이스의 이벤트 이름
// line : 사용자가 입력한 한 줄의 데이터를 처리하기 위해 발생.
// close : readline 인터페이스의 입력 스트림이 종료될 때 발생
rl.on('line', function (line) {
    input = line.split(' '); // 공백을 기준으로 input 배열에 저장
}).on('close', function () {
    console.log("a =", Number(input[0]));
    console.log("b =", Number(input[1]));
});