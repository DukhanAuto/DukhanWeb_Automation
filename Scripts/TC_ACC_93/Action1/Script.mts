''This script is used to create Profit in advance deposit account 
''===============================================================
Call fnLogin(StrUsername,StrPassword)
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Deposit").Click
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("OpenNewDeposit").Click
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Profit in advance deposit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account *").Click
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000010084").Click
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Currency *").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Currencydropdown").Select "QAR"
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Maturity *").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Currencydropdown").Select "6-MONTH"

Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set "250000"
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click    ''After that we are getting the error pop up 
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").CaptureBitmap "C:\GitHub\DukhanWeb_Automation\ScreenShots\PopUp.bmp",True
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click





