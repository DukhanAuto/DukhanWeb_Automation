Browser("Dukhan Bank").Page("Dukhan Bank").Link("Forgot Password ?").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("debitCard").Set "5271 5800 0178 5486" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("PIN Number").Set "1234" @@ script infofile_;_ZIP::ssf3.xml_;_
wait 60
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("password").Set "Qatar@2024" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("confirmPassword").Set "Qatar@2024" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf7.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Exist(10) Then
	reporter.ReportEvent micPass,"Verify reset password","User should be able to generate New Password "
	else
	reporter.ReportEvent micFail,"Verify reset password","User should get an error message Card does not exists"
End If
