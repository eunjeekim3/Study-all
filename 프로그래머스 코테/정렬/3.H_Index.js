// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

/*
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
*/

function solution(citations) {

    // 값이 큰 순서대로 정렬
    citations.sort((a, b) => b - a);

    let answers = 0;
    for (let i = 0; i < citations.length; i++) {
        // 현재 원소의 값이 현재 인덱스보다 크면 H-Index의 조건 만족
        if (i < citations[i]) {
            answers++;
        }
    }

    return answers;
}

/*
다른 풀이
function solution(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
}
*/