import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static int ileZer(String x){
        int sumaZer=0;
        for (int i = 0; i < x.length(); i++) {
            if (x.charAt(i) == '0') sumaZer++;
        }
        return sumaZer;
    }
    public static int ileJedynek(String x){
        int sumaJedynek=0;
        for (int i = 0; i < x.length(); i++) {
            if(x.charAt(i) == '1') sumaJedynek++;
        }
        return sumaJedynek;
    }
    public static boolean podzielne2(String x){
        return x.charAt(x.length()-1) == '0';
    }
    public static boolean podzielne8(String x){
        return x.charAt(x.length() - 1) == '0' &&
                x.charAt(x.length() - 2) == '0' &&
                x.charAt(x.length() - 3) == '0' &&
                x.charAt(x.length() - 4) == '1';
    }


    public static void main(String[] args) throws FileNotFoundException {
        File liczbyF = new File("liczby.txt");
        Scanner scanLiczby = new Scanner(liczbyF);

        String[] tabLiczby = new String[1000];
        for (int i = 0; i < tabLiczby.length; i++) {
            if(scanLiczby.hasNext()) {
                tabLiczby[i] = scanLiczby.next();
            }
            else break;
        }

//        Zad1: Ilosc liczb w ktorej znajduje sie weiecej zer niz jedynek
        int iloscZerLiczb=0;
        for (String x : tabLiczby){
            if (ileJedynek(x) < ileZer(x)) iloscZerLiczb++;
        }
        System.out.println("Ilość liczb w których jest więcej zer niż jedynek: " + iloscZerLiczb);

//        Zad2 : Podzielne przez 8 i 2
        int podzielneDwa=0;
        int podzielneOsiem=0;
        for (String x : tabLiczby){
            if(podzielne2(x)) podzielneDwa++;
            if(podzielne8(x)) podzielneOsiem++;
        }
        


    }
}
