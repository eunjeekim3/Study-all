// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181915

/*
문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. 
my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, index_list) {
    var answer = '';
    
    for(let i of index_list){
        //my_string을 slice로 i번째에서 i+1까지 잘라서 answer에 넣어줌
        answer += my_string.slice(i, i+1);
    }

    return answer
}