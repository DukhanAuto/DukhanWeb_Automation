''This script is used to verifying iBAN pop up close button 
''==================================================
Call fnLogin(StrUsername,StrPassword)
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000010084").Click
Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("payment_iban").Click

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Close").Click
wait(5)
StrPropertyvalue = Browser("Dukhan Bank").Page("Dukhan Bank").Link("Home").GetROProperty("Disabled")
If StrPropertyvalue = 1 Then
	Reporter.ReportEvent micFail,"Verifying IBAN pop up","PopUp  was not closed in the application"
	Else 
	Reporter.ReportEvent micPass,"Verifying IBAN pop up","PopUp  was closed in the application"
End If

Call LogOut()
Call CloseAllBrowsers()


