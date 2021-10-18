''This script is used to downloaded  the E-Statement 
''================================================
Call fnLogin(StrUsername,StrPassword)
wait(8) @@ hightlight id_;_1116904_;_script infofile_;_ZIP::ssf6.xml_;_
 @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000106924").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("More").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Wait(5)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("E-Statements").Click @@ script infofile_;_ZIP::ssf14.xml_;_
wait(5)
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Download").Click @@ script infofile_;_ZIP::ssf15.xml_;_
setting.webpackage("ReplayType") = 1
wait(3)
 @@ hightlight id_;_3804158_;_script infofile_;_ZIP::ssf17.xml_;_
StrImageName = "E-Statement.bmp"
Window("Google Chrome").CaptureBitmap "C:\GitHub\DukhanWeb_Automation\ScreenShots" &StrImageName,True
wait(2)
setting.webpackage("ReplayType") = 2
'Window("Google Chrome").Dialog("Save As").WinButton("Save").Click
AIUtil("profile").Click @@ hightlight id_;_1968536_;_script infofile_;_ZIP::ssf16.xml_;_

setting.webpackage("ReplayType") = 1
wait(3)
FileContent("8b6e3e26-639a-420f-96fc-f2a15f").Check CheckPoint("8b6e3e26-639a-420f-96fc-f2a15f414bde364689fcdde5-89d5-4067-8b85-ad6c0ede4c80152 (1).pdf")

Call LogOut()
Call CloseAllBrowsers()
