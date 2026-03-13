#include <iostream>

using namespace std;

int main()
{
/*
	Instrukcje warunkowe mozemy oznaczamy:

 OPERATORY PORÓWNANIA
 == -> czy równe?
 != -> czy nie równe?
 < -> czy mniejsze? 
 > -> czy wiêksze?
 <= -> czy mniejsze b¹dz równe?
 >= -> czy wieksze b¹dz równe?

 OPERATORY LOGICZNE
 && -> AND (oba równe np true i true albo false i false)
 || -> OR (rozne)

 INSTRUKCJE WARUNKOWE 
 sk³adnia:
	 if (warunek) {
	 		tutaj rzeczy ktore maja sie zrobic jezeli warunek zostanie spelniony
	 }
	 else if(warunek jezeli ten poprzedni nie zostanie spelniony) {
	 		miejsce na wykonanie
	 }
	 else {
			tutaj wykonane zostana czynnosci jezeli zaden warunek nie zostanie spelniony, nalezy pamietac ze "else if" mozna uzyc wiele razy
	 }
	przyk³ady:
*/
	
	int a = 3;
	int b = 4;
	
	if (a>b){
		cout << "A jest wieksze od b : " << (a>b) << endl; // a<b doda nam do konsoli inforamche true lub false w zaleznosci od prawidlowosci warunku
	}
	else if (a<b) {
		cout << "A jest mniejsze od b: " << (a<b) << endl;
	}
	
//	albo:
	if (a>2 && b<7) //Warunek bedzie prawdziwy jezeli a bedzie wieksze od 2 oraz b bedzie mniejsze od 7
	{
		cout << "warunek poprawny" << endl;
	}
	else {
		cout << "Warunek niepoprawny" << endl;
	}
	
	// bool
	bool d = true;
	bool c = true;
	
	if (d && c) {
		cout << "d i c sa true" << endl;
	}
	//mozemy tez to zapisac jako
	if (d == true && c == true){
		cout << "d i c sa true" << endl;
	}
	
	cout << "-------------------------------------------------------\n";
	
//	Przyk³ad programu
	int wiek;
	cout << "podaj swoj wiek: ";
	cin >> wiek;
	
	if (wiek >= 18){
		cout << "Jestes pelnoletni" << endl;
	}
	else {
		cout << "Jestes niepelnoletni" << endl;
	}
	 
	

}
