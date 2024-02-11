// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181919

/*
임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 
return 하는 solution 함수를 완성해 주세요.
*/

function solution(n) {
    var answer = [];
    
    while (!answer.includes(1)) {
        if (n % 2 === 0) { // 짝수라면
            answer.push(n);
            n = n / 2;
        } else {
            answer.push(n);
            n = n * 3 + 1;
        }
    }
    
    return answer;
}
