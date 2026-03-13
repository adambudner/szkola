#include <iostream>

using namespace std;

int main(){
//	Pêtle s³u¿¹ nam do powta¿ania czynnosci, wybrana ilosc razy b¹dz do momentu wykoania jakiegos warunku 
// PÊTLA WHILE 
// sk³adnia:
/*
	while (warunek){ 
		operacja do wykonania
	}
	// np warunek true bêdzie wykonywa³ sie w nieskoñczonosc gdyz jest prawda, a petla wykonuje sie dopoki warunek jest prawdziwy 
*/ 
// PÊTLA FOR
// sk³adnia:
/*
	for (zmienna warunku; warunek; wykonanie operacji na zmiennej po cyklu egzekucji pêtli){
		operacja do wykonania
	}	
	
	przyk³ad który bedziesz prawie zawsze u¿ywaæ
	for (int i=0; i<5; i++){
		cout << i << endl;
	}
	pêtla wykona siê a¿ i nie bêdzie równe 5 co oznacza ze wypisze nam:
	0 -> i=0
	1 -> i=1
	2 -> i=2
	3 -> i=3
	4 -> i=4
	gdy i bêdzie równe 5 pêtla koñczy swe dzia³anie i nie wykonuje bloku operacyjnego
	pêtla wykonywaæ bêdzie sie dopoki i jest mniejsze od 5 (i<5)
	
*/
// PÊTLA DO-WHILE
// sk³adnia:


// Przyk³ad dzialania pêtli for (u¿ywamy gdy znamy iloœc wykonañ ale równie¿ w warunku mo¿emy dac inna zmienna aby wykonywala sie dooki i bedzie jakies w stosunku do tej zmiennej (i<zmienna)
	for (int i=0; i<5; i++){
		cout << "i jest rowne: " << i << endl;
	}
	
// Przyk³ad dzia³ania pêtli while
	int zmienna = 0;
	while (zmienna < 5){
		cout << "zmienna jest rowna: " << zmienna << endl;
		zmienna++; // to jest to samo co zmienna = zmienna + 1;
	}
	
// Przyk³ad dzia³ania pêtli do-while

// PRZERWANIA PÊTLI:
/*
	gdy w ciele pêtli damy:
	continue -> pêtla zakoñczy cykl i zacznie nastêpny
	break -> pêtla zakoñczy wszystkie cykle i zakoñczy swoje dzia³anie
	np. 
	while (true){
		cout << "pierwszy cykl";
		break; // zakoñczy to dzia³anie odrazu po wykonaniu pierwszego cyklu
	}
	


*/



	
	// gdy za zmienna damy ++ doda nam to wartosc 1 do juz posiadanej przez zmienna wartosci
	// gdy damy -- odejmnie 1
	
	cout << "--------------------------------------------------\n";
//	Przyk³adowy program for:
	int iloscWykonan=0;
	cout << "Podaj ile razy ma wykonac sie zmienna:";
	cin >> iloscWykonan;
	for (int i=0; i<iloscWykonan; i++){
		cout << "Cykl: " << i << endl;
	}
	
// Przyk³adowy program while

	int cyfra = 0;
	cout << "Podaj do jakiej cyfry ma wykonywaæ siê program: ";
	cin >> cyfra;
	int zmienna2=0;
	while(zmienna2 != cyfra){
		cout << zmienna2 << " nie jest rowna " << cyfra << endl;
		zmienna2++;
	}
	cout << zmienna2 << " jest rowna liczbie " << cyfra << endl;



	
	
}
