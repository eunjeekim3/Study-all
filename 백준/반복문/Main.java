/*
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제(근데 우측정렬)
 */

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;
import java.io.IOException;
 
 public class Main {
 
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(br.readLine());

        br.close();

        for(int i=1; i<number; i++) {
            for(int j=1; j<=number-i ; j++) {
                System.out.print(" ");
            }
            for(int k=0; k<=i; k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
 
 