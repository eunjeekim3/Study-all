// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181869

class Solution {
    public String[] solution(String my_string) {
        String[] words = my_string.split(" ");
        String[] answer = new String[words.length];
        
        for (int i = 0; i < words.length; i++) {
            answer[i] = words[i];
        }
        
        return answer;
    }
}