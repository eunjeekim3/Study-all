// 레벨 0
// hhttps://school.programmers.co.kr/learn/courses/30/lessons/181847

/*
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 
0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n_str) {
    // 0을 공백으로 치환하는 정규식 표현
    return n_str.replace(/(^0+)/, ""); 
}

/*
실패한 풀이
function solution(n_str) {
    for (let i=0; i<n_str.length; i++) {
        if (n_str.charAt(i) === '0') {
            return n_str.slice(i + 2);
        } else {
            return n_str;
        }
    }
}
*/

/*
다른 풀이
const solution = (str) => String(Number(str))
*/