// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181829

import java.util.*;

class Solution {
    public int solution(int[][] board, int k) {
        int sum = 0;

        int n = board.length;
        int m = board[0].length;

        for(int i=0;i<n;i++){

            if(i > k) break;

            for(int j=0;j<m;j++){
                if(i+j <= k) sum+=board[i][j];
                else break;
            }
        }

        return sum;
    }
}