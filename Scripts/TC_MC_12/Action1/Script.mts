''This script is used to Update the PO BOX on Fly
''=============================================================

Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Prepaid card").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("loyalityNumber").Set "23872837" @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("address1").Set "DOHA Q" @@ script infofile_;_ZIP::ssf3.xml_;_
Wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("City*Umm Salal").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("City*Umm Salal").Select "Al Rayyan" @@ script infofile_;_ZIP::ssf5.xml_;_
wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("email").Set "rim_80197@barwabank.com" @@ script infofile_;_ZIP::ssf6.xml_;_
Wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("postalCode").Set "7" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Update").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait(5)
If Browser("Dukhan Bank").TextObject("o").Exist(10) Then
'	Browser("Dukhan Bank").TextObject("o").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
	Reporter.ReportEvent micWarning,"Update PO BOX","PO Box is not Updated"
Else 
      Reporter.ReportEvent micDone,"Update PO BOX","PO BOX Updated is updated Successfully"
End If


''After updating PO BOX on fly
''=============================================================
'Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("motherName").Set "ksjdfkjjkajksjad" @@ script infofile_;_ZIP::ssf10.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Security Question *").Click @@ script infofile_;_ZIP::ssf11.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Security Question *").Select "What is your favourite card game?" @@ script infofile_;_ZIP::ssf12.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("answerCustom").Set "card game" @@ script infofile_;_ZIP::ssf13.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Account For Fees *").Click @@ script infofile_;_ZIP::ssf14.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Saving").Click @@ script infofile_;_ZIP::ssf15.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Account For Fees *").Click @@ script infofile_;_ZIP::ssf16.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Saving200000722382").Click @@ script infofile_;_ZIP::ssf17.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf18.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf19.xml_;_
'
 @@ script infofile_;_ZIP::ssf9.xml_;_
