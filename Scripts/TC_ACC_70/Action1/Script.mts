''This Script is used to create Exceptional saving account
''=======================================================
StrDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
StrSheet="My_Accounts"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Accounts",strSheet
TotalRowCount = Datatable.GetSheet(StrSheet).GetRowCount

For i = 5 To TotalRowCount

     Datatable.SetCurrentRow(i)
 	StrUserName = datatable.Value("USERNAME",strSheet)
	StrPassword = datatable.Value("PASSWORD",strSheet)
	StrOpenAccount= datatable.Value("OPEN_ACCOUNT_TYPE",strSheet)
	StrSelectDebitAccount = datatable.Value("SELECT_DEBIT_ACCOUNT_DETAILS",strSheet)
       StrAmount = datatable.Value("AMOUNT",strSheet)

	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
	Wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("OPEN_NEW_ACCOUNT").Click
        Wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Account Type").Click @@ script infofile_;_ZIP::ssf7.xml_;_
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectAccountTypeList").SetTOProperty "Innertext",StrSelectDebitAccount
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectAccountTypeList").Click 20,30
	setting.webpackage("ReplayType") = 1
	
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf10.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account").Click @@ script infofile_;_ZIP::ssf11.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DebitAccountType").SetTOProperty "innertext",StrSelectDebitAccount
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DebitAccountType").DoubleClick 30,30 @@ script infofile_;_ZIP::ssf12.xml_;_
	setting.webpackage("ReplayType") = 1
	wait(5)
 @@ hightlight id_;_592210_;_script infofile_;_ZIP::ssf13.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set StrAmount @@ script infofile_;_ZIP::ssf16.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf17.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next_2").Click @@ script infofile_;_ZIP::ssf18.xml_;_
	wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").Check CheckPoint("Dukhan Bank")
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf20.xml_;_
	
	wait(5)
	Call LogOut()

Next 

Call CloseAllBrowsers()
 @@ script infofile_;_ZIP::ssf22.xml_;_
