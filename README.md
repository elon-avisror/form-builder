# Form Builder - Task Description

Welcome to the Form Builder application exam. This app is a simple web
application that allows the user to create a custom form to which anyone can
submit answers. (Like: Google Forms)

You can use any stack you like: any language for the server (java, c#, python,
node and etc.) and any framework for the javascript client part (React,
Angular, Vue.js and etc.). You will have to deploy your app to some server.

You can use any general purpose libraries that don’t specifically solve the
"form building" case.

You need to commit all of your actions while you work on this project.

However, please note, you will be required to add additional functionality after
you finish the project, when choosing libraries, keep that in mind​.

## Requested pages

### List of pages - macro

1. Forms list page
2. Form builder page
3. Form submit page
4. Form submissions list page

### List of pages - micro

1. **Forms list page**

   This page will include a list of all forms and also a link to create a new form.
   The list of forms is a table with the following columns:
    1. Form id
    2. Form Name
    3. Number of Submissions
    4. link to Form Submit Page
    5. link to Form Submissions list Page

    For Example:

    |       id      |   form_name       |   submissions     |   submit_page |   submissions_page    |
    |---------------|:-----------------:|------------------:|--------------:|----------------------:|
    |       1       |   Car Campaign    |       15          |   View button |       View button     |
    |       2       |   Job Application |       20          |   View button |       View button     |

2. **Form builder page**

   In this page, you'll implement a wizard to create a form.
   This wizard will contain a container where you are able to add:
   * Field label
   * Input name
   * Input type
   * Submit button in order to save this form

    The field label and input name are free text, and the input type is of the
    following input types: text, date, email, tel and number ​ (you can read more
    about input type here - ​ HTML input types​ ).
    When you are done adding fields, you should enter form name and hit the
    submit button in order to add the form to your forms list.

    When you are done adding fields, you should enter form name and hit the
    submit button in order to add the form to your forms list.

    At the end of the creation process, the user should redirect to ​**forms list
    page​**.

3. **Form submit page**

    In this page, you'll display a specific form by its id.

    This form must include all the relevant fields and a submit button.

    On submit, all data will be saved.

    At the end of the submission process, the user should redirect to ​**forms list page​**.

4. **Form submissions page**

    This page will include a table of all submissions related to a specific form by its id.

    E​ach header is the field name and each row is a submission with the user input.

    |   first_name  |   last_name   |   age |   city        |   phone_number   |
    |---------------|:-------------:|------:|--------------:|-----------------:|
    |       John    |   Pfeifer     |   15  |   Tel aviv    |   073-16-XXXX    |

    Also, this page should include a button that redirects to ​**forms list page​**.

## Form Builder - solution

## TODO

1. Forms list page [Monday 17/8/2020 - 3H]
2. Form builder page [Tuesday 18/8/2020 - 3H]
3. Form submit page [Wednesday 19/8/2020 - 3H]
4. Form submissions list page [Thirsday 20/8/2020 - 3H]
5. Build a guide [Friday 21/8/2020 - 2H]
