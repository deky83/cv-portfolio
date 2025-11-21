# Professional Portfolio Website

A modern, responsive portfolio website for a Web & WordPress Developer built with React and FastAPI.

## 🚀 Features

- **Hero Section** - Engaging introduction with code snippet visual
- **About & Skills** - Showcase of technical expertise and experience
- **Projects Portfolio** - Featured projects with images and technology badges
- **Contact Form** - Interactive contact form with validation
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
- Axios for API calls

### Backend
- FastAPI
- MongoDB (Motor async driver)
- Python 3.x
- Pydantic for data validation

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- MongoDB
- Yarn package manager

### Frontend Setup

```bash
cd frontend
yarn install
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

The backend will run on `http://localhost:8001`

### Environment Variables

**Frontend** (`frontend/.env`):
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend** (`backend/.env`):
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
```

## 📁 Project Structure

```
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSkills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ui/           # shadcn components
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   ├── data/
│   │   │   └── mockData.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
│
└── backend/
    ├── server.py
    ├── requirements.txt
    └── .env
```

## 🎨 Customization

### Update Your Information

1. **Personal Details**: Edit `frontend/src/components/HeroSection.jsx`
2. **Skills**: Modify `frontend/src/data/mockData.js` - `mockSkills` object
3. **Projects**: Update `frontend/src/data/mockData.js` - `mockProjects` array
4. **Contact Info**: Edit `frontend/src/components/ContactForm.jsx`

### Change Colors

The color scheme uses Tailwind CSS. Main colors are defined in:
- Primary: `indigo-600` (#4F46E5)
- Update in components by searching for `indigo-600` and replacing

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
cd frontend
yarn build
# Deploy the build folder to Vercel or Netlify
```

### Backend (Railway/Render)

- Push your code to GitHub
- Connect your repository to Railway or Render
- Set environment variables
- Deploy

## 📝 TODO (Backend Integration)

Currently, the contact form uses mock data. To enable real functionality:

1. Create MongoDB collections for contact submissions
2. Add POST endpoint in `backend/server.py`
3. Update `ContactForm.jsx` to call the API
4. Add email notification service (optional)

## 📄 License

Free to use for personal and commercial projects.

## 👤 Author

**Your Name**
- GitHub: [@deky83](https://github.com/deky83)
- Portfolio: [Your Website]

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

Made with ❤️ by deky83
