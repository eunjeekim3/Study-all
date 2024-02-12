// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181940?language=java

class Solution {
    public String solution(String my_string, int k) {
        String answer = "";

        for (int i = 0; i < k; i++) {
            answer = answer + my_string;
            // return my_string.repeat(k); 이렇게도 함...
        }

        return answer;
    }
}