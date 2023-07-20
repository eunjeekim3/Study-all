// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181910

/*
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, n) {
    var answer = my_string.slice(my_string.length-n, my_string.length);
    // my_string의 start인덱스부터 end인덱스까지 문자열 추출.
    // 따라서 my_string의 끝에서부터 n번째까지 문자열 추출
    return answer;
}
