''''This script is used to create New Credit Card (Master Card and  VisaCard) @@ script infofile_;_ZIP::ssf6.xml_;_
''''========================================================================
StrDataSheetPath = "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx"
strSheet="My_Cards"
Datatable.AddSheet strSheet
Datatable.ImportSheet StrDataSheetPath,"My_Cards",strSheet
strRowCount=Datatable.GetSheet(strSheet).GetRowCount

For j = 1 To strRowCount-1

	Datatable.SetCurrentRow(j)
	
	StrUserName = datatable.Value("USERNAME",strSheet)
	StrPassword = datatable.Value("PASSWORD",strSheet)
	StrChooseCardType = datatable.Value("CHOOSE_CARD_TYPE",strSheet)
	StrCardType = DataTable.Value("CARD_TYPE",strSheet)
	StrNameOfCard = DataTable.Value("NAME_TO_APPEAR_ON_CARD",strSheet)
	StrCardLimit = DataTable.Value("CARD_LIMIT",strSheet)
	StrMonthlyIncome = DataTable.Value("SELETE_MONTHLY_INCOME",strSheet)
	StrDeliveryBranch = DataTable.Value("DELIVERY_BRANCH",strSheet)
	StrMonthlyRepayment =DataTable.Value("MONTHLY_PAYMENT",strSheet)
	StrRemarks = DataTable.Value("REMARKS",strSheet)
	
	Call fnLogin(StrUsername,StrPassword)
       wait(10)
	
	Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf46.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("NewCardPlus").SetTOProperty "innertext","New Card"
       Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("NewCardPlus").Click @@ script infofile_;_ZIP::ssf47.xml_;_
	wait(3)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Credit card").SetTOProperty "innertext",StrChooseCardType
	setting.webpackage("ReplayType") = 2
       Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Credit card").Click 10,10 @@ script infofile_;_ZIP::ssf48.xml_;_
       setting.webpackage("ReplayType") = 1
	wait(3)
	
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Card Type").Click @@ script infofile_;_ZIP::ssf49.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("CardTypeList").SetTOProperty "innertext",StrCardType
		setting.webpackage("ReplayType") = 2
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("CardTypeList").Click 10,10
		setting.webpackage("ReplayType") = 1
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("NameOfCard").Set StrNameOfCard
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("CardLimit").Set StrCardLimit @@ script infofile_;_ZIP::ssf52.xml_;_
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click @@ script infofile_;_ZIP::ssf53.xml_;_
       Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("MonthlyIncomeList").SetTOProperty "innertext",StrMonthlyIncome @@ script infofile_;_ZIP::ssf54.xml_;_
       setting.webpackage("ReplayType") = 2
       Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("MonthlyIncomeList").Click 10,10
       setting.webpackage("ReplayType") = 1
	wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Delivery Branch").Click @@ script infofile_;_ZIP::ssf55.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DeliveryBranchNamesList").SetTOProperty "innertext",StrDeliveryBranch
	setting.webpackage("ReplayType") = 2
       Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("DeliveryBranchNamesList").Click 10,10
       setting.webpackage("ReplayType") = 1
       wait(5)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Monthly Repayment").Click @@ script infofile_;_ZIP::ssf57.xml_;_
	Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("MonthlyRepaymentTypeList").SetTOProperty "innertext",StrMonthlyRepayment
	setting.webpackage("ReplayType") = 2
       Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("MonthlyRepaymentTypeList").Click 10,10
       setting.webpackage("ReplayType") = 1
	wait(6)
	Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Remarks").Set StrRemarks @@ script infofile_;_ZIP::ssf59.xml_;_
	wait(5)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
       Browser("Dukhan Bank").Page("Dukhan Bank").Sync
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf60.xml_;_
	wait(5)
	
	Browser("Dukhan Bank").Page("Dukhan Bank").Check CheckPoint("Dukhan Bank")
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf88.xml_;_
      wait(8)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      
      If j = 2 Then
      	 Exit For
      End If
      
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      Call LogOut()
      
Next

wait(5)
Call CloseAllBrowsers()
