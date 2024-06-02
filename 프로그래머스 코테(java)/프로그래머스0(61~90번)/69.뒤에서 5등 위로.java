// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181852

import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = {};
        answer = new int[num_list.length - 5];
        Arrays.sort(num_list);

        for (int i = 0; i < num_list.length; i++) {
            if (i < num_list.length - 5) {
                answer[i] = num_list[i + 5];
            }
        }
        return answer;
    }
}