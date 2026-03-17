def dlugosc(tekst):
    return len(str(tekst))
def anagram(slowo1,slowo2):
    return slowo1.lower().replace(" ","") == slowo2.lower().replace(" ","")
def szyfr_cezara(tekst, klucz):
    zaszyfrowany = ""
def zachlanny(reszta, nominały):
    wydane = []
    for nominał in sorted(nominały, reverse=True):
        while reszta >= nominał:
            wydane.append(nominał)
            reszta -= nominał
    return wydane


def main():
    print("Wybierz program do uruchomienia:")
    print('''
    1 : Program do zliczania dlugosci slowa
    2 : Sprawdzanie czy 2 podane slowa sa anagramami
    3 : Funkcje szyfrujaca za pomoca szfru cezara
    4 : funkcje uzywajaca metody zachlanej ->np wydawanie reszty
    5 : funkcje  uzywajaca rekurencji
    6 : bin-dec
    7 : dec-bin
    ''')
    while True:
        wybor = input("Wybierz program (1-7): ")
        match (wybor):
            case 0: 
                exit()
            case 1:
                wynik = dlugosc(str())
                print(wynik)
            case 2:
                wynik = anagram(str(input("Podaj słowo1: ")), str(input("Podaj słowo2:")))
            case 3:
                wynik = szyfr_cezara(str(input("Podaj tekst do zaszyfrowania")))


if __name__ == "__main__":
    main()