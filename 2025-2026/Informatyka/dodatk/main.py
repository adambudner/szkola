import sqlite3
import sys
class Biblioteka:
    def __init__(self, nazwa_bazy='./biblioteka.sqlite'):
        self.conn = sqlite3.connect(nazwa_bazy)
        self.cursor = self.conn.cursor()
        self._inicjalizuj_baze()
    
    def _inicjalizuj_baze(self):
        self.cursor.execute("PRAGMA foreign_keys = ON")
        self.cursor.execute('''
            create table if not exists ksiazki (
                id integer primary key autoincrement,
                tytul text not null,
                autor text not null
            )                
        ''')
        self.cursor.execute('''
            create table if not exists wypozyczenia (
                id integer primary key autoincrement,
                id_ksiazki integer not null,
                imie_klienta text not null,
                FOREIGN KEY (id_ksiazki) REFERENCES ksiazki(id)
            )              

        ''')
        self.conn.commit()
        
    def pobierz_dostepne_ksiazki(self):
        self.cursor.execute('SELECT id, tytul, autor FROM ksiazki')
        return self.cursor.fetchall()
    def pobierz_wypozyczenia(self):
        self.cursor.execute('select * from wypozyczenia')
        return self.cursor.fetchall()
    def dodaj_ksiazke(self, tytul, autor):
        self.cursor.execute('insert into ksiazki (tytul, autor) values (?, ?)', (tytul, autor))
        return "dodano ksiazke"
    def wypozycz_ksiazke(self,id_ksiazki, imie):
        self.cursor.execute('insert into wypozyczenia (id_ksiazki, imie_klienta) values (?,?)', (id_ksiazki, imie))
        return "wypozyczono"
    def zamknij_polaczenie(self):
        self.conn.close()
    


if __name__ == "__main__":
    bib = Biblioteka()
    
    while (True):
        print ("==============WYPOZYCZENIA==============")
        wypozyczenia = bib.pobierz_wypozyczenia()
        for x in wypozyczenia:
            print (wypozyczenia)
        print ("==============KSIAZKI==============")
        ksiazki = bib.pobierz_dostepne_ksiazki()
        for x in ksiazki:
            print(ksiazki)
            
        print("\n\nPodaj operacje [1:dodaj, 2:wypozycz, 3:zamknij]")
        x = input()
        if x == "1":
            bib.dodaj_ksiazke(input("tytul:"), input("autor:"))
        elif x=="2": 
            bib.wypozycz_ksiazke(input("id: "), input("imie:"))
        elif x=="3":
            bib.zamknij_polaczenie()
        
    