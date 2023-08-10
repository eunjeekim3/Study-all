// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181833

/*
정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 
이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(n) {
    let result = [];

    for(let i = 0; i < n; i++) {
        let arr = [];
        for(let j = 0; j < n; j++) {
            if(i === j) {
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
        result.push(arr);
    }

    return result;
}


/*
다른 풀이
function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0)) // fill로 모든 Array를 정적 값으로 채움
    
    return arr.map((a, i) => {
        return a.map((b, bi) => bi === i ? 1 : b)
    })
}
*/