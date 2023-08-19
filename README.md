# SimpleKeeper Readme

SimpleKeeper is a mobile application project that aims to provide a simple and efficient way to manage and track various tasks and reminders. This document serves as a quick guide to get you started with the project.

## Installation

Before you begin, please ensure you have the following prerequisites installed:

- Node.js (v16 or later)
- npm (Node Package Manager)
- Git

Follow these steps to set up and run the SimpleKeeper project:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd SimpleKeeper
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

The project provides several scripts to help you with development and testing. You can run these scripts using the following commands:

- To start the Metro bundler (required for running the app):

  ```bash
  npm start
  ```

- To run the app on Android (ensure an Android emulator or device is connected):

  ```bash
  npm run android
  ```

- To run the app on iOS (requires Xcode and macOS):

  ```bash
  npm run ios
  ```

- To run linting using ESLint:

  ```bash
  npm run lint
  ```

- To fix linting issues automatically:

  ```bash
  npm run lint:fix
  ```

- To run tests using Jest:

  ```bash
  npm test
  ```

## Dependencies

SimpleKeeper uses a variety of dependencies to power its functionality. Some of the key dependencies include:

- **@react-native-async-storage/async-storage**: Asynchronous storage management for React Native.
- **@react-navigation/native**: Core navigation library for React Native apps.
- **@react-navigation/native-stack**: Stack navigation for React Native apps.
- **@reduxjs/toolkit**: Redux state management toolkit for efficient state handling.
- **axios**: Promise-based HTTP client for making API requests.
- **formik**: Form library for React.
- **luxon**: Library for working with dates and times in JavaScript.
- **react**: Core React library.
- **react-native**: Core React Native library.
- **react-native-safe-area-context**: Provides safe area insets for React Native apps.
- **react-native-screens**: Native navigation library for screens in React Native.
- **react-native-svg**: SVG library for React Native.
- **react-redux**: Official React bindings for Redux.
- **redux-persist**: Persist and rehydrate a Redux store.
- **toastify-react-native**: Library for displaying toasts in React Native apps.
- **yup**: Schema validation library.

For a complete list of dependencies, including development dependencies, please refer to the `package.json` file.

## Contributing

We welcome contributions to SimpleKeeper! If you would like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch for your work.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Submit a pull request to the `main` branch of the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For additional questions or support, please contact [your email address here].

Enjoy using SimpleKeeper to manage your tasks and reminders efficiently!
