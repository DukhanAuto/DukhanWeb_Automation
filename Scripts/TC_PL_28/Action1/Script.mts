Browser("Dukhan Bank").Page("Dukhan Bank").Link("Open an Account").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-account-type").Select "Saving" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Saving Account").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Saving Account").Select "Exceptional Savings Account Plus" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Monthly Income").Select "Less than QAR 10,000" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branch *").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branch *").Select "Grand Hamad Street" @@ script infofile_;_ZIP::ssf10.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Exist(5) then
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click
	reporter.ReportEvent micPass,"Verify Next Button is enabled or Not","User should  be able to navigate to Customer Details Tab"
	else
	reporter.ReportEvent micFail,"Verify Next Button is enabled or Not","User unable to navigate to customer details tab"
End If
 @@ script infofile_;_ZIP::ssf11.xml_;_
