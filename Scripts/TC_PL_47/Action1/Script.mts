 @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Open an Account").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-account-type").Select "Current" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Monthly Income").Select "Less than QAR 10,000" @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branch *").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branch *").Select "Grand Hamad Street" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("firstName").Set "test" @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("middleName").Set "test1" @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("lastName").Set "test2" @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("email").Set "test@gmail.com" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("qid").Set "25546578965" @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("passport").Set "897456875" @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("mobileNumber").Set "89898989" @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("companyName").Set "dukhan" @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("address").Set "qatar" @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("QID_Image_Front").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("QID_Image_Back").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("Salary_certificate").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("Passport").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf44.xml_;_
wait 60
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Exist(5) Then
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf45.xml_;_
	reporter.ReportEvent micPass,"Verify Submit Button enabled or not","User should be able to see Successfull message"
	else
	reporter.ReportEvent micFail,"Verify Submit Button enabled or not","User should get an error message"
End If
