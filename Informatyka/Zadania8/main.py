def dlugosc_slowa():
    slowo = input("Podaj slowo: ")
    print(f"Dlugosc podanego slowa to: {len(slowo)} znakow.\n")


def anagram():
    slowo1 = input("Podaj pierwsze slowo: ")
    slowo2 = input("Podaj drugie slowo: ")

    if len(slowo1) != len(slowo2):
        print("Podane slowa nie sa anagramami.\n")
        return

    if sorted(slowo1) == sorted(slowo2):
        print("Podane slowa sa anagramami\n")
    else:
        print("Podane slowa nie sa anagramami.\n")


def szyfr_cezara():
    tekst = input("Podaj slowo do zaszyfrowania: ")

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
        if wybor == '1':
            dlugosc_slowa()
        elif wybor == '2':
            anagram()
        elif wybor == '3':
            szyfr_cezara()
        elif wybor == '4':
            metoda_zachlanna()
        elif wybor == '5':
            rekurencyjna()
        elif wybor == '6':
            bin_to_dec()
        elif wybor == '7':
            dec_to_bin()
        elif wybor == '0':
            break 
        else:
            print("Niepoprawny wybor\n")

if __name__ == "__main__":
    main()