# Portfolio Website Template

This is a modern, customizable portfolio website built with React, Vite, and Tailwind CSS. It is designed for developers and creators who want to showcase their work, skills, and contact information. You can easily edit and deploy this template for your own use!

## Features
- ⚡ Fast and lightweight (Vite + React)
- 🎨 Styled with Tailwind CSS
- 🗂️ Project grid/list section
- 📝 About, Projects, Resume, and Contact pages
- 📧 Contact form with EmailJS integration (no backend required)
- 🖼️ Responsive and mobile-friendly
- 🧩 Easy to customize and extend

## Demo
> Add your deployed link here after deployment (e.g. [https://your-portfolio.vercel.app](https://portfolio-website-satyarth-ranjans-projects.vercel.app/))

## Getting Started

### 1. Clone the Repository
```
git clone https://github.com/Satyarthranjan8051/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies
```
npm install
```

### 3. Start the Development Server
```
npm run dev
```
Visit `http://localhost:5173` in your browser.

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/), sign in with GitHub, and import your repo.
3. Click "Deploy". Vercel will auto-detect Vite and deploy your site.
4. Get your live URL and add a custom domain if you want.

### Deploy to Netlify
1. Push your code to GitHub.
2. Go to [Netlify](https://netlify.com/), sign in, and link your repo.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Click "Deploy".

## Customization

- **Edit content:**
  - Update your info in `src/Pages/About.jsx`, `src/Pages/Projects.jsx`, and `src/Pages/Resume.jsx`.
  - Add/remove projects in `src/Pages/Projects.jsx`.
  - Update the hero section in `src/components/Hero/Hero.jsx`.
- **Change images:**
  - Replace images in `src/assets/` and `images/` folders.
- **Navbar & Routing:**
  - Edit navigation in `src/components/Navbar/Navbar.jsx` and routes in `src/routes/Allroutes.jsx`.
- **Contact Form:**
  - Uses [EmailJS](https://www.emailjs.com/) for backendless email delivery.
  - To use your own EmailJS account:
    1. Create a free account at [EmailJS](https://www.emailjs.com/).
    2. Set up an email service and template (see their docs).
    3. Replace the `service ID`, `template ID`, and `public key` in `src/Pages/Contact.jsx` with your own.

## EmailJS Setup (for Contact Form)
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Add an email service (e.g., Gmail).
3. Create an email template with variables: `name`, `email`, `title`, `message`.
4. Get your Service ID, Template ID, and Public Key from the EmailJS dashboard.
5. Replace the placeholders in `src/Pages/Contact.jsx`:
   ```js
   emailjs.send(
     "your_service_id",
     "your_template_id",
     {
       name: form.name,
       email: form.email,
       title: form.title,
       message: form.message,
     },
     "your_public_key"
   )
   ```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Credits

This template was originally based on an open-source starter. All features, pages, and improvements were added by Satyarth Ranjan. Feel free to use, modify, and share!
