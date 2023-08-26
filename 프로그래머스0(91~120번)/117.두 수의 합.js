// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181846

/*
0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b) {
    let numA = BigInt(a);
    let numB = BigInt(b);
    return String(numA + numB);
}

/*
다른 풀이
function solution(a, b) {
    var answer = BigInt(a) + BigInt(b)
    return answer + "";
}
*/