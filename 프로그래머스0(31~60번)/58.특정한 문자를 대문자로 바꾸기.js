// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181873

/*
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 
매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, alp) {
    return my_string
        .split('')
        .map((char) => char.toLowerCase() === alp ? char.toUpperCase() : char)
        // char는 배열의 각 요소를 char로 받아서 처리함. 각 문자 char가 alp와 일치하는지 확인
        // 대소문자 구분없이 비교. 일치한다면 해당 문자를 대문자로 변환
        .join('');
}