''This Script is used to download the Exceptional saving account transaction statement(All)  in pdf
''===========================================================================================
Call fnLogin(StrUsername,StrPassword)
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Exceptional Savings").Click
wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ALL").Click
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
wait(6)
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
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Click
   Reporter.ReportEvent micPass,"Select EXCEL button in confirmation pop up","Statements downloaded in EXCEL file format"
   Else 
   Reporter.ReportEvent micFail,"Select EXCEL button in confirmation pop up","Confirmation pop up was not found"
End If
wait(5)
Call SaveDownloadfile(StrFilepath)   ''Need to update Account-Details (4) number is keep increasing while downloading
wait(2)

Call fnFindFile("Account-Details (2)",".xls")

Call LogOut()
Call CloseAllBrowsers()



