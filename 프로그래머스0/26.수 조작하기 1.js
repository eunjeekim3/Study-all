// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181926

/*
정수 n과 문자열 control이 주어집니다. 
control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, 
control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
*/

function solution(n, control) {
    var answer = n;
    
    for (let i = 0; i < control.length; i++) {
        if (control[i] === 'w') {
            answer = answer + 1;          
        } else if (control[i] === 's') {
            answer = answer - 1;
        } else if (control[i] === 'd') {
            answer = answer + 10;
        } else if (control[i] === 'a') {
            answer = answer - 10;
        }
    }
    
    return answer;
}

/*
다른 사람의 풀이
function solution(n, control) {
    const controller = {
        w : 1,
        s : -1,
        d : 10,
        a : -10
    }
    
    return [...control].reduce((acc, cur) => acc + controller[cur], n);
    // reduce메소드로 배열 요소에 대해 주어진 콜백함수를 실행하면서 결과값을 계산함
    // acc는 누적된 결과, cur은 현재 처리중인 배열 요소
    // 즉 n값을 기준으로 control 배열 요소를 순회한것임
}
*/