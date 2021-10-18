''This script is used to check whether user is able to copy the iBAN number from the application 
''============================================================================================
Call fnLogin(StrUsername,StrPassword)
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click

If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My IBAN").Exist(8) Then
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My IBAN").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Faseel").Click
wait(2)
StrActIBANNumber = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("IBANnumber").GetROProperty("innertext")
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Copy").Click
End If

If len(StrActIBANNumber) <>  0 Then
	Reporter.ReportEvent micPass,"IBAN number","IBANumber successfully copied and IBAN number is  "& StrActIBANNumber
	else
	Reporter.ReportEvent micFail,"IBAN number","IBANumber not copied"
End If


