''This script is used to see the statements for all the cards
''=============================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("More").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("MoreListItems").Click
'Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select "Card Statement" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Hold Transactions").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select "April 2021" @@ script infofile_;_ZIP::ssf5.xml_;_



If not Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Download").Exist(10) Then
	Reporter.ReportEvent micFail,"Find Statements","Statements was not displayed for seleted transaction type"
	Else 
	Reporter.ReportEvent micPass,"Find statements","Statements displayed for seleted transaction type"
End If
 @@ script infofile_;_ZIP::ssf6.xml_;_
Call LogOut()
Call CloseAllBrowsers()
