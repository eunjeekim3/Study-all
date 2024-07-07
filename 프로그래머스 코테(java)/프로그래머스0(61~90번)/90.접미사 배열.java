// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181909

import java.util.Arrays;

class Solution {

    public String[] solution(String my_string) {
        String[] answer = new String[my_string.length()];

        for (int i = 0; i < answer.length; i++) {
            answer[i] = my_string.substring(i, my_string.length());
        }

        Arrays.sort(answer);
        return answer;
    }
}