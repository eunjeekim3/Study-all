import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int N = 0, M = 0;

        int tot = 0; // 라인 총 개수 저장

        N = scan.nextInt(); // 세로크기
        M = scan.nextInt(); // 가로크기

        char[][] block = new char[N][M]; // N X M 크기 2차원 배열

        for (int i = 0; i < N; ++i) { // 블록 구성 입력받아 배열에 저장
            String temp = scan.next();
            for (int j = 0; j < M; ++j) {

                block[i][j] = temp.charAt(j);

            }
        }

        for (int i = 0; i < N; ++i) { // 블록 배열을 순회하며 라인 개수를 셈
            for (int j = 0; j < M; ++j) {
                if (block[i][j] == '-') { // -를 만나면 오른쪽이 비거나 ㅣ일때 라인 증가
                    if (j == M - 1 || block[i][j + 1] == '|') {
                        tot++;
                    }
                }
                if (block[i][j] == '|') { // ㅣ를 만나면 아래쪽이 비어있거나 -를 만날때 라인 증가
                    if (i == N - 1 || block[i + 1][j] == '-') {
                        tot++;
                    }
                }
            }
        }
        System.out.println(tot);

        scan.close();
    }

}