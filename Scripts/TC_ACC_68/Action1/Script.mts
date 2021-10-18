''This script is used to create faseel account @@ script infofile_;_ZIP::ssf33.xml_;_
''=================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Accounts"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Accounts",strSheet
StrRowCount=Datatable.GetSheet(strSheet).GetRowCount

For i = 0 To StrRowCount-3 @@ script infofile_;_ZIP::ssf36.xml_;_

     Datatable.SetCurrentRow(i)
 	StrUserName = datatable.Value("USERNAME",strSheet)
	StrPassword = datatable.Value("PASSWORD",strSheet)
	StrOpenAccount= datatable.Value("OPEN_ACCOUNT_TYPE",strSheet)
	StrSelectDebitAccount = datatable.Value("SELECT_DEBIT_ACCOUNT_DETAILS",strSheet)
	StrAmount = datatable.Value("AMOUNT",strSheet)
	
	Call fnLogin(StrUsername,StrPassword)
	wait(8)
	
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf40.xml_;_
	wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf41.xml_;_
	wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("OpenNewAccountPlus").Click @@ script infofile_;_ZIP::ssf42.xml_;_
	wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Account Type").Click
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("AccountTypeAs").Select StrOpenAccount @@ script infofile_;_ZIP::ssf44.xml_;_
	setting.webpackage("replaytype") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("AccountTypeAs").Click
	setting.webpackage("replaytype") = 1
	Wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf45.xml_;_
	wait(5)
	StrExpectedText  = "03 - 191 - You have exceeded the number of allowed accounts for this type"
	StrActualText = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ErrMessageText").GetROProperty("innertext")
	
	If Ucase(Trim(StrExpectedText)) = Ucase(Trim(StrActualText)) Then
		 Reporter.ReportEvent micFail,"Account Creation","User getting displayed with error message"
		 Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click	
	Else 
	       Wait(5)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account").Click @@ script infofile_;_ZIP::ssf46.xml_;_
		wait(5)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DebitAccountAs").SetTOProperty "innertext",StrSelectDebitAccount
		setting.webpackage("ReplayType") = 2
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DebitAccountAs").Click @@ script infofile_;_ZIP::ssf47.xml_;_
		setting.webpackage("ReplayType") = 1
 @@ hightlight id_;_2360990_;_script infofile_;_ZIP::ssf48.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set StrAmount @@ script infofile_;_ZIP::ssf49.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf50.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next_2").Click @@ script infofile_;_ZIP::ssf51.xml_;_
		wait(8)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf53.xml_;_
		
	End If
	
	wait(8)
	Call LogOut()

Next

wait(6)
Call CloseAllBrowsers()
