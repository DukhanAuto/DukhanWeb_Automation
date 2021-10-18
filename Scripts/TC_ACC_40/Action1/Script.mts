''This script is used to download the statements (All,Credit,Debit) in PDF format
''======================================================================
Set WshShell = CreateObject("WScript.Shell")
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000010084").Click

''This is used to download all the statements 
''===========================================================================

wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ALL").Click

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
WshShell.SendKeys "{DOWN}"
wait(5)
StrPastMonth = StrPreviousMonthDate("m",-5,Date)
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
setting.webpackage("ReplayType") = 1
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
  Reporter.ReportEvent micDone,"Click Download Option","Confirmation Pop Up displayed with PDF and EXCEL button"
Else 
  Reporter.ReportEvent micWarning,"Click Download Option","Download Options was not found"
End If
wait(2)
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click
   Reporter.ReportEvent micDone,"Select PDF button in confirmation pop up","Statements downloaded in PDF file format"
Else 
   Reporter.ReportEvent micWarning,"Select PDF button in confirmation pop up","Confirmation pop up was not found"
End If

''This is used to download Credit statements 
''===========================================================================
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Debit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Credit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
WshShell.SendKeys "{DOWN}"
wait(5)
StrPastMonth = StrPreviousMonthDate("m",-6,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
  Reporter.ReportEvent micDone,"Click Download Option","Confirmation Pop Up displayed with PDF and EXCEL button"
Else 
  Reporter.ReportEvent micWarning,"Click Download Option","Download Options was not found"
End If
wait(3)
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click
   Reporter.ReportEvent micDone,"Select PDF button in confirmation pop up","Statements downloaded in PDF file format"
Else 
   Reporter.ReportEvent micWarning,"Select PDF button in confirmation pop up","Confirmation pop up was not found"
End If

''This is used to download Debit statements 
''===========================================================================
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Debit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
WshShell.SendKeys "{DOWN}"
wait(5)
StrPastMonth = StrPreviousMonthDate("m",-6,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
  Reporter.ReportEvent micDone,"Click Download Option","Confirmation Pop Up displayed with PDF and EXCEL button"
Else 
  Reporter.ReportEvent micWarning,"Click Download Option","Download Options was not found"
End If
wait(2)
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click
   Reporter.ReportEvent micDone,"Select PDF button in confirmation pop up","Statements downloaded in PDF file format"
Else 
   Reporter.ReportEvent micWarning,"Select PDF button in confirmation pop up","Confirmation pop up was not found"
End If


