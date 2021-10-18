''This script is used to Pay Using Pay Action control
''============================================================
<<<<<<< Updated upstream
StrDataSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet StrDataSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

For j = 2 To strRowCount-1

	Datatable.SetCurrentRow(j)
	
	StrUserName = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
	StrAccountType = Datatable.Value("SELECT_ACCOUNT_TYPE",strSheet)
	StrAmount = Datatable.Value("AMOUNT",strSheet)

	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf15.xml_;_
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf16.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay").Click @@ script infofile_;_ZIP::ssf17.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Selected Account").Click @@ script infofile_;_ZIP::ssf18.xml_;_
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectAccountType").SetTOProperty "innertext",StrAccountType
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectAccountType").Click @@ script infofile_;_ZIP::ssf19.xml_;_
	setting.webpackage("ReplayType") = 1
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("convertedAmount").Set StrAmount @@ script infofile_;_ZIP::ssf20.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay_2").Click @@ script infofile_;_ZIP::ssf21.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf22.xml_;_
	wait(5)
	'    Browser("Dukhan Bank").TextObject("Success").Click
	If Browser("Dukhan Bank").TextObject("Success").Exist(10) Then
	    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		Reporter.ReportEvent micPass,"Pay Action control","Amount is paid to seleted card successfully"
	Else 
	     Reporter.ReportEvent micFail,"Pay Action control","Amount is not paid to seleted card"
	End If
	If not Browser("Dukhan Bank").TextObject("Success").Exist(10) Then
	       Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		Reporter.ReportEvent micFail,"Pay Action control","Amount is not paid to seleted card"
	End If @@ script infofile_;_ZIP::ssf23.xml_;_
	'Browser("Dukhan Bank").TextObject("■ INFINITE VIP CREDIT").Click
	If j = 3 Then
		Exit For 
	End If
	
	Wait(10)
	Call LogOut() @@ script infofile_;_ZIP::ssf11.xml_;_

Next  

=======

Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf15.xml_;_
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf16.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay").Click @@ script infofile_;_ZIP::ssf17.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Selected Account").Click @@ script infofile_;_ZIP::ssf18.xml_;_
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Exceptional Savings20000040845").Click @@ script infofile_;_ZIP::ssf19.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("convertedAmount").Set "100" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay_2").Click @@ script infofile_;_ZIP::ssf21.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf22.xml_;_
wait(10)
'    Browser("Dukhan Bank").TextObject("Success").Click
If Browser("Dukhan Bank").TextObject("Success").Exist(10) Then
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
	Reporter.ReportEvent micPass,"Pay Action control","Amount is paid to seleted card successfully"
Else 
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
     Reporter.ReportEvent micFail,"Pay Action control","Amount is not paid to seleted card"
End If
 @@ script infofile_;_ZIP::ssf23.xml_;_
'Browser("Dukhan Bank").TextObject("■ INFINITE VIP CREDIT").Click
Wait(10)
Call LogOut() @@ script infofile_;_ZIP::ssf11.xml_;_
>>>>>>> Stashed changes
Call CloseAllBrowsers()
