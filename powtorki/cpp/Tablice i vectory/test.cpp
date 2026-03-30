#include <iostream>

using namespace std;

int main(){
	int tab[10];
	for(int i=0; i<10; i++){
		tab[i] = i+1;
	}
	
	int suma=0;
	for(int i=0; i<10; i++){
		suma+= (tab[i]%4==0) ? tab[i] : 0;
	}
	cout << suma;
}
