# Coffee Brew Log

Coffee Brew Log is a full-stack web application that allows users to record and manage coffee brewing sessions. Users can create, view, filter, edit, and delete brew entries through a React frontend connected to a Django REST Framework API backed by an SQLite database.

## Features

- Create new coffee brew entries
- View all saved brews
- Filter brews by brewing method
- Edit existing brews
- Delete brews
- Form validation
- Responsive user interface

## Tech Stack

### Frontend

- React
- Vite
- Axios
- Bootstrap 5

### Backend

- Django
- Django REST Framework

### Database

- SQLite

### Version Control

- Git
- GitHub

## Project Structure

coffee-brew-log/
│
├── backend/
│   ├── brews/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Documentation.md
├── deployment.md
└── .env.example

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd coffee-brew-log
```

## Backend Setup

Navigate into the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment (Windows Git Bash):

```bash
source venv/Scripts/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

## Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

## Validation

The application validates that:

- All required fields are completed
- Rating is between 1 and 5
- Brewing method matches the available options
- Numeric fields accept valid numbers

## Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

```
## Future Improvements

- Add coloured rating badges
- Display coffee and water icons
- Add additional brewing methods
- Improve validation messages
- Enhance UI styling and branding
