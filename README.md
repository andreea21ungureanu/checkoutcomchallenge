This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Summary

This repo is a working solution for the checkout.com Feedback Form Challenge. It implements a Next.js application that collects feedback from customers and then displays a results page with all the feedback collected.

## Getting Started

### Setting Up

First, install dependencies and then run the development server:

```bash
npm install
npm run dev
```

### Running the project

- The port where the application running in dev mode is [http://localhost:3000/](http://localhost:3000/)
- When you want to access the api, you can use http://localhost:3000/api/[apiName]

### Running the tests

To run the entire test suite:

```bash
 npm test
```

## Choice for Next.js:

I’ve made the decision to use Next.js since it’s a very intuitive platform. It provides an intuitive page based routing system and API routes that helped build API endpoints more easily.

## Choice for Tailwind UI:

Tailwind UI provides a great library of pre-styled components.
This made the UI implementation go smoothly and allowed me to focus on the logic implementation quicker.

# Architecture:

## How it looks

- Page screenshots

## How it works

### The Flow

The current flow is:

    Mocked DB (with a JSON file) -->
    	    Processor with some CRUD functions for managing the “DB” -->
    		    API -->
    			    API Handlers -->
    				    UI

In a few words, I chose to mock a database for the scope of this challenge by using a JSON file.

Afterwards, I implemented a processor for this file which contains a couple of functions (following CRUD structure, but adapted for this use case). These are used to manage the “database”, i.e. to retrieve elements or to add new ones. This is file system based to it’s easy to operate. Thanks to using the CRUD structure, the transition to a real DB would be quite smooth.

The API uses the DB processor to define the API functions
The API handlers fetch the data from the api such that it can be used with the UI

You can find more information on the UI below:

### The Form Page

- This represents the form with the fields suggested in the wireframes. The customer is required to fill in a Name, Email, Star rating and Comment.
- All of these fields are required and they follow appropriate validation such that incorrect inputs can’t be submitted. If incorrect inputs are being filled in, the submission is not taking place, and errors with relevant text labels are being displayed.
- The page is fully accessible, each of the sections being focusable and labeled.

### The Feedback Results Page

- This page is divided in two main sections: The Feedback Chart and the Feedback comments.
- For the feedback chart, I chose to implement a UI similar to the one we see on Amazon Feedback. There is an average rating for all the feedback. There is also a distributed chart of each of the ratings. This chart is clickable and actually filters the Feedback Comments section to display only the comments rated at a specific number (for example: 3 stars rating).
- The Feedback Comments section is represented by a list of all the feedback submitted. I have chosen to display the name and not the email of each customer (as suggested in the wireframes) as it would be more secure in a real-world scenario. This section also displays the individual star ratings and the comment.
- The Back button navigates back to an empty version of the form
- The Reset Filter button reset a filter applied on the Feedback Comments section (if any).
- Once again, the components are focusable and accessible.

- Both pages are using components that adapt to any screen sizes.

## Testing:

- What is tested

# Future Improvements:

## Pagination:

- Ideally, pagination should be implemented on the server side. The structure of the data would have to modify slightly to allow page info.
- At the moment, pagination could be implemented client side since data is fetched all at once. This is not optimal in a real-app scenario, but for the purpose of this exercise, it would work.

## Validation:

- Another aspect that can be improved is validation of the comments section on the server side. This would enforce no XSS instance.

## Server

- At the moment we are mocking a server by using a local JSON file to keep the information. We could instead create a database which would hold our information and then use the database client to implement our api functions.

## CSS cleanup

- I’ve chosen Tailwind UI which comes with utility classes. I chose to separate them in “Style.tsx” files for increased readability of the code. However, I am aware that some of them are repeated from one file to the other. In a real application, styles would be much more reused.
