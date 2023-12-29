// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

/*
배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.
*/

// 작성ing...
function getMinSum(A, B) {
  var answer = 0;
  var A_sorted = A.sort(function (a, b){ a - b });
  var B_sorted = B.sort(function (a, b) { a - b }).reverse();
  for (var i = 0; i < A.length; i++){
    var a = 0;
    a = A_sorted[i] * B_sorted[i]
    answer += a;
  }

  return answer;
}

// 다른 풀이
function solution(A,B){
  var answer = 0;
  A.sort((a,b)=> a-b);
  B.sort((a,b)=> b-a); 
  
 for (let i = 0; i < A.length; i++) {
     answer += A[i]*B[i];
 }
  return answer;
}