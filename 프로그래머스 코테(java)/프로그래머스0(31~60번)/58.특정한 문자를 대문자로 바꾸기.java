// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181873

class Solution {
    public String solution(String my_string, String alp) {
        String answer = my_string.replace(alp, alp.toUpperCase());
        return answer;
    }
}