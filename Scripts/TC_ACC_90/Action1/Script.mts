''This script is used to open time deposit account 
''============================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Deposit").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("OpenNewDeposit").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Time Deposit").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account *").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000975475").Click
'Browser("Dukhan Bank").Page("Dukhan Bank").Sync
'Browser("Dukhan Bank").Back @@ hightlight id_;_3671016_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Currency *").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Currencydropdown").Select "QAR"

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Maturity *").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Currencydropdown").Select "1-MONTH" @@ script infofile_;_ZIP::ssf18.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Maturity *").Click @@ script infofile_;_ZIP::ssf10.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Maturitydropdown").Select "1-MONTH" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set "50000" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf14.xml_;_
wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click  ''Getting error pop up  @@ script infofile_;_ZIP::ssf15.xml_;_
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").CaptureBitmap "C:\GitHub\DukhanWeb_Automation\ScreenShots\PopUp.bmp",True
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf16.xml_;_
