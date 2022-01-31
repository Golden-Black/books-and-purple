# books-and-purple
 
 
 <h3>Google Books API: <br></h3>
 When users are performing book searches by clicking on the "Write Review" button, they will be able to search for the books for which they want to review by the book title, ISBN or the author.<br>
 The input will then be sent to the controller to adjust to the usable format. A quick string manipulation will be used to repalce all the empty spaces by "+" or "%20". They both work, however, while actually making the request to Google Book API, the former works slightly better in the past testing cases. <br>

<br>
<h3> Bugs Encoutered: </h3>
<ol>
 <li>[Not Yet Solved]: There were cases where the API calls might not necessarily return all requested fields. When that happens, the missing fields will cause the entire display view crash. Ideally, is there are missing fields, the view should leave it blank or show some place-holder info. [Encountered 01/30/2022]</li>
 <li>[Not Yet Solved]: When the user find the book they want to review and click on the "Write Review" button, there should be a way to pass all the displaying information to the view where the user can also compose the review. [Encountered 01/30/2022]</li>
 
 
 </ol>
