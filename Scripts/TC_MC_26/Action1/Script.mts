''This script is used to set card usage limit for online transactions
''===================================================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount
	
For i = 6 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
       StrCardNumber = Datatable.Value("CARD_NUMBER",strSheet)
 	StrCardUsageLimit = Datatable.Value("CARD_USAGE_LIMIT",strSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
 	
	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf5.xml_;_
	wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	Wait(8)
 @@ script infofile_;_ZIP::ssf7.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCreditCard").SetTOProperty "innertext",StrCardNumber
		setting.webpackage("ReplayType") = 2
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCreditCard").DoubleClick 
		setting.webpackage("ReplayType") = 1
		
	Wait(8) @@ script infofile_;_ZIP::ssf8.xml_;_
	If Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Exist(10) Then
	    Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
	End If
		
	Wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card Control").Click
	Wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("OnlineUsage").Set "OFF"
	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("OnlineUsage").Set "ON" @@ script infofile_;_ZIP::ssf11.xml_;_
	Wait(5)
		If Browser("Dukhan Bank").Page("Dukhan Bank").WebRange("WebRange").Exist(6) Then
		    Browser("Dukhan Bank").Page("Dukhan Bank").WebRange("WebRange").Set StrCardUsageLimit
		End If @@ script infofile_;_ZIP::ssf12.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Save Changes").Click
	wait(10)
	StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
		If Ucase(Trim(StrStatus)) = Ucase(Trim("Error")) Then
			Reporter.ReportEvent micFail,"Onlone Card Usage","Online Card Usage limit was not set successfully"
		Else 
		     Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		       Reporter.ReportEvent micDone,"Onlone Card Usage","Online Card Usage limit was set successfully"
		End If
	
	wait(6)
	Call LogOut() @@ script infofile_;_ZIP::ssf17.xml_;_
	
		If i = 5  Then
			Exit For 
		End If
		
Next 

wait(6)
Call CloseAllBrowsers()


