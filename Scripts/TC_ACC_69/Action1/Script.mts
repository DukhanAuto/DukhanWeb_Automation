''This script is used to open new account ( saving account )
''=============================================================
StrDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
StrSheet="My_Accounts"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Accounts",strSheet
'StrRowCount=Datatable.GetSheet(strSheet).GetRowCount
TotalRowCount = Datatable.GetSheet(StrSheet).GetRowCount

For i = 4 To TotalRowCount

     Datatable.SetCurrentRow(i)
 	StrUserName = datatable.Value("USERNAME",strSheet)
	StrPassword = datatable.Value("PASSWORD",strSheet)
	StrOpenAccount= datatable.Value("OPEN_ACCOUNT_TYPE",strSheet)
	StrSelectDebitAccount = datatable.Value("SELECT_DEBIT_ACCOUNT_DETAILS",strSheet)
       StrCurrency = datatable.Value("CURRENCY_TYPE",strSheet)
       StrAmount = datatable.Value("AMOUNT",strSheet)

	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf53.xml_;_
	wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf54.xml_;_
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf55.xml_;_
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("OpenNewAccountPlus").Click @@ script infofile_;_ZIP::ssf56.xml_;_
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Account Type").Click @@ script infofile_;_ZIP::ssf57.xml_;_
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Account Type").Select StrOpenAccount @@ script infofile_;_ZIP::ssf58.xml_;_
	setting.webpackage("ReplayType") = 1
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("QAR").Click @@ script infofile_;_ZIP::ssf59.xml_;_
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("SelectCurrencyList").Select StrCurrency @@ script infofile_;_ZIP::ssf60.xml_;_
	setting.webpackage("ReplayType") = 1
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf61.xml_;_
	
	StrExpectedText  = "03 - 191 - You have exceeded the number of allowed accounts for this type"
	StrActualText = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ErrMessageText").GetROProperty("innertext")
	
	If Ucase(Trim(StrExpectedText)) = Ucase(Trim(StrActualText)) Then
		 Reporter.ReportEvent micFail,"Account Creation","User getting displayed with error message"
		 Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click	
	Else 

		wait(6)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account").Click @@ script infofile_;_ZIP::ssf72.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DebitAccountType").SetTOProperty "innertext", StrSelectDebitAccount
		setting.webpackage("ReplayType") = 2
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DebitAccountType").Click
		setting.webpackage("ReplayType") = 1
		wait(5) @@ hightlight id_;_788070_;_script infofile_;_ZIP::ssf64.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set StrAmount @@ script infofile_;_ZIP::ssf65.xml_;_
		wait(6)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf66.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next_2").Click @@ script infofile_;_ZIP::ssf67.xml_;_
		wait(8)
'		Browser("Dukhan Bank").Page("Dukhan Bank").Check CheckPoint("UserNotAllowedError") @@ script infofile_;_ZIP::ssf68.xml_;_
		wait(5)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf69.xml_;_
		wait(10)
	
	End If
	wait(5)
	Call LogOut() @@ script infofile_;_ZIP::ssf71.xml_;_

Next 

wait(5)
Call CloseAllBrowsers()
 @@ script infofile_;_ZIP::ssf46.xml_;_

