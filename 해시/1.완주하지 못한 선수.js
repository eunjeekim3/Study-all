/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다. 
 */

function solution(participant, completion) {
    // sort함수를 이용해서 배열을 각각 정렬
    // 이렇게 함으로써 두 배열의 순서를 일치시킴
    participant.sort();
    completion.sort();
    
    for(let i in completion){
        if(completion[i] != participant[i]){
            return participant[i];
        }
    }
    
    // -1은 participant 배열의 가장 마지막 요소의 인덱스
    // 즉, 반복문 모두 순회 후 남은 마지막 참가자가 완주하지 못한 참가자가 되는 것임
    return participant[participant.length -1];
}

/*
첫 번째 답변 : 효율성검사 테스트 탈락
function solution(participant, completion) {
    var answer = '';
    
    for (let i of participant){
        // participant 배열의 각 요소를 순회하며 반복문 실행
        if(completion.includes(i)){
            // 만약 completion에 i가 포함되어있다면
            // i가 completion 배열에서 처음 등장하는 인덱스를 찾음. indexOf함수 사용
            // completion 배열에서 idx 인덱스에 위치한 요소 제거
            let idx = completion.indexOf(i);
            completion.splice(idx, 1);
        } else {
            // completion 배열에 i가 포함되어있지 않은 경우 저장
            answer = i;
        }
    }
    
    return answer;
}
*/
*/