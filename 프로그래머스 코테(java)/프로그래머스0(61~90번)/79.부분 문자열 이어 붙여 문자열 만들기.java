// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181911

class Solution {
    public String solution(String[] my_strings, int[][] parts) {
String answer = "";
        for (int i = 0; i < my_strings.length; i++) {
            String str = my_strings[i];
            int[] array = parts[i];
            String subStr = str.substring(array[0], array[1] + 1);
            answer += subStr;
        }        return answer;
    }
}