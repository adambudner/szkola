def menu():
    print("\n--- CO ROBIMY? ---")
    print("1. Licz znaki")
    print("2. Sprawdź anagram")
    print("3. Szyfr Cezara")
    print("4. Reszta (zachłannie)")
    print("5. Silnia (rekurencja)")
    print("6. Bin -> Dec")
    print("7. Dec -> Bin")
    print("0. Wyjdź")

while True:
    menu()
    wybor = input("\nWybierz numer: ")

    if wybor == '1':
        s = input("Daj słowo: ")
        print("Długość:", len(s))

    elif wybor == '2':
        s1 = input("Słowo 1: ")
        s2 = input("Słowo 2: ")
        print("Anagramy?" , sorted(s1.lower()) == sorted(s2.lower()))

    elif wybor == '3':
        t = input("Tekst do szyfrowania: ")
        k = int(input("Klucz (liczba): "))
        wynik = ""
        for litera in t:
            if litera.isalpha():
                kod = ord(litera) + k
                if litera.isupper():
                    if kod > ord('Z'): kod -= 26
                else:
                    if kod > ord('z'): kod -= 26
                wynik += chr(kod)
            else:
                wynik += litera
        print("Zaszyfrowane:", wynik)

    elif wybor == '4':
        kasa = int(input("Ile reszty do wydania? "))
        nominaly = [200, 100, 50, 20, 10, 5, 2, 1]
        print("Wydaję:")
        for n in nominaly:
            if kasa >= n:
                print(f"{n} zł x {kasa // n}")
                kasa %= n

    elif wybor == '5':
        def silnia(n):
            return 1 if n <= 1 else n * silnia(n - 1)
        liczba = int(input("Z czego silnia? "))
        print("Wynik:", silnia(liczba))

    elif wybor == '6':
        b = input("Podaj binarnie: ")
        print("Dziesiętnie:", int(b, 2))

    elif wybor == '7':
        d = int(input("Podaj dziesiętnie: "))
        print("Binarnie:", bin(d)[2:])

    elif wybor == '0':
        print("Nara!")
        break
    
    else:
        print("Nie ma takiej opcji, spróbuj jeszcze raz.")