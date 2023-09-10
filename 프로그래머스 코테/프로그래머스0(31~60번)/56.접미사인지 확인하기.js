// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181908

/*
문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 
아니면 0을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, is_suffix) {
    //     var answer = 0;
        
    //     if (my_string.endsWith(is_suffix)) {
    //         answer = 1;
    //     }    
        
    //     return answer;
        return my_string.endsWith(is_suffix) ? 1 : 0;
    }