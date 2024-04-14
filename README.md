# Portfolio Website - Fritz Meyer

Welcome to the repository for my personal portfolio website. This site showcases my projects and skills in a sleek, user-friendly interface. Built with React and styled-components, it delivers a seamless and responsive experience across all devices.

## Features

- **Responsive Design**: Ensures the website looks great on any screen size and device, adapting layout and content for the best user experience.
- **Device-Specific Functionality**: Integrates `react-device-detect` to tailor content and functionality according to the device accessing the website, enhancing performance and usability.

## Technology Stack

- **React**: A JavaScript library for building user interfaces with component-based architecture.
- **Styled Components**: Utilized for styling individual components with encapsulated CSS, promoting reusability and cleanliness.
- **React Device Detect**: Employs this npm package to detect the device type (mobile, tablet, desktop) and adjust features accordingly.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer to run this project locally. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/meyerfr/portfolio.git fritz-portfolio
   ```
2. Navigate to the project directory:
   ```bash
   cd fritz-portfolio
   ```
3. Copy the `.env.example` file to `.env` and update the variables to match your environment setup
    ```bash
    cp .env.example .env
    ```
4. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```
This will launch the website on `http://localhost:8080`. Open your browser and navigate to this address to view the application.

## Contributing

Feel free to fork this repository and submit pull requests. You can also send me patches or just open an issue discussing the changes you wish to make.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

---

This README should help anyone interested in your project to get started quickly and contribute effectively. It's direct and provides all the necessary details for engaging with your codebase.