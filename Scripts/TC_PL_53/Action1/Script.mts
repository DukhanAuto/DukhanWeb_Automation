Browser("Dukhan Bank").Page("Dukhan Bank").Link("Currency Converter").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebTabStrip("Tabs").Select "Exchange Rate" @@ script infofile_;_ZIP::ssf2.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("WebEdit").Exist(5) Then
	
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("WebEdit").Set "50" @@ script infofile_;_ZIP::ssf3.xml_;_
reporter.ReportEvent micPass,"Verify Converted amount for listed countries","User should be able to see Converted amount for listed countries based on user entered amount in QAR

End If
