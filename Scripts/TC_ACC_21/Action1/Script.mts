''This script is used to validate the IBAN pop with close button
''=================================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Setting.Webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000106924").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Setting.Webpackage("ReplayType") = 1
Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBAN").Click

'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("payment_iban").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Close").Click @@ script infofile_;_ZIP::ssf3.xml_;_

StrPropertyvalue = Browser("Dukhan Bank").Page("Dukhan Bank").Link("Home").GetROProperty("Disabled")
If StrPropertyvalue = 1 Then
	Reporter.ReportEvent micFail,"Verifying IBAN pop up","PopUp  was not closed in the application"
	Else 
	Reporter.ReportEvent micPass,"Verifying IBAN pop up","PopUp  was closed in the application"
End If
wait(2)
Call LogOut()
Call CloseAllBrowsers()
