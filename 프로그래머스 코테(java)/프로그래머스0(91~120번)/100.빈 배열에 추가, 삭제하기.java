// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181860

import java.util.ArrayList;
import java.util.List;
class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < flag.length; i++) {
            if(flag[i]){
                for (int j = 0; j < arr[i] * 2; j++) {
                    list.add(arr[i]);
                }
            } else {
                for (int j = 0; j < arr[i]; j++) {
                    if(list.size() != 0){
                        list.remove(list.size() - 1);
                    }
                }
            }
        }
        int[] answer = new int[list.size()];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = list.get(i);
        }
        return answer;
    }
}