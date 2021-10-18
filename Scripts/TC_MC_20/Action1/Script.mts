strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount
	
For i = 3 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)

	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("More").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select "E-Statements" @@ script infofile_;_ZIP::ssf6.xml_;_
	''Script need to added for historical statements download
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebTabStrip("Tabs").Select "Consolidate Statements" @@ script infofile_;_ZIP::ssf7.xml_;_
	wait(5)
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Consolidated Statement").Click 30,60
	setting.webpackage("ReplayType") = 1 @@ script infofile_;_ZIP::ssf8.xml_;_
	wait(5)
	Browser("Server - Error report").Page("Server - Error report").Sync
	Browser("Server - Error report").Close
	
	If i = 3  Then
		Exit For 
	End If
	
	wait(5)
	Call LogOut() @@ script infofile_;_ZIP::ssf11.xml_;_

Next

wait(5)
Call CloseAllBrowsers()
