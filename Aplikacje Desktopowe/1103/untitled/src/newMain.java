import java.util.Scanner;

public class newMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        System.out.println("Podaj gorny zakres:");
        n = sc.nextInt();
        boolean[] pierwsza = new boolean[n];

        for (int i = 0; i < n; i++) {
            pierwsza[i] = true;
        }
        pierwsza[0] = false;
        pierwsza[1] = false;

        for (int i = 2; i < n; i++) {
            if (pierwsza[i]){
                for(int j= i+i; j<=n; j+=i){
                    pierwsza[j] = false;
                }
            }
        }
    }
}
