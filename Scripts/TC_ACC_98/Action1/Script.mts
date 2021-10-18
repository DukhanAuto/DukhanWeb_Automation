''This script is used to verify loan account details 
''=======================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Finance").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Murabaha").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Contract Date").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Maturity Date").Click
wait(5)
StrFinance_Amount = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("FinanceAmount").GetROProperty("innertext") @@ script infofile_;_ZIP::ssf4.xml_;_

StrRemaining_Amount = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("RemainingAmount").GetROProperty("innertext")

If len(StrFinance_Amount) <> 0 and len(StrRemaining_Amount) <> 0 Then
Reporter.ReportEvent micPass,"Verify the details","The list of details verified "&StrFinance_Amount & vbcrlf &StrFinance_Amount
Else 
Reporter.ReportEvent micFail,"Verify the details","The list of details not matched"
End If

Call LogOut()
Call CloseAllBrowsers()
