Call fnLogin(StrUsername,StrPassword)
wait(5)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000975475").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click @@ script infofile_;_ZIP::ssf4.xml_;_

If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBAN").Exist(8) Then
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBAN").Click
wait(4)
StrActIBANNumber = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBANnumber").GetROProperty("innertext")
print StrActIBANNumber
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Copy").Click

End If
If len(StrActIBANNumber) <>  0 Then
	Reporter.ReportEvent micPass,"IBAN number","IBANumber successfully copied and IBAN number is  "& StrActIBANNumber
	else
	Reporter.ReportEvent micFail,"IBAN number","IBANumber not copied"
End If

Call CloseAllBrowsers()
Call fnLogin(StrUsername,StrPassword)
