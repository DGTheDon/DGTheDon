# {prompt}

This is a simple web application that allows users to perform various tasks.

## Installation

1. Clone the repository
2. Install the required dependencies by running `pip install -r requirements.txt`
3. Run the application using `python main.py`

## File Structure

- main.py: The main entry point of the application
- functions.py: Contains utility functions used throughout the application
- classes.py: Contains the classes and data models used in the application
- config.py: Contains the configuration settings for the application
- database.py: Handles database connections and operations
- templates/index.html: The main HTML template for the application
- templates/layout.html: The base layout for all HTML templates
- static/css/styles.css: Contains the CSS styles for the application
- static/js/scripts.js: Contains the JavaScript code for the application
- tests/test_functions.py: Contains unit tests for the utility functions
- tests/test_classes.py: Contains unit tests for the classes and data models
- requirements.txt: Lists the required dependencies for the application
- .gitignore: Specifies files and directories to be ignored by Git

## Shared Dependencies

1. Exported variables:
   - appConfig
   - userData

2. Data schemas:
   - UserSchema
   - PostSchema

3. ID names of DOM elements:
   - loginForm
   - signupForm
   - postList
   - createPostBtn

4. Message names:
   - LOGIN_SUCCESS
   - SIGNUP_SUCCESS
   - POST_CREATED
   - POST_DELETED

5. Function names:
   - loginUser
   - signupUser
   - createPost
   - deletePost
   - fetchPosts