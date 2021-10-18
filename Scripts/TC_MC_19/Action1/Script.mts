''This script is used to card replacement 
''=====================================================
strDriverSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet strDriverSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

For strIterator = 1 To strRowCount-1
	Datatable.GetSheet(strSheet).SetCurrentRow strIterator
	
	StrUserName = datatable.Value("USERNAME",strSheet)
	StrPassword = datatable.Value("PASSWORD",strSheet)
	StrCardNumber =  datatable.Value("CARD_NUMBER",strSheet)
	StrActionType =  datatable.Value("ACTION_CONTROL",strSheet)
	StrReasonType =  datatable.Value("REASON",strSheet)
	StrDeliveryBranch = datatable.Value("DELIVERY_BRANCH",strSheet) 
	
	Call fnLogin(StrUsername,StrPassword) @@ script infofile_;_ZIP::ssf4.xml_;_
	wait(10)
	
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCard").SetTOProperty "innertext",StrCardNumber
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("SelectCard").Click
	wait(8)
	If not Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").exist(10) Then
	         Reporter.ReportEvent micFail,"Click on More Action Control","More Actional Control not found for this card :" &StrCardNumber
	End If
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ActionControlList").SetTOProperty "innertext",StrActionType
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ActionControlList").Click
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Reasons").Click @@ script infofile_;_ZIP::ssf8.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ReasonsListItems").SetTOProperty "innertext",StrReasonType
	setting.webpackage("ReplayType") = 2 
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ReasonsListItems").Click
	setting.webpackage("ReplayType") = 1
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Delivery Branch").click
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DeliveryBranchList").SetTOProperty "innertext",StrDeliveryBranch @@ script infofile_;_ZIP::ssf10.xml_;_
	setting.webpackage("ReplayType") = 2 
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DeliveryBranchList").Click
	setting.webpackage("ReplayType") = 1 @@ script infofile_;_ZIP::ssf11.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf12.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").Check CheckPoint("Dukhan Bank")
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf14.xml_;_
	wait(13)
	
	Call LogOut()

Next 

wait(5)
Call CloseAllBrowsers()


