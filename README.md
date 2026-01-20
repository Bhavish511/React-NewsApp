# React NewsApp

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![React Version](https://img.shields.io/badge/react-v18.0.0-blue.svg)

A modern news application built with React that fetches real-time news data. It features infinite scrolling, category-based filtering, and a smooth user interface.

## Features

- **Top Headlines**: View top news headlines from various categories.
- **Categories**: Filter news by categories such as Business, Entertainment, General, Health, Science, Sports, and Technology.
- **Infinite Scroll**: Seamlessly load more news articles as you scroll down using `react-infinite-scroll-component`.
- **Loading Bar**: Visual feedback during data fetching with `react-top-loading-bar`.
- **Responsive Design**: Optimized for different screen sizes.

## tech Stack

- **React**: Frontend library for building the user interface.
- **React Router**: For client-side routing and navigation.
- **Bootstrap**: For styling and responsive layout.
- **News API**: Source of news data (requires API key).
- **React Infinite Scroll Component**: For implementing the infinite scroll feature.
- **React Top Loading Bar**: For showing a loading progress bar.

## Project Structure

```bash
newsapp/
├── node_modules/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── News.js
│   │   ├── NewsItem.js
│   │   └── Spinner.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API key from [NewsAPI](https://newsapi.org/).

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd newsapp
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `.env.local` file in the root directory and add your News API key (note: this might be already set up or needed depending on your environment):

```env
REACT_APP_NEWS_API=your_api_key_here
```

### Running the App

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```bash
npm start
```

The page will reload when you make changes.
You may also see any lint errors in the console.

### Building for Production

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Screenshots

*(Add screenshots of your application here)*

## Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License.
