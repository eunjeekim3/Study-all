// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181902

/*
my_string에서 'A-Z,a-z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string) {
    var answer = [];
    let word= [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];    
    let arr = Array(52).fill(0);
    for(let i=0; i<my_string.length; i++){
        let a = (word.indexOf(my_string[i]))
        arr[a]++
        answer=arr
    }
    return answer;
}

/*
다른 풀이
function solution(my_string) {
    var answer = [];
    for(var i = 0; i < 52; i++) {
        answer[i] = 0;
    }
    for(s of my_string) {
        i = s.charCodeAt(0);
        if(i <= 90) {
            i = i - 65;
        } else {
            i = i - 97 + 26;
        }
        answer[i] = answer[i] + 1;
    }
    return answer;
}
*/