# Educell International School

Educell International Schoo challenges us to create a remote and low resource environment app that provides a way for school administrators and social workers to create, read, update, and delete student data.


## MVP

There needs are On boarding, logging in, and viewing a list of all student in the school, with date of past edits/visits. For example: school admins can change e-mail or contact phone number of Student. This change should be recorded. Administrators can delete a student record entirely. This action should be recorded. (as of this writing) Admins cannot change their own password, this feature is TBD. It is assumed that ALL Signups and Log ins are either Educell Administrators or Educell Workers. 

## The `Navigation` Bar
Navigation is present on all pages. Users can click Logout, Administration and Home links.

## The `Signup` Page
Users are presented this page for Name, Email, Phone, Password details. Success on this page brings up Login Page.

## The `Login` Page
Users can use same credentials from Signup to login where they will be greeted with a warning before entering the Home Page.

## The `Home` Page
After a user logs in, they'll be directed to a home page.
Users are presented a list of all students in the school, and dates of past `[Card edit]` visits. Loads all information from the intake form about all Students.

 

## The `Add Students` Page

Clicking add from `Home` Page, brings up its own (this page), where a user can add information about a new Student.

## The `Administrators`/`Class` Page

Edit and Delete feature is available for school admins to edit or delete students, this page is loaded and laid out in a grid format showing all Students. Clicking `[view]` brings up Single Child View Page.


## The `Single Child View` Page
Loads all information from the intake form about a single Student.
