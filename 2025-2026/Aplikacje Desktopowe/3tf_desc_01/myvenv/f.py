# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'form.ui'
##
## Created by: Qt User Interface Compiler version 6.10.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QFormLayout, QLabel, QLineEdit,
    QMainWindow, QMenuBar, QPushButton, QSizePolicy,
    QStatusBar, QTextEdit, QWidget)

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(800, 600)
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        self.formLayoutWidget = QWidget(self.centralwidget)
        self.formLayoutWidget.setObjectName(u"formLayoutWidget")
        self.formLayoutWidget.setGeometry(QRect(190, 50, 391, 331))
        self.formLayout = QFormLayout(self.formLayoutWidget)
        self.formLayout.setObjectName(u"formLayout")
        self.formLayout.setContentsMargins(0, 0, 0, 0)
        self.label_imie = QLabel(self.formLayoutWidget)
        self.label_imie.setObjectName(u"label_imie")

        self.formLayout.setWidget(0, QFormLayout.ItemRole.LabelRole, self.label_imie)

        self.lineEdit_imie = QLineEdit(self.formLayoutWidget)
        self.lineEdit_imie.setObjectName(u"lineEdit_imie")

        self.formLayout.setWidget(0, QFormLayout.ItemRole.FieldRole, self.lineEdit_imie)

        self.label_nazwisko = QLabel(self.formLayoutWidget)
        self.label_nazwisko.setObjectName(u"label_nazwisko")

        self.formLayout.setWidget(1, QFormLayout.ItemRole.LabelRole, self.label_nazwisko)

        self.lineEdit_nazwisko = QLineEdit(self.formLayoutWidget)
        self.lineEdit_nazwisko.setObjectName(u"lineEdit_nazwisko")

        self.formLayout.setWidget(1, QFormLayout.ItemRole.FieldRole, self.lineEdit_nazwisko)

        self.textEdit_wynik = QTextEdit(self.formLayoutWidget)
        self.textEdit_wynik.setObjectName(u"textEdit_wynik")

        self.formLayout.setWidget(2, QFormLayout.ItemRole.FieldRole, self.textEdit_wynik)

        self.pushButton_zapisz = QPushButton(self.formLayoutWidget)
        self.pushButton_zapisz.setObjectName(u"pushButton_zapisz")

        self.formLayout.setWidget(3, QFormLayout.ItemRole.FieldRole, self.pushButton_zapisz)

        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(MainWindow)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 800, 33))
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QStatusBar(MainWindow)
        self.statusbar.setObjectName(u"statusbar")
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)

        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"MainWindow", None))
        self.label_imie.setText(QCoreApplication.translate("MainWindow", u"Imi\u0119:", None))
        self.label_nazwisko.setText(QCoreApplication.translate("MainWindow", u"Nazwisko", None))
        self.pushButton_zapisz.setText(QCoreApplication.translate("MainWindow", u"Zapisz", None))
    # retranslateUi

