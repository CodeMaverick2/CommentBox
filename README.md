# Comment Box

A simple React application for managing comments and replies with features for adding, editing, deleting, and sorting comments and replies. This project uses Redux for state management and is styled to be user-friendly and responsive.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- Add, edit, and delete comments
- Add, edit, and delete replies to comments
- Sort comments and replies by date
- Responsive and clean UI
- Data persists in local storage

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Redux**: State management library
- **Redux Toolkit**: Simplified Redux development
- **React-Redux**: Official React bindings for Redux
- **FontAwesome**: Icons for user interface

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CodeMaverick2/CommentBox.git
   cd CommentBox
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Adding Comments:**
   - Enter your name and comment in the provided fields and click "Post Comment."

2. **Editing Comments:**
   - Click "Edit" on a comment to modify its text. Click "Save" to apply changes.

3. **Deleting Comments:**
   - Click the delete button to remove a comment.

4. **Adding Replies:**
   - Click "Reply" on a comment to open the reply form. Enter your name and reply text, then click "Post Reply."

5. **Editing Replies:**
   - Click "Edit" on a reply to modify its text. Click "Save" to apply changes.

6. **Deleting Replies:**
   - Click the delete button to remove a reply.

7. **Sorting:**
   - Click "Sort By: Date" to sort comments and replies by date.

## Error Handling

- **Empty Comments:** If you try to submit a comment with an empty name or comment text, an alert will be shown asking you to provide both name and comment text.

- **Empty Replies:** If you try to submit a reply with an empty name or reply text, an alert will be shown asking you to provide both name and reply text.

- **Form Validation:** All input fields are validated before submission to ensure that no empty comments or replies are added.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
