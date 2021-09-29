''This script is used to login scenario
''====================================================

Call LoginInfo(StrUsername,Strpassword)
Function LoginInfo(StrUsername,Strpassword)

	StrUsername = datatable.Value("USERNAME","Global")
       Strpassword = datatable.Value("PASSWORD","Global")
       
       Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set StrUsername
       Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Password").Set Strpassword
       Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").DoubleClick
       
       If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("signOut").Exist(5) Then
       Reporter.ReportEvent micPass,"Launch Application","Application has been launched successfully"
       Else 
       Reporter.ReportEvent micFail,"Launch Application","Application has been not been launched"
       End If

End Function


 @@ script infofile_;_ZIP::ssf4.xml_;_
