''This script is used to get the statements for more then 6 months
''========================================================================
<<<<<<< Updated upstream
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Accounts"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Accounts",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

<<<<<<< Updated upstream
For i = 7 To strRowCount

	Datatable.SetCurrentRow(i)
   	StrUsername = Datatable.Value("USERNAME",strSheet)
       Strpassword = Datatable.Value("PASSWORD",strSheet)
       StrAccountType = Datatable.value("SELECT_ACCOUNT_TYPE",strSheet)
       
	Call fnLogin(StrUsername,StrPassword)
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("AccountType").SetTOProperty "innertext",StrAccountType
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("AccountType").Click
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
	wait(5)
	
	StrPastMonth = StrPreviousMonthDate("m",-8,Date)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
	wait(5)
	
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
	  reporter.ReportEvent micPass, "Saving Account Statements","Statements displayed with selected date range"
	Else 
	  reporter.ReportEvent micFail, "Saving Account Statements","Statements not displayed with selected date range"
	End If
	
	If i = 8 Then
		Exit For 
	End If
    Call LogOut()
    
 Next  
=======

=======
>>>>>>> Stashed changes
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Highlight
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
wait(5)

StrPastMonth = StrPreviousMonthDate("m",-8,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
  reporter.ReportEvent micPass, "Saving Account Statements","Statements displayed with selected date range"
Else 
  reporter.ReportEvent micFail, "Saving Account Statements","Statements not displayed with selected date range"
End If

Call LogOut()
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
Call CloseAllBrowsers()




