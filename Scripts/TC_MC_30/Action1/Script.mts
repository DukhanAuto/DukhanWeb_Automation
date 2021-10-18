''This script is used to Unblock the perticular card 
''===============================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount
	
For i = 7 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
       StrCardNumber = Datatable.Value("CARD_NUMBER",strSheet)
	       
	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	wait(5)
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardType").SetTOProperty "innertext",StrCardNumber
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardType").DoubleClick 
	setting.webpackage("ReplayType") = 1 @@ script infofile_;_ZIP::ssf5.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("Unblock Card").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	Wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set "Testing" @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf8.xml_;_
	wait(5)
	
		StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
		If Ucase(Trim(StrStatus)) = Ucase(Trim("Error")) Then
			Reporter.ReportEvent micFail,"Unblock Card","Unblock Card opration was failed"
		Else 
		     Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		       Reporter.ReportEvent micDone,"Unblock Card","Unblock Card opration was successful"
		End If
		
	wait(8)
	 Call LogOut() @@ script infofile_;_ZIP::ssf12.xml_;_
	 
		If i = 7 Then
			Exit For 
		End If

Next 

Wait(5)
Call CloseAllBrowsers()
