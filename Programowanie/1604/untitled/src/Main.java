import java.util.Random;
import java.util.Scanner;

class Kosc{
    public static int ileKosci;

    public String[] nazwyPlikowKosci;
    public int liczbaOczek;
    public int indexGrafika;
    public boolean czyKoscDostepna;
    private Random rand = new Random();

    public void rzut(){
        if (czyKoscDostepna) {
            int los = rand.nextInt((6-1)+1);
            liczbaOczek=los;
            indexGrafika=los;
        }
    }
    public void blokujKosc(){
        czyKoscDostepna=false;
    }
    public String getInfoLiczbaOczek(){
        return switch (liczbaOczek) {
            case 0 -> "zero";
            case 1 -> "jeden";
            case 2 -> "dwa";
            case 3 -> "trzy";
            case 4 -> "cztery";
            case 5 -> "pięć";
            case 6 -> "sześć";
            default -> "brak";
        };
    }

    Kosc(int wartoscWyrzuconej){
        if(wartoscWyrzuconej < 1 || wartoscWyrzuconej > 6) {
            liczbaOczek=0;
            indexGrafika = 0;
            czyKoscDostepna=true;
        }
        else{
            liczbaOczek = wartoscWyrzuconej;
            indexGrafika = wartoscWyrzuconej;
            czyKoscDostepna = true;
        }
        ileKosci++;

        nazwyPlikowKosci = new String[]{"kosc0.png", "kosc1", "kosc2.png", "kosc3.png", "kosc4.png", "kosc5.png", "kosc6.png"};
    }
    Kosc(){
        int los = rand.nextInt((6-1)+1);
        liczbaOczek = los;
        indexGrafika = los;
        czyKoscDostepna=true;
        ileKosci++;
        nazwyPlikowKosci = new String[]{"kosc0.png", "kosc1", "kosc2.png", "kosc3.png", "kosc4.png", "kosc5.png", "kosc6.png"};
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Podaj liczbe oczek kosc1: ");
        Kosc kosc1 = new Kosc(sc.nextInt());
        Kosc kosc2 = new Kosc();

        System.out.println("Liczba utworzonych instancji : " + Kosc.ileKosci);


        System.out.println("Kosc1: " + kosc1.liczbaOczek + " : " + kosc1.getInfoLiczbaOczek() + " : " + kosc1.nazwyPlikowKosci[kosc1.indexGrafika]);
        System.out.println("Kosc2: " + kosc2.liczbaOczek + " : " + kosc2.getInfoLiczbaOczek() + " : " + kosc2.nazwyPlikowKosci[kosc2.indexGrafika]);
    }
}
