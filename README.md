<div align="center"><img src="https://i.ibb.co/C9Tw5rc/Screen-Shot-2022-04-22-at-3-06-28-PM.png"></img></div>
<h1 align="center">Intro Component with Signup Form & Validation</h1>

<div align="center">
  <h3>
    <a href="https://waynetasaki.github.io/Intro-component-signup-form/?">🌐 Live Site </a>  |  
    <a href="https://www.frontendmentor.io/solutions/intro-component-with-signup-form-SkD8MsxSq" target="_blank"> Solution </a> | 
    <a href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1" target="_blank"> Challenge </a> 
  </h3>
</div>
<div align="center">
   Solution for a challenge from  <a href="https://www.frontendmentor.io/" target="_blank">frontendmentor.io</a>.
</div>
<br>

## About This Project

<p>This challenge was to practice building out a sign-up form complete with client-side validation using JavaScript.

<br>
<br>
Your users should be able to:

1. View the optimal layout for the component depending on their device's screen size
2. See hover states for all interactive elements on the page
3. Receive an error message when the form is submitted if:
<br>
&nbsp;&nbsp;&nbsp;&nbsp; - Any input field is empty
<br>
&nbsp;&nbsp;&nbsp;&nbsp; - The email address is not formatted correctly
<br>
<br>



## Built with

<p>HTML, CSS, JavaScript</p>

## What I learned
- On the HTML side, I learned about formnovalidate="formnovalidate" which will prevent any default error messages from displaying on the page. This allowed me to use custom styled error messages instead.
- The JS was fairly straightforward, but I did wrestle with regex a bit. I was using regex to match the value of the input fields and found the website https://regexr.com/ to be incredibly helpful. This is a resource I will absolutely be going back to.
- I also came across a different solution for validating email addresses. Originally I found a regex from https://www.w3resource.com/javascript/form/email-validation.php but when I implemented it, it wasn't working. I thought that maybe an email input has it's own default validation checks and that was interferring with my custom one. I console logged the email input node and looked at the different properties and found there was one named validity.valid which told me whether the email was the correct format so I used that in my conditionals instead of a regex. Of course, later on I realized there was actually nothing wrong with the email address regex and I had just made an error with the syntax, but I still left in my validity.valid solution.
