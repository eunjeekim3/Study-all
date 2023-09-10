// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181851

/*
전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 
10000 × a + 100 × b + c를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(rank, attendance) {
    let answer = [];
    for(let i=0;i<rank.length;i++){
        if(attendance[i]) answer.push(rank[i]);
    }
    answer.sort((a,b) => a - b);
    function Participant(idx){
        return rank.indexOf(answer[idx]);
    }
    return 10000 * Participant(0) + 100 * Participant(1) + Participant(2);
}

/*
다른 풀이
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
*/