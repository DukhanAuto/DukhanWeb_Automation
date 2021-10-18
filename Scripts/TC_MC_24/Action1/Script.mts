''This script is used to activate card and setiing card usage limit
''===================================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount	

For i = 3 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
       StrCardNumber = Datatable.Value("CARD_NUMBER",strSheet)
       StrCardLimit = Datatable.Value("CARD_USAGE_LIMIT",strSheet)
       
       Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf3.xml_;_

	Wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf4.xml_;_
	
	Wait(5) @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardNumber").SetTOProperty "innertext",StrCardNumber
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardNumber").Highlight
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardNumber").DoubleClick 
	setting.webpackage("ReplayType") = 1

'	If Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Exist(6) Then
'		Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
'		Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select "Card Control"
'	End If @@ script infofile_;_ZIP::ssf6.xml_;_
	Wait(5)
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card Control").Exist(6) Then
	   Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card Control").Click
	 End If @@ script infofile_;_ZIP::ssf7.xml_;_
       
'	StrCardStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card-activation").GetROProperty("innertext")
'       If Ucase(trim(StrCardStatus)) = Ucase(Trim("Card-activationCard is not activated")) Then
'       	Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("CardActivation").Set "ON"
'       End If
'       StrCardUsageLimitStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("In-StoreLimitCard").GetROProperty("innertext")
'       If Ucase(trim(StrCardUsageLimitStatus)) = Ucase(Trim("In-Store LimitCard is not activated for in-store payments")) Then
'              Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("CardUsageLimit").Set "ON"
'              If Browser("Dukhan Bank").Page("Dukhan Bank").WebRange("WebRange").Exist(6) Then
'              	Browser("Dukhan Bank").Page("Dukhan Bank").WebRange("WebRange").Set StrCardLimit
'              End If
'       	
'       End If
              Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("CardActivation").Set "ON" @@ script infofile_;_ZIP::ssf8.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("CardUsageLimit").Set "ON" @@ script infofile_;_ZIP::ssf9.xml_;_
		Wait(5) @@ script infofile_;_ZIP::ssf10.xml_;_
		If Browser("Dukhan Bank").Page("Dukhan Bank").WebRange("WebRange").Exist(5) Then
		    Browser("Dukhan Bank").Page("Dukhan Bank").WebRange("WebRange").Set StrCardLimit
		End If
 @@ script infofile_;_ZIP::ssf11.xml_;_
		Wait(5)
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Save Changes").Click @@ script infofile_;_ZIP::ssf13.xml_;_
		
		Wait(5)
		StrStatus = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("Innertext")
		If Ucase(Trim(StrStatus)) = Ucase(Trim("Success")) Then
			Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
			Reporter.ReportEvent micPass,"Card Control","Card Activation and Card Usage Limit was modified successfully"
		Else   
			Reporter.ReportEvent micFail,"Card Control","Card Activation and Card Usage Limitwas not  modified"
		End If
'		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").Click @@ script infofile_;_ZIP::ssf14.xml_;_
		Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf15.xml_;_
	
'	End If

	Wait(5)
	Call LogOut() @@ script infofile_;_ZIP::ssf17.xml_;_

Next 

Call CloseAllBrowsers()
