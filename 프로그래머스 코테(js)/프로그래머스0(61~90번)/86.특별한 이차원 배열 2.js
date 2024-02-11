// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181831

/*
n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, 
arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr) {
    var answer = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j]!==arr[j][i]) {

               return answer=0
            }
            else {answer=1}
        }
    }
    return answer;
}