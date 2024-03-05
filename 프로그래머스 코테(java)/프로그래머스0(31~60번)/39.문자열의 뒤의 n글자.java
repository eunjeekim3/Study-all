// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181910

class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        
        answer = my_string.substring(my_string.length()-n);
        
        return answer;
    }
}