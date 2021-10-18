''This script is used to download the statements in (All,Credit,Debit)
''======================================================================
Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf16.xml_;_
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf20.xml_;_
wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000026211").Click @@ script infofile_;_ZIP::ssf24.xml_;_
 @@ script infofile_;_ZIP::ssf2.xml_;_
''This is used to download all the statements 
''===========================================================================
wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ALL").Click @@ script infofile_;_ZIP::ssf26.xml_;_
wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click @@ script infofile_;_ZIP::ssf28.xml_;_
wait(5)
StrPastDate = StrPreviousMonthDate("m",-6,Date)
'Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Highlight
Setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastDate @@ script infofile_;_ZIP::ssf30.xml_;_
Setting.webpackage("ReplayType") = 1
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date @@ script infofile_;_ZIP::ssf32.xml_;_
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then @@ script infofile_;_ZIP::ssf33.xml_;_
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
  Reporter.ReportEvent micDone,"Click Download Option","Confirmation Pop Up displayed with PDF and EXCEL button"
Else 
  Reporter.ReportEvent micWarning,"Click Download Option","Download Options was not found"
End If
wait(6)
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Exist(5) Then @@ script infofile_;_ZIP::ssf38.xml_;_
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Click @@ script infofile_;_ZIP::ssf40.xml_;_
   Reporter.ReportEvent micDone,"Select EXCEL button in confirmation pop up","Statements downloaded in EXCEL file format"
Else 
   Reporter.ReportEvent micWarning,"Select EXCEL button in confirmation pop up","Confirmation pop up was not found"
End If
wait(5)
Call SaveDownloadfile(StrFilepath)
''This is used to download Credit statements 
''===========================================================================
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Debit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Credit").Click
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
wait(5)
StrPastMonth = StrPreviousMonthDate("m",-6,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Start Date").Set StrPastMonth
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("End Date").Set Date 
wait(5)

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Exist(5) Then 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnDownload").Click
    wait(2)
  Reporter.ReportEvent micDone,"Click Download Option","Confirmation Pop Up displayed with PDF and EXCEL button"
Else 
  Reporter.ReportEvent micWarning,"Click Download Option","Download Options was not found"
End If

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Click
   Reporter.ReportEvent micDone,"Select EXCEL button in confirmation pop up","Statements downloaded in EXCEL file format"
Else 
   Reporter.ReportEvent micWarning,"Select EXCEL button in confirmation pop up","Confirmation pop up was not found"
End If

Call SaveDownloadfile(StrFilepath)
''This is used to download Debit statements 
''===========================================================================
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Debit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click
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

If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("EXCEL").Click
   Reporter.ReportEvent micDone,"Select EXCEL button in confirmation pop up","Statements downloaded in EXCEL file format"
Else 
   Reporter.ReportEvent micWarning,"Select EXCEL button in confirmation pop up","Confirmation pop up was not found"
End If

Call SaveDownloadfile(StrFilepath)
