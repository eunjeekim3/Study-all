// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181853

/*
정수로 이루어진 리스트 num_list가 주어집니다. 
num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    //return num_list.sort((a,b) => a-b).slice(5) 이건 5부터 끝까지
    return num_list.sort((a,b) => a-b).slice(0, 5) // 이건 0부터 인덱스 4까지
}
