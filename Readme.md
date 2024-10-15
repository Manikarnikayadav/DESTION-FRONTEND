##  Login and Signup React Application

 # Overview
 This project demonstrates a simple authentication system with Login and Signup pages built using React, Formik, Yup, and Tailwind CSS. It includes form validation and navigation using React Router.
  # Features:
   - Login Page:
       Users can enter their credentials (username and password) to log in.
       Upon successful login, users are redirected to the dashboard.
       Incorrect credentials trigger an error alert.
   -Signup Page:
       Users can register by providing a username, valid email, and password (with validation).
       Password must meet specific criteria (minimum 8 characters, contain uppercase letters).
       Validation errors are displayed for incorrect inputs.
       Upon successful registration, users are redirected to the dashboard.
     -Dashboard Page:
       # Sidebar Navigation:
             Users can toggle the visibility of the sidebar by clicking the menu icon (hamburger/close button).
             The sidebar contains different sections like Market, Categories, Orders, Favorites, Cart, Messages, Feedback, and Settings.
             Each section can be accessed by clicking its corresponding menu item.
             The currently active section is highlighted in the sidebar.
       # Search Bar:
             A search bar is available for users to search for products or categories.
             The search bar is hidden on smaller screens to maintain responsiveness.
       # Header Icons: 
             Notification Bell: Displays notifications related to the user’s activity.
             Shopping Cart Icon: Redirects to the user’s shopping cart to view current items.
             Profile Picture: Displays the user's profile image and offers quick access to profile settings.
       # Income Overview:
             Users can view their income metrics (daily, weekly, and monthly) in a summarized form.
             Income metrics are displayed with relevant icons and dollar amounts, showing financial performance at a glance.
       # Get Special Discounts:
             A highlighted section displays special discount offers available to the user.
             Users can click on the "Use Now" button to avail discounts on specific products.
       # Categories and Stock:
             A section showcasing various product categories (e.g., Veggies, Tubers, Fish, Fruits) along with the available              stock.
             Users can browse through these categories to check available inventory.
       # Popular Products:
             A dedicated section that highlights the most popular products on the platform.
             Users can browse or click "See All" to explore more popular items.
       # Top Items:
              Displays a selection of top-performing products that might interest users.
              These are arranged in a grid format for easy viewing.
       # Notifications:
             A section to view the latest notifications, such as "Fruit stock running low" or "New order received."
             Users can stay updated with important alerts and updates about their products and orders.
       # Latest Orders:
             Users can view recent orders in a table format, showing customer names, goods ordered, and order status.
             Buttons for accepting or viewing the status of each order are available.

       # Footer:
              A footer at the bottom of the page containing copyright information, ensuring all rights reserved to MarketEase.
 
   # Technologies Used
    -React: Frontend framework used for building the user interface.
    -Formik: Library for handling form state and submission.
    -Yup: Schema validation library for form inputs.
    -Tailwind CSS: Utility-first CSS framework for styling.
    -React Router: For routing between different pages (login, signup, and dashboard).

# Setup Instructions
1. Clone the repository:
    git clone https://github.com/Manikarnikayadav/DESTION-FRONTEND/auth-app.git
    cd auth-app

2.Install the dependencies:
   npm install

3.Start the development server:
   npm start

This will start the development server, and the application will be accessible at http://localhost:3000.

# Project Structure
      src/
         components/
           CategoryCard.jsx
           IncomeCard.jsx
           Notification.jsx
           ProductCard.jsx
           SidebarItem.jsx
         pages/
           Dashboard.jsx
           Login.jsx
           Signup.jsx
         App.js
         index.js

# Login Component
    File: src/components/Login.js
    Handles user authentication and form validation using React’s useState and useNavigate for navigation.
# Signup Component
    File: src/components/Signup.js
    Uses Formik and Yup for form management and validation. Handles signup process and password matching logic.

# How to Use
Login:
   Use username: "user" and password: "password" to successfully log in (currently hardcoded for demo purposes).
   On successful login, users will be redirected to the /dashboard page.

Signup:
   Enter a username, email, password, and confirm password.
   The password must meet validation criteria, and the confirm password field must match.
   On successful registration, users will be redirected to the /dashboard page.

# Future Improvements
Replace the hardcoded authentication logic with real API calls.
Add user session management (JWT tokens or cookies).
Implement better error handling for form submissions (e.g., API errors).


### This project is open-source and available under the MIT License.


