''This script is used to download Saving Acount statement in excel farmat 
''=======================================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000436746").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Credit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Highlight
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
wait(5)

StrPastMonth = StrPreviousMonthDate("m",-5,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
  reporter.ReportEvent micPass, "Select the Download option","Confirmation pop up displayed"
  Else 
  reporter.ReportEvent micFail, "Select the Download option","Confirmation pop up was not displayed"
End If
wait(4)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Exist(3) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Click
   Reporter.ReportEvent micPass,"Select Excel Option in confirmation pop up","Statement was downloaded in excel format"
   Else 
   Reporter.ReportEvent micFail,"Select Excel Option in confirmation pop up","Statement was not downloaded in excel format"
End If
wait(5)
Call SaveDownloadfile(StrFilepath)
wait(3)
Call fnFindFile("Account-Details",".xls")

Call LogOut()
Call CloseAllBrowsers()





