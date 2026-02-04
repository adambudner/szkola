import requests
import os
from time import sleep, strftime
from datetime import datetime

def cls(): 
    os.system("cls")

def kurs(sek):
    url = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json"

    waluty = ["USD", "EUR", "GBP"]

    while (True):
        try:
            cls()
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()[0]
                dataTabeli = data['effectiveDate']
                numerTabeli = data['no']
                wszystkieKursy = data['rates']

                print("Tabela nr: " + numerTabeli + " z dnia: " + dataTabeli)
                print("Uaktualniono: " + strftime("%H:%M:%S"))
                for kurs in wszystkieKursy:
                    if kurs['code'] in waluty:
                        print(f"{kurs['code']}: {kurs['mid']} PLN")
            else:
                print("blad api")

        except Exception as e:
            print("blad: " + str(e))

        sleep(sek)

if __name__ == "__main__":
    kurs(5)