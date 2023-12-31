// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

/*
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 
return 하도록 solution 함수를 완성해주세요.
*/

// 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1)
  {
      var cnt = 0
      for(var i in [...s]){
          if (s[i] == "1"){
              cnt++
          } else {
              answer[1]+=1
          }
      }
      answer[0]+=1
      s = cnt.toString(2);
  }
  return answer;
}

/*
다른 풀이
function solution(s) {
  let answer = [0, 0];
  let sLen = 0;

  while (s.length > 1) {
    sLen = s.length;
    s = s.split("0").join("");
    answer[0]++;
    answer[1] += (sLen - s.length);
    s = s.length.toString(2);
  }

  return answer;
}
*/