'''This script is used to validate downloaded statements in EXCEL 
'''========================================================================
Call fnLogin(StrUsername,StrPassword)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Wait(3)
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000436746").Click
ExpAccountNumber = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000436746").GetROProperty("innertext")

StrFilePath = "C:\GitHub\DukhanWeb_Automation\Test Data\Downloads\Account-Details.xls"
Set objExcel = CreateObject("Excel.Application")
Set objworkbook = objExcel.workbooks.open(StrFilepath)
Set Osheet  = objworkbook.worksheets(1)

StrActAccountNumber = Osheet.Range("E9").Value 

If ucase(trim(StrActAccountNumber)) = Ucase(Trim(ExpAccountNumber)) Then
	Reporter.ReportEvent micPass,"Validate account number","The account statement is matching same"
Else 
      Reporter.ReportEvent micFail,"Validate account number","The account statement is not matching same"
End If





