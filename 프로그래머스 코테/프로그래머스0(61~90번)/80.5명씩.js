// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181886

/*
앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 
담은 리스트를 return하도록 solution 함수를 완성해주세요. 
*/

function solution(names) {
    var answer = [];
    
    for (let i=0; i<names.length; i++) {
        if (i % 5 === 0) {
            //answer = answer.push[i];
            answer.push(names[i]);
        }
    }
    
    return answer;
}