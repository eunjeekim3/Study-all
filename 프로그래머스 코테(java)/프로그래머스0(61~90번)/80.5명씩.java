// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181886

import java.util.ArrayList;

class Solution {

    public String[] solution(String[] names) {

        ArrayList<String> list = new ArrayList();
        int idx = 1;
        for (int i = 0; i < names.length; i++) {
            if (i % 5 == 0) {
                list.add(names[i]);
            }
        }
        String[] answer = new String[list.size()];

        for (int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }
}