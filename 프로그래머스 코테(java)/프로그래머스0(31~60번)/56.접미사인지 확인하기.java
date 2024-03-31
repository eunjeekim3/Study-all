// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181908

class Solution {
    public int solution(String my_string, String is_suffix) {
        int answer = 0;
        for (int i = 0; i < my_string.length(); i++) {
            if (is_suffix.equals(my_string.substring(i))) {
                answer = 1;
                break;
            }
        }
        return answer;
    }
}