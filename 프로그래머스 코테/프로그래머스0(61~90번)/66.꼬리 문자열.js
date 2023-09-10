// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181841

/*
문자열들이 담긴 리스트가 주어졌을 때, 
모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다.
문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, 
str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(str_list, ex) {
    var answer = '';
    
    for(let i = 0; i < str_list.length; i++) {
        if(!str_list[i].includes(ex)) { // str_list[i]에 ex이 포함되지 않는다면
            answer += str_list[i];
        }
    }   
    
    return answer;
}

/*
다른 사람의 풀이
function solution(str_list, ex) {
    return str_list.filter(a => !a.includes(ex)).join('')
}
*/