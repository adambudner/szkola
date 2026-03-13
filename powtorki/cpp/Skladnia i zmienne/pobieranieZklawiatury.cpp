#include <iostream>
#include <string>

using namespace std;

int main()
{
	// aby pobraæ z klawiatruy musimy u¿yæ cin
	string pobraneDane = "";
	cin >> pobraneDane; // tym razem obrocilismy strza³ki w drug¹ strone gdy¿ do cin zabiera inforamcje i wpiepsza je do zmiennej, a nie pobiera ze zmiennej 
	cout << pobraneDane << endl;
	
	// info jest przechowane w wybranej zmiennej
	// mozemy tak tez robic z int
	int pobraneDane2;
	cin >> pobraneDane2;
	cout << pobraneDane2 << endl;
}
