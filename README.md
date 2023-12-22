Frontend -

To begin discussing frontend design, I created two buttons on the home page, one for placing orders and the other for accessing the dashboard. I completed all of the tasks as instructed. Now I'm going to talk about the order button. When I click the place order button, I am taken to a canvas page with three data fields, of which I only need one. When I select one, the hidden button is revealed and I am taken to the next button. I'm storing the data in our local storage here. because, as per the ideas, I completed the other three pages, which are painting type, delivery date, and upload inspiration. When I go to the order summary page, I get everything from local storage, and when I click the submit button, the data is sent to MongoDB. Here, I use local storage to store specific data, and all data is sent to MongoDB at once. Other than that, I'm not using MongoDB to store images because, as we all know, this is harmful to both the client and the database. I used imgbb to save the image and the link to save the URL. I also use Axios, Date Fns, and the day picker. Now to the admin dashboard, where I am displaying data by project, and when I click the eye button, specific data is displayed in a modal.
