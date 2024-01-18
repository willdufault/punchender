# Punchender

A full-stack crowdfunding site modeled after Kickstarter. Created by Karl Brzoska, Will Dufault, Mattheus Faria, Colin Fyock. 

We used React.js to create the front end the front end and AWS for the back end. We used axios in the client to send and receive information from a custom REST API built using API Gateway. That REST API would then invoke corresponding Lambda functions, which would manipulate the data in our MySQL RDS database.   

This repository contains the source (src) folder for our React.js project. Our AWS Lambda functions can be found in lambda-functions.zip.
