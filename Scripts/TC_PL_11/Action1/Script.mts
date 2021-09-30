 @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set "test" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Password").SetSecure "61543d41bfad5e9b9c28d5c333540c1630279aa8aaf7c4f4db3e" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Click @@ script infofile_;_ZIP::ssf8.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Exist(10) Then
	reporter.ReportEvent micPass,"Login Authorization","The user is login succesfully"
	else
	reporter.ReportEvent micFail,"Login Authorization","User should get error Invalid User name or password"
End If
