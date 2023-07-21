// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181849

/*
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 
각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_str) {    
    // isArray는 주어진 값이 문자열인지 확인하는 메소드
    // 문자열 num_str를 숫자 배열로 변환
    const num_arr = Array.isArray(num_str) ? num_str : num_str.split("").map(Number);

    // reduce 함수로 배열의 모든 요소를 합산
    var answer = num_arr.reduce((acc, cur) => acc + cur, 0);
        
    return answer;
}