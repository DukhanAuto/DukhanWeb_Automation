''This script is used to Enable  Magstripe for all countries
''===============================================================
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
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardType").SetTOProperty "innertext",StrCardNumber
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardType").DoubleClick 
setting.webpackage("ReplayType") = 1

	wait(8)
	If Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Exist(10) Then
	    Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
	End If
	
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card Control").Click
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("SelectMagstripe").Set "OFF"
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("SelectMagstripe").Set "ON" @@ script infofile_;_ZIP::ssf7.xml_;_
Wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("PlusSymbal").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("EdtStartDate").Set Date
StrFeatureDate = StrPreviousMonthDate("m",2,Date)
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("BtnEndDate").Set StrFeatureDate
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("SelectAllCountries").Set "ON" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Wait(5)
	StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
	If Ucase(Trim(StrStatus)) = Ucase(Trim("Error")) Then
		Reporter.ReportEvent micFail,"Magstripe Activation for All Countries","Magstripe Activation operation was not successful"
	Else 
	     Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
	       Reporter.ReportEvent micDone,"Magstripe Activation for All Countries","Magstripe Activation operation was successfully"
	End If
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf14.xml_;_
wait(5)
Call LogOut()

	If i = 5  Then
		Exit For 
	End If
	
Next 

Call CloseAllBrowsers()

 @@ script infofile_;_ZIP::ssf16.xml_;_
