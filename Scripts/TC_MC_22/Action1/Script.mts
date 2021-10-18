''This script is used to change the PIN Number 
''====================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount
	
For i = 3 To strRowCount Step 1

	Datatable.GetSheet(strSheet).SetCurrentRow(i)
	StrUsername = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
       StrCardNumber = Datatable.Value("CARD_NUMBER",strSheet) @@ script infofile_;_ZIP::ssf8.xml_;_
       StrNewPin = Datatable.Value("NEW_PIN",strSheet)
       StrConfirmPin = Datatable.Value("CONFIRM_PIN",strSheet)
       
      Call fnLogin(StrUsername,StrPassword)
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf9.xml_;_
	wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardNumber").SetTOProperty "innertext",StrCardNumber
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardNumber").Highlight
	setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCardNumber").DoubleClick 
	setting.webpackage("ReplayType") = 1
	
       wait(5) @@ script infofile_;_ZIP::ssf11.xml_;_
	If Browser("Dukhan Bank").Page("Dukhan Bank").Link("Change PIN").Exist(6) Then
	    Browser("Dukhan Bank").Page("Dukhan Bank").Link("Change PIN").Click
	Else
		Reporter.ReportEvent micWarning,"Change Pin","Change Pin Action control was not found for this card"
		ExitRun(0) 
	End If
	
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("EdtNewPIN").Set StrNewPin @@ script infofile_;_ZIP::ssf12.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("EdtConfirmPIN").Set StrConfirmPin @@ script infofile_;_ZIP::ssf13.xml_;_
	
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf14.xml_;_
	
	'Browser("Dukhan Bank").Page("Dukhan Bank").Check CheckPoint("Dukhan Bank") @@ script infofile_;_ZIP::ssf15.xml_;_
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").Exist(5) Then
	StrText = Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").GetROProperty("innertext")
		 If Ucase(Trim(StrText)) = Ucase(Trim("Error")) Then
		 	Reporter.ReportEvent micFail,"Change PIN","Change PIN operation was not successfully"
		 	Else 
		 	Reporter.ReportEvent micDone,"Change PIN","Change PIN operation was successfully"
	        End If
	End If
	'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SuccessPopUp").Click
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf16.xml_;_
	
		If i = 4 Then
			Exit For 
		End If
	
      wait(5)
      Call LogOut()
      
Next 

Wait(5)
Call CloseAllBrowsers()

