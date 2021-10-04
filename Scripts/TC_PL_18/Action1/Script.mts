Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set "2168" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Password").SetSecure "61558ace0327a893dad261da6b0a93faa219b23233f654e81148" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Exist(10) Then
reporter.ReportEvent micPass,"Verify login with new password","User should be able to login successfully"
else
reporter.ReportEvent micFail,"Verify login with new password","User unable to login page"
End If
