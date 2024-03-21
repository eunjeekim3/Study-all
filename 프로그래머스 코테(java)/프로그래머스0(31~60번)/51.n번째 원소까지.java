// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181889

class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = new int[n];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = num_list[i];
        }
        return answer;
    }
}