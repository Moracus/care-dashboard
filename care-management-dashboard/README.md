# Care Management Dashboard

A responsive Care Management Dashboard built with React, TypeScript, and Tailwind CSS.

This project was developed as part of the Frontend Developer Internship assignment for Careflick.

---

## Features

### Users Management

* Fetch users from REST API
* Responsive user card layout
* Search users by name or email
* View user details in modal
* Add new users
* Edit existing users
* Delete users
* View submitted care forms for each user

### Care Forms

#### Comprehensive Health Assessment Form

* Resident Information
* Vital Signs
* Symptoms Tracking
* Caregiver Notes
* Daily Activities
* Nutrition Tracking
* Caregiver Signature

#### Incident Report Form

* Resident & Incident Details
* Incident Type Selection
* Incident Description
* Follow-up Actions
* Additional Notes

### Form Submission Management

* Associate forms with users
* Track multiple submissions per user
* View submitted forms inside user details

### Additional Features

* Responsive design
* Form validation using React Hook Form
* Modal-based UI
* Local state management using React Context API
* Error and loading states

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Form Handling

* React Hook Form

### API Integration

* Axios

### State Management

* React Context API
* React Hooks

### Utilities

* UUID generation using `crypto.randomUUID()`

---

## API Used

Users are fetched from:

https://jsonplaceholder.typicode.com/users

---

## Project Structure

```text
src/
│
├── components/
│   ├── common/
│   │   └── Modal.tsx
│   │
│   ├── users/
│   │   ├── UserCard.tsx
│   │   ├── UserModal.tsx
│   │   └── UserForm.tsx
│   │
│   └── forms/
│       ├── HealthAssessmentForm.tsx
│       └── IncidentReportForm.tsx
│
├── context/
│   └── AppContext.tsx
│
├── pages/
│   ├── UsersPage.tsx
│   └── CareFormsPage.tsx
│
├── services/
│   └── api.ts
│
├── types/
│   ├── user.ts
│   └── forms.ts
│
├── App.tsx
└── main.tsx
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
```

```bash
cd care-management-dashboard
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```


---

## Assumptions

* User CRUD operations are simulated using local state because the provided API is read-only.
* Form submissions are stored within application state.
* Each user can have multiple submitted care forms.
* Submitted forms are displayed within the user details modal.

---

## Future Improvements

* LocalStorage persistence
* Pagination for users
* Debounced search
* Toast notifications
* Dark mode
* Form submission history page
* Backend integration for persistent storage

---

## Author

Harsh Sharma

Frontend Developer
