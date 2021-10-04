Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Register").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ATM Card Number").Set "5271 5867 5118 3492" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("fake-placeholder").Set "1234" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
wait 60
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf5.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Exist(10) Then
reporter.ReportEvent micPass,"Verify ATM Number","User should get an error message Card does not exists"	
else
reporter.ReportEvent micFail,"Verify ATM Number","User should get an error message"
End If
