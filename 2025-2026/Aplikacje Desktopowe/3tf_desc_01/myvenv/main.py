import sys
from PySide6.QtWidgets import QApplication, QWidget, QVBoxLayout, QBoxLayout, QLabel, QLineEdit, QPushButton

class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setup_ui()

    def setup_ui(self):
        self.setWindowTitle("Moje okno")
        self.resize(400, 300)
        layout = QVBoxLayout()

        label_imie = QLabel("Imie:")
        label_nazwisko = QLabel("Nazwisko:")
        input_imie = QLineEdit()
        input_nazwisko = QLineEdit()

        button_submit = QPushButton("Zapisz")

        layout.addWidget(label_imie)
        layout.addWidget(input_imie)
        layout.addWidget(label_nazwisko)
        layout.addWidget(input_nazwisko)
        layout.addWidget(button_submit)


        self.setLayout(layout)



if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())

