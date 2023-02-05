We make EpiBooks even better
In this exercise, you will apply your new knowledge of lifecycle and state elevation
of the component to improve your project.

      1. Refactor your main page structure: there should be two columns.
         One on the left containing the grid with books
         and one on the right with the "CommentArea" component.
         Both must always be visible.
         If initially no book is selected, the "CommentArea" should not show any content.
      2. When a book on the left is selected,
         its asin code will have to be saved in the main component state;
         this way it can be passed down to the CommentArea via prop.
         When CommentArea detects a new asin value with the componentDidUpdate() method,
         will have to perform a fetch to receive the comments which will then be displayed.

Do you have a CRUD endpoint for comments on:

     https://striveschool-api.herokuapp.com/api/comments/

This means you can GET, DELETE, POST, PUT data with that.

     
IMPORTANT
You will need to use your own Authentication headers
(get a new token from https://strive.school/studentlogin if the previous one has expired)

A comment object will be structured like this:

     {
       "comment": string
       "rates": string,
       "elementId": string
     }

Where:
  - comment is the text of the comment entered by the user
         - rate is a value from 1 to 5
         - elementId is the resource id/asin

Example:

     {
       "comment": "Great movie! :)"
       "rates": "5",
       "elementId": "tt0241527"
     }

WARNING
Do a GET on
https://striveschool-api.herokuapp.com/api/comments/
it will give you ALL the comments in the database.

You're probably more interested in getting reviews of a single book/movie at a time:
to do this you will need to specify the id/asin of the resource in your URL:

https://striveschool-api.herokuapp.com/api/comments/:elementId

Example:
https://striveschool-api.herokuapp.com/api/comments/tt0241527
will return all comments from a single movie


// npm i bootstrap@4.6.1
// npm i react - bootstrap@1.6.5
