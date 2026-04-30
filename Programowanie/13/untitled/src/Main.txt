import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static boolean czyParzystaDlugosc(String x){
        return x.length()%2==0;
    }
    public static int ileZnakow(String x, char znak){
        int znaki=0;
        for (int i = 0; i < x.length(); i++) {
            if (x.charAt(i) == znak) znaki++;
        }
        return znaki;
    }
    public static int iloscSameZnakow(String[] x, char znak){
        int ilosc=0;
        for (int i = 0; i < x.length; i++) {
            int iloscJednostkowa=0;
            for (int j = 0; j < x[i].length(); j++) {
                if (x[i].charAt(j) == znak) iloscJednostkowa++;
            }
            if (iloscJednostkowa == x[i].length()) ilosc++;
        }
        return ilosc;
    }
    public static void main(String[] args) throws IOException {
        File file = new File("./napisy.txt");
        Scanner scFile = new Scanner(file);
        FileWriter fw = new FileWriter(file);

        String[] tab = new String[1000];
        for (int i = 0; i < 1000; i++) {
            tab[i] = scFile.nextLine();
        }

        for (int i = 0; i < tab.length; i++) {
            if (czyParzystaDlugosc(tab[i])) {
                System.out.println("a) " + tab[i] + "jest parzyste");
                fw.write("a) " + tab[i] + "jest parzyste");
            }
        }
        for (int i = 0; i < tab.length; i++) {
            if (ileZnakow(tab[i], '0') == ileZnakow(tab[i], '1')) {
                System.out.println("b) " + tab[i] + " jedynek i zer jest: " + ileZnakow(tab[i], '1'));
                fw.write("b) " + tab[i] + " jedynek i zer jest: " + ileZnakow(tab[i], '1'));
            }
        }
        for (int i = 0; i < tab.length; i++) {
            System.out.println("Ilość napisów z samych zer: " + iloscSameZnakow(tab, '0'));
            System.out.println("Ilość napisów z samych jedynek: " + iloscSameZnakow(tab, '1'));
            fw.write("Ilość napisów z samych zer: " + iloscSameZnakow(tab, '0'));
            fw.write("Ilość napisów z samych zer: " + iloscSameZnakow(tab, '0'));
        }
        for (int i = 2; i <= 16; i++) {
            int ilosc=0;
            for (int j = 0; j < tab.length; j++) {
                if(tab[i].length() == i) ilosc++;
            }
            System.out.println("Ilosc napisów o dlugości " + i + " : " + ilosc);
            fw.write("Ilosc napisów o dlugości " + i + " : " + ilosc);
        }
    }
}
