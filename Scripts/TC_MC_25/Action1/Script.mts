''This script is used to check whether user is able to use credit card for international trasaction
''===================================================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount
	
For i = 5 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
       StrCardNumber = Datatable.Value("CARD_NUMBER",strSheet)
       
	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
	Wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	Wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCreditCard").SetTOProperty "innertext",StrCardNumber @@ script infofile_;_ZIP::ssf5.xml_;_
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCreditCard").DoubleClick 
	setting.webpackage("ReplayType") = 1
	wait(8)
	If Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Exist(10) Then
	    Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
	End If
	
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card Control").Click
	'Browser("Dukhan Bank").Page("Dukhan Bank").Link("Card Control").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("CardActivation").Set "ON" @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("InternationalCardActivation").Set "ON" @@ script infofile_;_ZIP::ssf8.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Save Changes").Click @@ script infofile_;_ZIP::ssf9.xml_;_
	
	wait(3)
	StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
	If Ucase(Trim(StrStatus)) = Ucase(Trim("Error")) Then
		Reporter.ReportEvent micFail,"International Card Activation","International Card Activation operation was not successfully"
	Else 
	     Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
	       Reporter.ReportEvent micDone,"International Card Activation","International Card Activation operation was successfully"
	End If
	
	If i = 5  Then
		Exit For 
	End If
	
	wait(5)
	Call LogOut()

Next 

Call CloseAllBrowsers() @@ script infofile_;_ZIP::ssf13.xml_;_
