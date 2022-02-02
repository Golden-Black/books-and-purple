# books-and-purple
 
 
 <h3>Google Books API: <br></h3>
 <ul>
  <li>When users are performing book searches by clicking on the "Write Review" button, they will be able to search for the books for which they want to review by the book title, ISBN or the author.</li>
 <li>The input will then be sent to the controller to adjust to the usable format. A quick string manipulation will be used to repalce all the empty spaces by "+" or "%20". They both work, however, while actually making the request to Google Book API, the former works slightly better in the past testing cases.</li>
 <li>A long series data in json format, if there are no errors presenting, will be returned upon the request. The isbn number, book title, authors, descriptions, etc. are all included in the <em>volumeInfo</em> object in the returned data.</li>
 <li>Not all fields have data all the time.</li>
 <li>ISBN-13 and ISBN-10 orders are sometimes in consistent.</li>
 <li>Book cover images are only available in <em>icon</em> and <em>thumb-nail</em> sizes, although more sizes are mentioned in the documents. To enlarge the book cover images, replace size=1 with size=10 (or sometimes size=5) in the url, although it may NOT be universially appliable.</li>

<br>
<h3> Bugs Encoutered: </h3>
<ol>
 <li>[Not Yet Solved]: There were cases where the API calls might not necessarily return all requested fields. When that happens, the missing fields will cause the entire display view crash. Ideally, is there are missing fields, the view should leave it blank or show some place-holder info. [Encountered 01/30/2022]</li>
 <li>[Not Yet Solved]: When the user find the book they want to review and click on the "Write Review" button, there should be a way to pass all the displaying information to the view where the user can also compose the review. [Encountered 01/30/2022]</li>
</ol>
 
<h3> Task Stack at initial launch (v. 1.0.0): </h3>
<ol>
 <li> Fix the <b>Load More</b> button in the index page in both the posts & the category column. </li>
 <li> Add user email to the database. </li>
 <li> Add additional user information to the account.ejs page.</li>
 <li> Design & implement the category layout. </li>
 <li> Add default posts to show in the index.ejs page. </li>
</ol>
