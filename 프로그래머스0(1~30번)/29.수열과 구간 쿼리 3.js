// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181924

/*
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, queries) {
    var answer = [...arr]; // 스프레드 문법(...)으로 answer배열 만듬
    
    for (let i=0; i<queries.length; i++) {
        let a = answer[queries[i][0]]; // queries의 인덱스1, 인덱스2 원소를 교환시킴
        answer[queries[i][0]] = answer[queries[i][1]];
        answer[queries[i][1]] = a;
    }
    
    return answer;
}
