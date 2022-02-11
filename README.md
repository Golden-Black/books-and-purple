# Books-and-Purple
 
Google Books API: 
------------------------------
<ul>
  <li>When users are performing book searches by clicking on the "Write Review" button, they will be able to search for the books for which they want to review by the book title, ISBN or the author.</li>
 <li>The input will then be sent to the controller to adjust to the usable format. A quick string manipulation will be used to repalce all the empty spaces by "+" or "%20". They both work, however, while actually making the request to Google Book API, the former works slightly better in the past testing cases.</li>
 <li>A long series data in json format, if there are no errors presenting, will be returned upon the request. The isbn number, book title, authors, descriptions, etc. are all included in the <em>volumeInfo</em> object in the returned data.</li>
 <li>Not all fields have data all the time.</li>
 <li>ISBN-13 and ISBN-10 orders are sometimes in consistent.</li>
 <li>Book cover images are only available in <em>icon</em> and <em>thumb-nail</em> sizes, although more sizes are mentioned in the documents. To enlarge the book cover images, replace size=1 with size=10 (or sometimes size=5) in the url, although it may NOT be universially appliable.</li>
</ul>

Bugs Encoutered: 
------------------------------
<ol>
 <li>[Solved 02/08/2022]: There were cases where the API calls might not necessarily return all requested fields. When that happens, the missing fields will cause the entire display view crash. Ideally, is there are missing fields, the view should leave it blank or show some place-holder info. [Encountered 01/30/2022]</li>
 <li>[Solved 02/07/2021]: When the user find the book they want to review and click on the "Write Review" button, there should be a way to pass all the displaying information to the view where the user can also compose the review. [Encountered 01/30/2022]</li>
 <li>[Not Yet Solved]: There are four conditions to handle when the user is completing the review. On the user side: 1. If the user never post any reviews about a book; 2. If the user is posting to a book for which the user has previously written review(s). One the display side: 1. No previous post about the book at all. 2. There are already reviews about the book posted by other users. [Encountered 02/07/2022] </li>
</ol>
 
Run the App locally:
------------------------------
All needed dependencies are included in the package.json file. Clone the projecet to your local machine. Then, open terminal or cmd and direct to the location of the code. Run: ```npm install ```
<br>After dependencies are all successfully installed, start the project by entering in the terminal<br>
```nodemon app.js``` OR ```node app.js```
<br>Go to Google API and acquire your own API key. After that, create a .env file and type in ```APIKEY = YOUR_API_KEY```, and then save the file.

<br> Connect the project to a local MongoDB database: Go to MongoDB Altas. Create a user and MAKE SURE memorize your admin username and passowrd. Choose "Connect to Application" and follow the instructions to copy and paste the code to replace your local database address (such as ```//localhost: 21701/```) and change the <username> and <password> to the corresponding values.
<br> Open browser and run the project locally by typing in ```localhost:3000```

Task Stack:
------------------------------
<h4>Initial Launch (v. 1.0.0) 02/09/2022</h4>
<ol>
 <li> <strike>API null return</strike></li>
</ol>

<h4>v. 1.0.1</h4>
<ol>
 <li> <strike>Add user email to the database.</strike> </li>
 <li> <strike>Add default posts to show in the index.ejs page.</strike></li>
 <li> Design & implement the category layout. </li>
 <li> Complete 404 Page Routing</li>
</ol>

<h4>v. 1.0.2</h4>
<ol>
 <li> Fix the size for search book button. </li>
 <li> Add additional user information to the account.ejs page.</li>
 <li> favicon </li>
 <li> Fix the <b>Load More</b> button in the index page in both the posts & the category column. </li>
 </li>
</ol>

<h4>v. 1.0.3</h4>
<ol>
  <li>Implement Delete function.</li>
</ol>

<h4>v. 1.1.0</h4>
<ol>
  <li>RESTful API design</li>
</ol>
