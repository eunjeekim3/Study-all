// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181942?language=java

function solution(arr) {
    return arr.join("");
}

// 자바
class Solution {
    public String solution(String[] arr) {
        String answer = "";
        
        answer = String.join("", arr);
        
        return answer;
    }
}