// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181868

/*
단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, 
my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string) {
    return my_string.split(" ").filter((word) => word !== '');
    // 공백을 기준으로 분리해서 배열로 만듬.
    // filter메소드를 이용하여 빈 문자열을 제거
    // word !== '' 조건이 현재 요소가 빈 문자열이 아닌 경우만 남기라는 의미
}
