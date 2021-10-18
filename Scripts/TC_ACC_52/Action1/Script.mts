''This script is used to verifying the consolidated statement 
''======================================================
Call fnLogin(StrUsername,StrPassword)
wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click
wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000010084").Click
Wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click
Wait(4)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("E-Statements").Click
wait(2)
Browser("Dukhan Bank").Page("Dukhan Bank").WebTabStrip("Tabs").Select "Consolidate Statements" @@ script infofile_;_ZIP::ssf1.xml_;_
If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Generated Date: 10-10-2019").Exist(2) Then
     setting.webpackage("ReplayType") = 2
     Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Generated Date: 10-10-2019").Click
     setting.webpackage("ReplayType") = 1
      Reporter.ReportEvent micPass,"Searching for consolidated statements","Consolidated statements are found"
      Else 
       Reporter.ReportEvent micPass,"Searching for consolidated statements","Consolidated statements are not found for current account"
End If

If Browser("ead5b501-71f6-4ea7-b9d0-30958c").Page("Server - Error report").WebElement("HTTP Status 404 - /ICM/Stateme").Exist(5) Then
Browser("ead5b501-71f6-4ea7-b9d0-30958c").Page("Server - Error report").CaptureBitmap "C:\GitHub\DukhanWeb_Automation\Consolidated.bmp",True
   Reporter.ReportEvent micPass,"Verifying consolidated statement","Consolidated statements opened in new tab"
   Else 
   Reporter.ReportEvent micPass,"Verifying consolidated statement","Consolidated statements was not found"
End If

Call LogOut()
Call CloseAllBrowsers()

'Browser("Server - Error report").Page("Server - Error report").WebElement("type Status report").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Server - Error report").Page("Server - Error report").WebElement("HTTP Status 404 - /ICM/Stateme").Click @@ script infofile_;_ZIP::ssf4.xml_;_
