# url-shortener

# client experience

Input: Take in a large url
Output: "smaller" url

Input: if someone makes a request to the small url
Output:  _redirect_ to the larger url

- Front end: 
    - form w/ input box for the large url

- Back end:
    - database to store large url
    - server needs to accept a large url, generate a small url, and then store both together in the database
    - when someone makes a request to the server with a small url, we should redirect to the large url

- Tech Stack:
    - Twitter Bootstrap
    - Express.js
    - MongoDB
    