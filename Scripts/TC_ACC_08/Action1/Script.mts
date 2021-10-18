''This script is used to get the 6 months statements in saving account
''====================================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Accounts"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Accounts",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

<<<<<<< Updated upstream
=======
Call fnLogin(StrUsername,StrPassword)
wait(20)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Highlight
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(5)
>>>>>>> Stashed changes

For i = 6 To strRowCount
	Datatable.SetCurrentRow(i)
   	StrUsername = Datatable.Value("USERNAME",strSheet)
       Strpassword = Datatable.Value("PASSWORD",strSheet)
       StrAccountType = Datatable.value("SELECT_ACCOUNT_TYPE",strSheet)

	Call fnLogin(StrUsername,StrPassword)
	wait(20)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf2.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("AccountType").SetTOProperty "innertext",StrAccountType
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("AccountType").Click
'	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click
	'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Highlight
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	wait(5) 
	
	StrPastMonth = StrPreviousMonthDate("m",-6,Date)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth 
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
	wait(5)
	
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
	  reporter.ReportEvent micPass, "Saving Account Statements","Statements displayed with selected date range"
	  Else 
	  reporter.ReportEvent micFail, "Saving Account Statements","Statements not displayed with selected date range"
	End If
	
	If i = 6 Then
		Exit for 
	End If
	
	wait(3)
	Call LogOut()

Next

Call CloseAllBrowsers() @@ script infofile_;_ZIP::ssf18.xml_;_

<<<<<<< Updated upstream

=======
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
  reporter.ReportEvent micPass, "Saving Account Statements","Statements displayed with selected date range"
  Else 
  reporter.ReportEvent micFail, "Saving Account Statements","Statements not displayed with selected date range"
End If

Call LogOut()
Call CloseAllBrowsers() @@ script infofile_;_ZIP::ssf18.xml_;_
>>>>>>> Stashed changes
