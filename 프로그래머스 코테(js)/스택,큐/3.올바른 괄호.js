// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

/*
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(s){
    let stackCount = 0; // 스택처럼 사용하는 변수

    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1; // '('일때는 1을 더하고, ')'일때는 빼기
        if (stackCount < 0) return false;
    }

    return stackCount === 0 ? true : false; // 0일때 true, 아니면 false
}

/*
다른 풀이
function solution(s){
    let cum = 0
    for (let paren of s) { // paren은 현재 반복중인 문자
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}
*/