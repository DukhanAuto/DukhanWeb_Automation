''This script is used to Cash Advance action control
''=====================================================
<<<<<<< Updated upstream
StrDataSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet StrDataSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

For j = 1 To strRowCount-1

	Datatable.SetCurrentRow(j)
	
	StrUserName = Datatable.Value("USERNAME",strSheet)
	StrPassword = Datatable.Value("PASSWORD",strSheet)
	StrAccountType = Datatable.Value("SELECT_ACCOUNT_TYPE",strSheet)
	StrAmount = Datatable.Value("AMOUNT",strSheet)

	Call fnLogin(StrUsername,StrPassword)
	Wait(10)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf1.xml_;_
	wait(3) @@ script infofile_;_ZIP::ssf2.xml_;_
		If Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Cash Advance").Exist(10) Then
		    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Cash Advance").Click
		Else 
		    Reporter.ReportEvent micWarning,"Select Cash Advance","Cash Advance Action Control not for this user accounts"
		End If
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account").Click @@ script infofile_;_ZIP::ssf3.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectAccountType").SetTOProperty "innertext",StrAccountType
	Setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectAccountType").Click
	Setting.webpackage("ReplayType") = 1
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set StrAmount @@ script infofile_;_ZIP::ssf5.xml_;_
	wait(3)

	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click
		If Browser("Dukhan Bank").TextObject("Success").Exist(10) Then
		    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		    Reporter.ReportEvent micPass,"Cash Advance","Cash Advance payment was successfull"
		Else 
		    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
		    Reporter.ReportEvent micFail,"Cash Advance","Cash Advance payment was not successfull" 
		End If
'	If Browser("Dukhan Bank").TextObject("Rejected").Exist(10) Then
'	    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
'		Reporter.ReportEvent micFail,"Cash Advance","Cash Advance payment was not successfull" 
'	End If

	wait(8)
	Call LogOut()
        
            If j= 2 Then
    	      Exit For 
            End If
Next 

wait(5)
=======
Call fnLogin(StrUsername,StrPassword)
Wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Cash Advance").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Selected Account").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Current100000010916").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set "100" @@ script infofile_;_ZIP::ssf5.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf7.xml_;_

If Browser("Dukhan Bank").TextObject("Rejected").Exist(10) Then
    Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
	Reporter.ReportEvent micFail,"Cash Advance","Cash Advance payment was not successfull"
Else 
      Browser("Dukhan Bank").TextObject("Success").Exist(10)

       Reporter.ReportEvent micPass,"Cash Advance","Cash Advance payment was successfull"
End If

wait(8)

Call LogOut()
>>>>>>> Stashed changes
Call CloseAllBrowsers()
'
'straccountnumber = 100000010916
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("html tag:=DIV","innertext:=" &straccountnumber).click

