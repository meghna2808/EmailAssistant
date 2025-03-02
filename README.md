# AI-Powered Email Reply Generator

### Tech Stack: Spring Boot, React, Gemini AI, Firebase

## Overview
The **AI-Powered Email Reply Generator** is a web-based application that automates email responses using Google Gemini AI. This solution enhances email response efficiency, providing context-aware and intelligent replies in real time.

## Key Features
- **AI-Driven Reply Generation:** Automatically generates smart, context-based email replies.
- **Spring Boot WebFlux Backend:** Efficiently handles 100+ concurrent requests, ensuring high performance.
- **React Frontend with Material UI:** Modern user interface with optimized rendering, reducing UI load times by 40%.
- **Firebase Authentication & Firestore:** Secure user authentication and data storage.
- **Real-Time Response Generation:** Seamless integration with Google Gemini AI for prompt email replies.

## Architecture
1. **Frontend (React + Material UI):**
   - User-friendly interface for email input and reply generation.
   - Axios for API communication.

2. **Backend (Spring Boot WebFlux):**
   - Reactive API endpoints to handle asynchronous requests.
   - Google Gemini AI API integration.

3. **Database (Firebase Firestore):**
   - Storing user data and email logs.

4. **Authentication:**
   - Firebase Authentication for secure login.

## Installation & Setup
### Prerequisites:
- Node.js
- Java 17+
- Firebase Project with Firestore & Authentication enabled
- Google Gemini AI API Key

### Backend Setup:
```bash
# Navigate to backend folder
cd backend

# Build and run the Spring Boot application
./mvnw spring-boot:run
```

### Frontend Setup:
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start React app
npm start
```

## How It Works
1. User logs in using Firebase Authentication.
2. User inputs the email content.
3. The app sends a request to the backend API.
4. The backend processes the request, interacts with Google Gemini AI, and generates the email reply.
5. The frontend displays the generated reply to the user.

## Performance Optimization
- **Backend:** Leveraged Spring Boot WebFlux for non-blocking I/O operations.
- **Frontend:** Used React's memoization and lazy loading to improve rendering time.
- **Caching:** Implemented Firebase caching to reduce API call frequency.

## Results
- Increased email response efficiency by **60%**.
- Reduced UI load times by **40%**.
- Efficient handling of **100+ concurrent requests**.


