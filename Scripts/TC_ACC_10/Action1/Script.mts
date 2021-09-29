''This script is used to get the last month statements for saving account 
''=====================================================================================
Call LoginInfo(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Highlight
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
wait(5)

StrPastMonth = StrPreviousMonthDate("m",-1,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth 
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date  
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("WebButton").Exist(5) Then 
  reporter.ReportEvent micPass, "Last 6 months saving account transactions","Statements are getting displayed"
  Else 
  reporter.ReportEvent micFail, "Last 6 months saving account transactions","Statements are not found for saving accounts"
End If

