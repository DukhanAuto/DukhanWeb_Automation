''This script is used to check Utility Payment
''=======================================================
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
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("More").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("More").Select "Utility Payment" @@ script infofile_;_ZIP::ssf6.xml_;_
	
	If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Ooredoo").Exist(5) Then
		Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Ooredoo").Click
		Reporter.ReportEvent micPass,"Utility Payment","User navigated to Utility Payment page successfully"
		Else 
		Reporter.ReportEvent micPass,"Utility Payment","User was not navigated Utility Payment page"
	End If
	 @@ script infofile_;_ZIP::ssf7.xml_;_
	 If i =3  Then
	 	Exit For 
	 End If
	 
	 wait(5)
	Call LogOut()
	
Next  @@ script infofile_;_ZIP::ssf10.xml_;_

wait(5)
Call CloseAllBrowsers()

