// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181890

/*
오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(str_list) {
    var answer = [];
    
    for (let i=0; i<str_list.length; i++) {
        if (str_list[i] === 'l') {
            answer = str_list.slice(0, i);
            break;
        } else if (str_list[i] === 'r') {
            answer = str_list.slice(i + 1);
            break;
        } else if (str_list[i] !== 'l' && str_list[i] !== 'r') {
            answer = []
        }
        
    }
    
    return answer;
}

/*
다른 풀이
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}
*/