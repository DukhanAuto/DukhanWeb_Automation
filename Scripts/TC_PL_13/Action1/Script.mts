Browser("Dukhan Bank").Page("Dukhan Bank").Link("Forgot Password ?").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("debitCard").Set "4233 7556 7768 5156" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("PIN Number").Set "1234"
wait 60 @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf5.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Exist(10) Then
	reporter.ReportEvent micPass,"Verify ATM Number","User should get an error message Card does not exists"
	else
	reporter.ReportEvent micFail,"Verify ATM Number","User should get an error "
End If

