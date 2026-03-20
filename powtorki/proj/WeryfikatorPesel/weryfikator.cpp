#include <iostream>
#include <string>

using namespace std;

bool czyWzbiorze(char x, string y[], int size){
	int czyDanaCyfra=0;
	for (int i=0; i<size; i++){
		if (x == y[i]) czyDanaCyfra++;	
	} 
	if (czyDanaCyfra == size) return true;
	else return false;
}

bool sprawdzDlugosc(string pesel)
{
	string zbior[] = {"1","2","3","4","5","6","7","8","9","0"};
	
	if (pesel.length() != 11) return false; 

	
	int czyWszystkie=0;
	for (int i=0; i<pesel.length(); i++) {
		if (czyWzbiorze(pesel[i], zbior, 10)) czyWszystkie++;
	}
	
	if (czyWszystkie == pesel.length()) return true;
	else return false;
	
}



int main()
{
	string liczby;
	cin >> liczby;
	
	cout << sprawdzDlugosc(liczby);
}
