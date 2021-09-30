Strsheet = "Login Credentials"
Datatable.AddSheet Strsheet
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",Strsheet,Strsheet

Total_Rows= Datatable.GetRowCount



Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set datatable.Value("USERNAME",Strsheet) @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Password").Set datatable.Value("PASSWORD",Strsheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_

If Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("signOut").Exist(10) Then
    Reporter.ReportEvent micPass, "Login Authorization","The user is login succesfully."
    Else 
    Reporter.ReportEvent micFail, "Login Authorization","The user is filed to login into the application."
End If
 @@ script infofile_;_ZIP::ssf4.xml_;_
