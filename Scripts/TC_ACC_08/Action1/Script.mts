''This script is used to get the 6 months statements in saving account
''====================================================================

Call LoginInfo(StrUsername,StrPassword)
wait(20)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Highlight
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(5) 

StrPastMonth = StrPreviousMonthDate("m",-6,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth 
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("WebButton").Exist(5) Then 
  reporter.ReportEvent micPass, "Last 6 months saving account transactions","Statements are getting displayed"
  Else 
  reporter.ReportEvent micFail, "Last 6 months saving account transactions","Statements are not found for saving accounts"
End If

 @@ script infofile_;_ZIP::ssf18.xml_;_
