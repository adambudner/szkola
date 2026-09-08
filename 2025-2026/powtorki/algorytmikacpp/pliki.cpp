#include <fstream>
#include <iostream>
#include <string>

using namespace std;

int main(){
	ofstream inFile("wynik.txt");
	
	string a = "aaa";
	
	inFile << a;
	inFile.close();
	
	ifstream outFile("wynik.txt");
	while(!outFile.eof()){
		cout << outFile << endl;
	}
}
