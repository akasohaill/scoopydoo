# Scooby.com App

## Overview
The Dog Breeds App is a user-friendly web application that allows users to explore various dog breeds, and view their details for specific breeds. The app provides an interactive interface where users can click on a breed to see detailed information, including images, weights, heights, and more. 

## Setup Instructions

To run this application locally, follow these steps:
Install dependencies: Make sure you have Node.js installed. Then run:
npm install
Run the application: Start the development server with:
npm run dev

This will open the application in your default web browser at http://localhost:5173.

Dependencies
The following dependencies are used in this project:

React: A JavaScript library for building user interfaces.
React Router DOM: For handling routing and navigation within the application.
CSS Modules: For styling components with modular CSS.
You can find the complete list of dependencies in the package.json file.

Features
Dog Breed List: Displays a list of dog breeds with images.
Detailed View: Click on a breed to view detailed information about it.
Responsive Design: The app is designed to be responsive and user-friendly on both mobile and tablet devices.
Footer: Includes a footer with links and copyright information.
Code Structure
The project is structured as follows:


scooby.com/
├── public/
│   ├── index.html          # Main HTML file
│   └── assets/             # Static assets (images, etc.)
├── src/
│   ├── components/         # Reusable components (NavBar, Footer, etc.)
│   ├── screens/            # Main screens/views (ListView, DetailsView)
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the application
│   └── styles.css          # Global styles
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation


Key Files:
App.js: The main application component that contains routing and layout.
ListView.jsx: Displays the list of dog breeds and handles searching and selection of breeds.
DetailsView.jsx: Shows detailed information for a selected dog breed.
Footer.jsx: Displays footer information and links.
