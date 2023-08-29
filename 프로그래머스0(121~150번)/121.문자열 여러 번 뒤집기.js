// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181913

/*
my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function reverseSubstring(str, n, m) {
    if (n < 0 || n >= str.length || m < n || m >= str.length) {
      return "error";
    }
    
    const reversedSubstring = str.substring(n, m + 1).split('').reverse().join('');
    return str.substring(0, n) + reversedSubstring + str.substring(m + 1);
  }
  
  function solution(my_string, queries) {
    var answer = '';
  
    for (let i = 0; i < queries.length; i++) {
      my_string = reverseSubstring(my_string, queries[i][0], queries[i][1]);
    }
  
    return my_string;
  }

/*
다른 풀이
function solution(my_string, queries) {
    let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}
*/