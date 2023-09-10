// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181866

/*
문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 
사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(myString) {
    var answer = myString.split('x').filter((item)=>{
        if(item !== ''){
            return item
        }
    }).sort()
    return answer;
}

/*
다른 풀이
function solution(myString) {
    return myString.split('x').filter(a => a !== "").sort()
}
*/