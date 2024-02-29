// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181907

class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        String[] str = my_string.split("");
        for (int i = 0; i < n; i++) {
            answer += str[i];
        }
        return answer;
    }
}