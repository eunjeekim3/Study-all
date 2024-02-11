// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181874

/*
문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 
"A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
*/

function solution(myString) {
    var answer = [];
    const a = myString.split('') // myString을 쪼갬
    const b = a.findIndex(el=>el==='a') // a의 인덱스를 b에 할당.
    for(let i=0; i<=a.length; i++){
        answer.push(a[i]) // a배열의 요소를 answer에 추가
    }
    return answer.join('').toLowerCase().replaceAll('a','A')
}

/*
테스트 통과못한 코드
function solution(myString) {
    var answer = '';
    
    for (let i=0; i<myString.length; i++) {
        if (myString[i] === 'a') {
            answer += myString[i].toUpperCase();
        } else {
            answer += myString[i].toLowerCase();
        }
    }
    
    return answer;
}
*/