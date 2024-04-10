# Frontend Repository

This project is a comprehensive React application utilizing Redux for state management and Styled-Components for component styling. It follows a structured file organization to maintain readability and scalability.

## Project Setup

### Technologies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Styled-Components**: Utilizes tagged template literals to style your components.

### Getting Started

To get a local copy up and running, follow these simple steps.

#### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- A soul for coding (just kidding, but enthusiasm helps!)

#### Installation

1. Clone the repo
```bash
git clone https://github.com/groupera/groupera-frontend.git
```
2. Install NPM packages
```bash
npm install
```
3. Copy the `.env.example` file to `.env` and update the variables to match your environment setup
```bash
cp .env.example .env
```

#### Running the project

```bash
npm start
```

This will run the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Folder Structure

- `public/`: Contains the static files like `index.html`.
- `src/`: Main source directory for the application.
    - `api/`: Contains Axios instances (`axiosInstances.js`) and interceptors (`axiosInterceptors.js`) for API calls.
    - `features/`: Redux logic including slices and services for different features like authentication (`auth/`).
        - `components/`: Reusable React components (`SignupForm.jsx`, `Login.jsx`).
        - `authService.js`: Service functions for authentication.
        - `authSlice.js`: Redux slice for auth state management.
    - `layouts/`: Layout components for the app (`AppLayout.jsx`, `AuthLayout.jsx`).
    - `styles/`: Global styles (`globalStyles.js`) and theme configurations (`theme.js`).
    - `util/`: Utility functions (`helperFunctions.js`).
    - `index.js`: The React App is being loaded into the root element on `public/index.html` 
    - `App.jsx`: The Top-Layer React component, where the redux store and global styles are initiated 
    - `Routing.jsx`: Routes are defined by using the npm package react-router-dom
- `.env`: Environment variables for production.
- `.env.example`: Example environment variables for setup reference.
- `package.json`: Project metadata and dependencies.
- `Procfile`: Used for deploying to certain cloud providers.

### Naming Conventions

- **Routing**: Lowercase and dash-separated URLs (e.g., `/auth/login`).
- **Components**: PascalCase for component files (e.g., `SignupForm.jsx`).
- **Services/Slices**: CamelCase for service and slice files (e.g., `authService.js`).

### Routing

React Router is used for handling routing in the app. Routes are defined in the `Routing.jsx` file.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.

## Contact

Fritz Meyer - [https://github.com/meyerfr](https://github.com/meyerfr) - fritz.meyer@code.berlin

Project Link: [https://github.com/groupera/groupera-frontend](https://github.com/groupera/groupera-frontend)


## Further Infos

### Authentication Setup

The authentication in this project is handled using axios along with axiosInterceptors to manage JWT (JSON Web Tokens) effectively. When a user logs in, the backend provides a JWT that is valid for 10 minutes and is stored in the local storage. This token is used to authenticate subsequent requests to the server.

To handle token expiration seamlessly, axiosInterceptors are configured. If a response indicates that the token has expired, the interceptor automatically initiates a token refresh process. This process involves sending a refreshToken, which is securely stored in a cookie, back to the server to request a new authentication token. Upon receiving the new token, it replaces the old token in the local storage, and the previously failed request is retried with the new token.

This setup ensures that the user's session remains active beyond the initial 10-minute token lifespan, without requiring them to manually re-authenticate. The entire flow is designed to be transparent to the user, providing a smooth and uninterrupted experience.