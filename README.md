# Rails Girls Kenya - Workshop Repository

Welcome to the **Rails Girls Kenya** repository! This project supports the Rails Girls workshop initiative, helping participants in Kenya explore web development using **Ruby on Rails**.

## 🌟 Overview

Rails Girls workshops are beginner-friendly sessions aimed at introducing participants to web application development. Through this repository, you'll find resources to set up and run the workshop locally, including guides and example code for building a Rails application.

---

## 🚀 Getting Started

### Prerequisites

To run this repository locally, ensure you have the following installed:

- **Ruby** (version 3.0 or higher)
- **Rails** (version 7.0 or higher)
- **Bundler**
- **Node.js** and **Yarn**
- **SQLite3** (or another supported database)

### Setting Up the Project Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RailsGirlsKenya/workshop.git
   cd workshop
   ```

2. **Install Dependencies**  
   Run the following commands to install Ruby and JavaScript dependencies:

   ```bash
   bundle install
   yarn install
   ```

3. **Set Up the Database**  
   Create and migrate the database:

   ```bash
   rails db:setup
   ```

4. **Run the Application**  
   Start the Rails server locally:
   ```bash
   rails server
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.

---

## 🌱 Contributing

We welcome contributions to improve this repository! Here's how you can get involved:

### 1. Fork the Repository

Click the **Fork** button at the top right of this repository to create your copy.

### 2. Make Your Changes

- Clone your forked repository locally.
- Create a new branch for your changes:
  ```bash
  git checkout -b my-feature-branch
  ```
- Make your edits and commit them with a clear message:
  ```bash
  git commit -m "Add feature XYZ"
  ```

### 3. Submit a Pull Request

- Push your changes to your fork:
  ```bash
  git push origin my-feature-branch
  ```
- Open a pull request on the main repository, explaining the changes you’ve made.

### 4. Code of Conduct

Please follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a positive and welcoming environment.

---

## 📧 Contact Us

For questions or feedback, reach out to us at **info@railsgirlskenya.org**.

Thank you for supporting Rails Girls Kenya! 🎉
