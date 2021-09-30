Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set "test" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Password").SetSecure "6154671a342e3fe0fceaa88687bc165dc177e5d6bb96f5ff0f8f" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Exist(10) Then
	reporter.ReportEvent micPass,"Verify username and password","User should get error Invalid User name or password"
	else
	reporter.ReportEvent micFail,"Verify username and password","User should get an error"
End If
