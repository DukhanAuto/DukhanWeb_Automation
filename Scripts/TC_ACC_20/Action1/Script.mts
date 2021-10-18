''This script is used to copy the IBAN number 
''===========================================
Call fnLogin(StrUsername,StrPassword)
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Setting.Webpackage("ReplayType") =2
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000153087").Click  'need to change the current @@ script infofile_;_ZIP::ssf2.xml_;_
Setting.Webpackage("ReplayType") = 1
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBANActionControl").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(5)
If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBANnumber").Exist(8) Then
StrActIBANNumber = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBANnumber").GetROProperty("innertext")
Setting.Webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Copy").Click
Setting.Webpackage("ReplayType") = 1
 
End If
If len(StrActIBANNumber) <>  0 Then
	Reporter.ReportEvent micPass,"IBAN number","IBANumber successfully copied and IBAN number is  "& StrActIBANNumber
	Else 
	Reporter.ReportEvent micFail,"IBAN number","IBANumber not copied"
End If

Call LogOut()
Call CloseAllBrowsers()


