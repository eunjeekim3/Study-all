// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181892

/*
정수 리스트 num_list와 정수 n이 주어질 때, 
n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list, n) {
    // n이 1부터 시작하는 인덱스라고 가정하기때문에 n-1로 인덱스를 맞춤
    // slice메소드는 배열의 일부분을 추출하여 새로운 배열을 생성하는것
    return num_list.slice([n-1]);
}