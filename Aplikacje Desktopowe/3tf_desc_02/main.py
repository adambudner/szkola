import sys
from PySide6.QtWidgets import QApplication, QWidget, \
        QVBoxLayout, QLabel, QLineEdit, QTextEdit, QPushButton

class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setup_ui()

    def setup_ui(self):
        self.setWindowTitle("My first app")
        self.setGeometry(200, 200, 400, 300)

        layout = QVBoxLayout()
        lbl_imie = QLabel("Imię:")
        self.txt_imie = QLineEdit()
        lbl_nazwisko = QLabel("Nazwisko:")
        self.txt_nazwisko = QLineEdit()
        self.area_result = QTextEdit("tutaj rezultaty zapisu: ")
        self.area_result.setReadOnly(True)
        btn_zapisz = QPushButton("Zapisz")
        btn_zapisz.clicked.connect(self.m_zapisz)
        

        layout.addWidget(lbl_imie)
        layout.addWidget(self.txt_imie)
        layout.addWidget(lbl_nazwisko)
        layout.addWidget(self.txt_nazwisko)
        layout.addWidget(self.area_result)
        layout.addWidget(btn_zapisz)


        self.setLayout(layout)

    def m_zapisz(self):
        imie = self.txt_imie.text()
        nazwisko = self.txt_nazwisko.text()
        self.area_result.append(f"Zapisano: {imie} {nazwisko}")
        
            

if __name__ == "__main__":
    app = QApplication(sys.argv)
    main_window = MainWindow()
    main_window.show()
    sys.exit(app.exec())    