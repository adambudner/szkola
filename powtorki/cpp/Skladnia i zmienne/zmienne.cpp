#include <iostream>
#include <string> // biblioteka przywo³uj¹ca klase/typ string

using namespace std;

int main()
{
//	ZMIENNE ZNAKOWE
	string zmiennaCiaguZnakow = "abcdefg"; // przechowuje ci¹g znaków, ciag znakow w zmiennej string zapisujemy w cudzys³owiach ""
	char zmiennaZnakowa = 'a'; // przechowuje pojedyñczy znak np. '1', 'a'. zapisujemy j¹ poprzez apostrofy ''
	
//	ZMIENNE LICZBOWE
	int zmiennaLiczbowa = 1; //przechowuje liczby ca³kowite, dok³adniej 32bity 
	
//	TYCH RACZEJ NIE MUSISZ PAMIETAÆ (
	short zmiennaLiczbowaKrotka = 1; //przechowuje rowniez liczby calkowite,
	// lecz posiada pamiec na tylko dwa bajty co daje nam zakres liczb od -32,768 do 32,767
	long zmiennaLiczbowaDluga = 1; //przechowuje tak samo liczby calkowite ale jej zakres jest o wiele wiekszy niz int ma rozmiar 64bitow
	long long zmiennaLiczbowaDlugaPodwojna = 1; // to samo co long ale jeszcze wiekszy rozmiar;
	
	//zmienne zmiennoprzecinkowe:
	float zmiennaZmiennoprzecinkowa1 = 0.123 // przechowuje liczbe rzeczywista, do 7 miejsc po przecinku
	double zmiennaZmiennoprzecinkowa2 = 0.123 // przechowuje liczbe rzeczywista, nawet do 15 miejsc po przecinku, zajmuje wiecej pamieci
	long double zmiennaZmiennoprzecinkowa3 = 0.123 // to samo co double ale wiekszy zakres liczb
//	)
	
//	ZIMENNA 1/0
	bool zmienna = true
	bool zmienna2 = false 
	// typ bool mo¿e przechowywac dwie warotsci, albo true albo false. czyli 1 albo 0, wiec mozemy rowniez zapisac:
	bool zmienna = 1;
	bool zmienna2 = 0;
	// true -> 1 | false -> 0 
	//ale raczej ³atwiej czytaæ jest gdy piszemy prawda/fa³sz. 
	
//	Je¿eli nie planujemy u¿ywania liczb ujemnych (mniejszych od zera), nie musimy ale warto pamietac ze jest cos takiego jak:
	unsigned int zmienna3 = 2;
	// jezeli przed zmienna liczbowa wstawimy unsigned, zmienna nie bedzie w stanie przechowac liczb poni¿ej zera a je¿eli sprobojemy do zrobic,
	// wywali b³¹d. 
}
