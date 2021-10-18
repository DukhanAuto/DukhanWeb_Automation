''This script is used to Download the E-Statements in PDF format
''===========================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000010084").Click
Wait(6)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
Wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("E-Statements").Click
wait(5)
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Download").Click 10,10
setting.webpackage("ReplayType") = 1

If Browser("ead5b501-71f6-4ea7-b9d0-30958c").Exist(5) then 
Reporter.ReportEvent micPass,"E-Statements verification","Statement opened in new tab"
Else 
Reporter.ReportEvent micPass,"E-Statements verification","Statement was not opened in new tab"
End If
strImageName = "E-StatementCurrent.bmp"
Browser("ead5b501-71f6-4ea7-b9d0-30958c").CaptureBitmap "C:\GitHub\DukhanWeb_Automation\ScreenShots\"&strImageName,True

Window("Google Chrome").InsightObject("InsightObject_DownloadSymbal").Click
wait(5)
Window("Google Chrome").InsightObject("InsightObject").Click
wait(6)

Browser("ead5b501-71f6-4ea7-b9d0-30958c").Close
	Set objFSO = CreateObject("Scripting.FileSystemObject")
	strfilepath = "C:\GitHub\DukhanWeb_Automation\Test Data\Downloads\8b6e3e26-639a-420f-96fc-f2a15f414bde364689fcdde5-89d5-4067-8b85-ad6c0ede4c80152.pdf"
	' Check the file "Sample.txt" is exists or not
	If objFSO.FileExists(strfilepath) Then
	  Reporter.ReportEvent micPass,"Download E-Statement Statement","The Statement was Downloaded successfully" 
	Else
	    Reporter.ReportEvent micPass,"Download E-Statement Statement","The Statement was not Downloaded" 
	End If 
	
Call LogOut()
Call CloseAllBrowsers()

