''This script is used to download the E-Statements for saving account
''===============================================================================
Call fnLogin(StrUsername,StrPassword)
wait(10)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
Wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000106924").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Wait(6)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
Wait(3)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("E-Statements").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait(5)
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Download").Click 10,10 @@ script infofile_;_ZIP::ssf10.xml_;_
setting.webpackage("ReplayType") = 1

If Browser("ead5b501-71f6-4ea7-b9d0-30958c").Exist(5) then 
Reporter.ReportEvent micPass,"E-Statements verification","Statement opened in new tab"
Else 
Reporter.ReportEvent micPass,"E-Statements verification","Statement was not opened in new tab"
End If
strImageName = "E-Statement.bmp"
Browser("ead5b501-71f6-4ea7-b9d0-30958c").CaptureBitmap "C:\GitHub\DukhanWeb_Automation\ScreenShots\"&strImageName,True

Window("Google Chrome").InsightObject("InsightObject_DownloadSymbal").Click
wait(5)
Window("Google Chrome").InsightObject("InsightObject_DownloadSymbal").Click @@ hightlight id_;_44_;_script infofile_;_ZIP::ssf22.xml_;_
wait(10)

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
Call CloseAllBrowsers() @@ hightlight id_;_161_;_script infofile_;_ZIP::ssf20.xml_;_

 @@ hightlight id_;_395354_;_script infofile_;_ZIP::ssf11.xml_;_



