''This script is used to  Enable Magstripe for Selected Country 
''==============================================================
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
       StrCountryName= Datatable.Value("SELECT_COUNTRY_NAME",strSheet)
       
	Call fnLogin(StrUsername,StrPassword)
	Wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click
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
	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("SelectMagstripe").Set "ON"
	Wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("PlusSymbal").Click
	Wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("EdtStartDate").Set Date
	StrFeatureDate = StrPreviousMonthDate("m",2,Date)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("BtnEndDate").Set StrFeatureDate
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Country").Click @@ script infofile_;_ZIP::ssf16.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select StrCountryName @@ script infofile_;_ZIP::ssf17.xml_;_
	Wait(8)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("BtnCountrySubmit").Click @@ script infofile_;_ZIP::ssf19.xml_;_
	wait(8)
	StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
		If Ucase(Trim(StrStatus)) = Ucase(Trim("Error")) Then
			Reporter.ReportEvent micFail,"Select Country for Magstripe Activation ","Magstripe Activation operation was not successful"
		Else 
		     Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		       Reporter.ReportEvent micDone,"Select Country for Magstripe Activation","Magstripe Activation operation was successfully completed for perticular country"
		End If
	Wait(3)
	''Need to validate whether selected country is listed under the card or not
'	StrVal = Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Albania 14/10/2021 To").GetROProperty("innertext")
   
	Call LogOut()
	
		If i = 5  Then
			Exit For 
		End If

Next 

Wait(5)
Call CloseAllBrowsers() @@ script infofile_;_ZIP::ssf22.xml_;_



