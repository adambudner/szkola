#include <iostream>

using namespace std;

int nwd(int a, int b){ //najwiekszy wspolny dzielnik
	while (b!=0){
		int tempB = b;
		b = a % b;
		a = tempB;
	}
	return a;
}

int nww(int a, int b){ //najmniejsza wspolna wielokrotnosc
	return (a-b)/nwd(a,b);	
}
bool czyPierwsza(int liczba){
	if(liczba<2) return false;
	for (int i=2; i<liczba; i++){
		if (liczba%i==0) return false;
	}
	return true;
}



int main(){
	cout << "nwd 5, 100:" << nwd(5,100) << endl;
	cout << "nww 100, 5:" << nww(100,5) << endl;
	for (int i=0; i<40; i++){
		cout << "Liczba " << i << " jest pierwsza : " << czyPierwsza(i)<<endl;
	}
}
