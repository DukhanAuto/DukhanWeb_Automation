''This script is used to Block the card 
''==================================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

For i = 8 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
       StrCardNumber = Datatable.Value("CARD_NUMBER",strSheet)
       
	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardType").SetTOProperty "innertext",StrCardNumber
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardType").DoubleClick 
	setting.webpackage("ReplayType") = 1
	Wait(3)
	
		If Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Exist(10) Then
		    Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
		End If
		
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Block Card").Click
	'Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select "Block Card" @@ script infofile_;_ZIP::ssf7.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf8.xml_;_
	wait(5)

              StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
		If Ucase(Trim(StrStatus)) = Ucase(Trim("Error")) Then
			Reporter.ReportEvent micFail,"Block Card","Block Card operation was Failed"
		Else 
		     Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		       Reporter.ReportEvent micDone,"Block Card","Block Card operation was successful"
		End If
 @@ script infofile_;_ZIP::ssf12.xml_;_
	 wait(8)
	 Call LogOut()
	 
	 	If i = 8  Then
			Exit For 
		End If
	
Next 

wait(5)
Call CloseAllBrowsers()
 
