// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

/*
정수 리스트 num_list가 주어집니다. 
가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째
원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 
두 값이 같을 경우 그 값을 return합니다.
*/

function solution(num_list) {
    let jjak = 0;
    let hol = 0;
    
    for (let i=0; i<num_list.length; i++) {
        if (i % 2 === 0) { // 홀수 인덱스
            jjak = jjak + num_list[i];
        } else { // 짝수 인덱스
            hol = hol + num_list[i];
        }
    }
    
    return jjak > hol ? jjak : hol;
}