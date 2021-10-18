''This Script is used to download the Exceptional saving account transaction statement(All)  in pdf
''===========================================================================================
Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf54.xml_;_
wait(5) @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf33.xml_;_
wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Exceptional Savings").Click @@ script infofile_;_ZIP::ssf34.xml_;_
wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ALL").Click @@ script infofile_;_ZIP::ssf35.xml_;_
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Recent Transactions").Click @@ script infofile_;_ZIP::ssf36.xml_;_
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
If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) Then
   Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click
   Reporter.ReportEvent micPass,"Select PDF button in confirmation pop up","Statements downloaded in PDF file format"
   Else 
   Reporter.ReportEvent micFail,"Select PDF button in confirmation pop up","Confirmation pop up was not found"
End If
wait(5)
Call SaveDownloadfile(StrFilepath)   ''Need to update Account-Details (4) number is keep increasing while downloading
wait(2)

Call fnFindFile("Account-Details (4)",".pdf")

Call LogOut()
Call CloseAllBrowsers()



