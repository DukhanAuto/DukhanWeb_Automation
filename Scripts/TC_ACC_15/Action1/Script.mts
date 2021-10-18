''This script is used to download the saving account statements for all the transactions 
''====================================================================================
<<<<<<< Updated upstream
<<<<<<< Updated upstream
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Accounts"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Accounts",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

For i = 7 To strRowCount

	Datatable.SetCurrentRow(i)
   	StrUsername = Datatable.Value("USERNAME",strSheet)
       Strpassword = Datatable.Value("PASSWORD",strSheet)
       StrAccountType = Datatable.value("SELECT_ACCOUNT_TYPE",strSheet)
       
	Call fnLogin(StrUsername,StrPassword)
	wait(10)
	
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("AccountType").SetTOProperty"innertext",StrAccountType
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("AccountType").Click
'	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
	wait(5)
	
	StrPastMonth = StrPreviousMonthDate("m",-5,Date)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
	wait(5)
	
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
	    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
	  Reporter.ReportEvent micPass,"Click Download option","Confirmation Pop Up displayed with PDF and EXCEL button"
	  Else 
	  Reporter.ReportEvent micFail,"Click Download option","Confirmation Pop Up was not displayed with PDF and EXCEL button"
	End If
	
	wait(5)
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) Then
	   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click @@ hightlight id_;_58_;_script infofile_;_ZIP::ssf12.xml_;_
	   Reporter.ReportEvent micPass,"Select PDF button in confirmation pop up","Statements downloaded in PDF file format"
	   Else 
	   Reporter.ReportEvent micFail,"Select PDF button in confirmation pop up","Confirmation pop up was not found"
	End If
	
	wait(5)
	Call SaveDownloadfile(StrFilepath)
	
	wait(2)
	Call fnFindFile("Account-Details",".pdf")
	
	If i = 8 Then
	 Exit For 	
	End If
	
	Call LogOut()
	
Next 

Call CloseAllBrowsers()

setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").InsightObject("ClearDownloads").Click 20,30
setting.webpackage("ReplayType") = 1
Browser("Dukhan Bank").InsightObject("ClearDownloads").Highlight
=======
=======
>>>>>>> Stashed changes

Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
wait(5)

StrPastMonth = StrPreviousMonthDate("m",-5,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
  Reporter.ReportEvent micPass,"Click Download option","Confirmation Pop Up displayed with PDF and EXCEL button"
  Else 
  Reporter.ReportEvent micFail,"Click Download option","Confirmation Pop Up was not displayed with PDF and EXCEL button"
End If
wait(5)
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click
   Reporter.ReportEvent micPass,"Select PDF button in confirmation pop up","Statements downloaded in PDF file format"
   Else 
   Reporter.ReportEvent micFail,"Select PDF button in confirmation pop up","Confirmation pop up was not found"
End If
wait(5)
Call SaveDownloadfile(StrFilepath)
wait(2)

Call fnFindFile("Account-Details",".pdf")

Call LogOut()
Call CloseAllBrowsers()





	


<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
