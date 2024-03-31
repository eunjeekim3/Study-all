// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

class Solution {
    public int[] solution(int start, int end) {
        int[] answer = new int[end - start + 1];

        for (int i = 0; i <= end - start; i++) {
            answer[i] = i + start;
        }
        return answer;
    }
}