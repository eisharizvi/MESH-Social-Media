# CSCI2020U Winter 2024 - Final Project

# MESH SOCIAL MEDIA

## Group Members 🤝

- Eisha Rizvi
- Humaiyun Uddin
- Sadhna Drall
- Mridul Sharma

## Overview  :page_with_curl:
Our project aims to create a dynamic and engaging social media full-stack web app that involves social networking and bringing people together from all backgrounds. Our program, which is client-server based and heavily focused on user experience and interaction, offers seamless sharing and collaboration. 

With the help of our software, users may share stories, and uncover new ideas in a virtual community that goes beyond simple communication. By placing a strong focus on user experience and interaction, we hope to create a platform that is approachable, intuitive, and motivating. 

Our website features, which include personalized feeds and intuitive user interfaces, will provide users a seamless and engaging experience. You may engage with friends, discover new interests, and talk about your passions on our social media app.

### Concepts Used
Since this course covered a vast amount of concepts, we tried our best to use as many concepts as possible to an app that we all wanted to make. We settled for a Social Media web application, where users can view and share basic posts. Below is a summary of all the concepts we used to develop this web application, all of which were covered during weekly lectures.

#### Concept 1: Client-Server Architecture
- Separated `client` and `Server` folders to hold the frontend and backend respectively
- **Frontend:** React + Tailwind CSS
  - We decided to use these libraries because it made developing the frontend much more intuitive. Since React uses a Component-based approach, we found it much easier to iterate development compared to vanilla HTML/CSS/JS.
- **Backend:** Java + Jakarta + GlassFish
  - Used best practices as learned through lectures and labs.

#### Concept 2: REST API Service
- REST API service using Java, Jakarta EE, and GlassFish
- Includes all kinds of methods for data transfer and processing (i.e., GET, POST, DEL, PUT/PATCH)
- We use JSON for data representation and transfer between client and server
- Additionally, we tried our best to use all the best practices. Notably:
  - Proper status codes for success or failure (i.e., 2xx, 4xx, 5xx codes)
  - Formatted Response objects with info such as success message, payload, and status code

#### Concept 3: HTTP Requests
- Main way our frontend and backend communicated
- The client and server communicate via HTTP requests with JSON payloads and all necessary headers
- As mentioned in concept 2, we used a variety of request types, such as GET and POST.

#### Concept 4: HTML/CSS/JS
- A core part of this project is the use of React and Tailwind over vanilla HTML/CSS/JS
- All group members agreed to use these technologies as it's something we all wanted experience with
- Learned and used a bunch of concepts such as `fetch`, `JSX` which allows HTML to be written directly in JavaScript, `React Hooks` (e.g., useState, useEffect), and many more. 

#### Concept 5: Files and Java I/O
- Used json files to store mock post info
- `BufferedReader` was used to efficiently read and process the file. Which would then get parsed to a JSON payload accessible by the front end via a GET request.
- `BufferedWriter` and `FileWriter` to write new posts. Since using a Database was out-of-scope for this project, we opted to simply read/write the posts.json file.

#### Concept 6: Parallel Programming (Threading)
- `ExecutorService` was used for asynchronous handling (i.e., Threading) of tasks (e.g., reading files), as this helped increase the REST API response time

#### Concept 7: Caching 
- Since using a database was out-of-scope, we decided to use the web browser's `localStorage` for caching. This allowed us to significantly increase frontend performance, and reduce stress on the backend by preventing many unnecessary reads and writes.

#### Concept 8: Search Engine
- A search engine was attempted to be implemented but we were a bit short on time to implement it to the front end. 
- It is fully operational and uses threading to search through all the files
- If the users uses quotation marks it searches for the full query as a phrase but if the user searches individual words it returns all posts containing those words (in any order)
![](images/search1.webp)
![](images/search2.webp)

## How to run

Firstly, clone the repository.

### Server

Follow the steps below to get the GlassFish server running.

1. Open the `Server` folder in IntelliJ
2. Create a GlassFish Run Configuration like the picture below. 
   - **Server Configuration**
    ![](images/configure1.webp) 

   - **Deployment Configuration**
    ![](images/configure2.webp)
    
   - **Run the GlassFish Server**
    ![](images/configure3.webp)

3. Confirm the server is running by visiting `http://localhost:8080/Server-1.0-SNAPSHOT/api/posts` in your browser
    - The server is running successfully if you see a JSON array of mock posts similar to the below image.
    ![](images/configure4.webp)

### Client

Follow the steps below to get the client up and running.

⚠ **Note:** Since we opted to use a React + Tailwind CSS frontend, you will need Node.js installed on your computer in order to install the necessary npm packages.

0. Visit https://nodejs.org/en/download and install Node.js if you do not have it

1. Open the `client` folder in *Visual Studio Code* (VSCode)
2. Open an integrated VSCode terminal (any terminal of your choice will work as long as you `cd` to the `client` directory)
3. Install the required packages by entering `npm i`
    ![](images/configure5.webp)
4. Run the client by entering `npm run dev`
    ![](images/configure6.webp)   
5. Confirm the client is working by visiting `http://localhost:5173/` in your browser. The client is running successfully if you see a website like the image below. 
    ![](images/configure7.webp)
    
## Technologies Used

- **Frontend**: HTML, CSS, React, Tailwind CSS, JSX
- **Backend**: Node.js (npm), Java, Jakarta EE, GlassFish

## Additional Resources
- Tailwind CSS for styling
  - https://tailwindcss.com/docs/
- React to make the frontend UI
  - https://react.dev/
  - https://vitejs.dev/guide/
- Mockaroo for generating mock postsdata
  - https://www.mockaroo.com/ 
- React Router Dom for URL route handling
  - https://reactrouter.com/en/main

## Contribution Report
- Eisha Rizvi - 25% - frontend/backend/readme
- Sadhna Drall - 25% - frontend/backend/readme
- Humaiyun Uddin - 25% - frontend/backend/readme
- Mridul Sharma - 25% - frontend/backend/readme