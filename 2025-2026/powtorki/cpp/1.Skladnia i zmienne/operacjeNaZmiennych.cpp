#include <iostream>
#include <string>

using namespace std;

int main()
{
	//czyli matma....
	// w c++ mamy takie o to znaczki
//	+ -> dodawnie
//	- -> odejmowanie
//  * -> mnozenie
//	/ -> dzielenie 
//	% -> modulo (zwraca reszte z dzielenia np. 5%2 wyrzuci nam 1 gdyz 5%2 to 2 i reszta 1

	// a wiêc:
	cout << 2+10 << endl;
	// 2+10 to 12 wiêc program w konsoli wypisze nam liczbe 12
	//tak samo robic mozesz ze wszystkimi znakami ;3
	
	// mozemy tez dodawac zmienne do sibie czyli:
	int zmienna1 = 1;
	int zmienna2 = 10;
	
	cout << zmienna1 + zmienna2 << endl;
	//albo 
	int zmienna3Wynik = zmienna1+zmienna2;
	cout << zmienna3Wynik << endl;
	
//	Mo¿emy tak te¿ robiæ z zmiennymi tekstowymi, jezeli dodamy "a"+"b" wyrzuci nam "ab"
	string zA = "a";
	string zB = "b";
	string wynik = zA+zB;
	cout << wynik << endl;
}
