public class Main {
    public static void wypelnijSitem(boolean[] A){
        int n = A.length -1;

        for (int i=2; i<=n; i++){
            A[i] = true;
        }
        for (int i = 2; i < Math.sqrt(n); i++) {
            if(A[i]){
                for(int j=2*i; j<=n; j+= i){
                    A[j] = false;
                }
            }
        }
    }
    public static void main(String[] args) {
        int n=100;
        boolean[] tablica = new boolean[n+1];
        wypelnijSitem(tablica);
        System.out.println("Znalezione liczby pierwsze w przedziale 2 " + n + ":");
        boolean czyPierwszaW = true;
        for (int i = 2; i <=n; i++) {
            if (tablica[i]){
                if(!czyPierwszaW){
                    System.out.print(", ");
                }
                System.out.print(i);
            }
            czyPierwszaW = false;
        }
        System.out.println();
    }
}
