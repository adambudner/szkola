import java.util.Scanner;

public class Main {
    static int findCharIndex(char[] zbior, char letter){
        for (int i = 0; i < zbior.length; i++) {
            if (zbior[i] == letter) return i;
        }
        return 0;
    }
    static String szyfrCezara(int przesuniecie, String tekst, char[] zbior){
        if (tekst == "") return "";

        String wynik = "";
        for (int i = 0; i < tekst.length(); i++) {
            int tempZbiorIndex = findCharIndex(zbior, tekst.charAt(i)) + przesuniecie;
            if (tempZbiorIndex > 0)
                wynik += zbior[tempZbiorIndex];
            else if (tempZbiorIndex < 0){
                tempZbiorIndex += 25;
                wynik+= zbior[tempZbiorIndex];
            }
        }
        return wynik;
    }

    public static void main(String[] args) {
        char[] zbior = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'};
        Scanner sc = new Scanner(System.in);

        System.out.println("Podaj tekst do zaszyfrowania: ");
        String tekst = sc.nextLine();
        System.out.println("Podaj ilosc przesunec");
        int przes = sc.nextInt();

        System.out.println("Wynik");
        System.out.println(szyfrCezara(przes, tekst, zbior));
    }
}
