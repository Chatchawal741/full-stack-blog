# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### frontend
- [React-beta@19.xx]()
- [Imagekits](https://imagekit.io/) - reduce image quality and loading placeholders / get image from api
- [Router-dom](https://reactrouter.com/en/main)
- [Tailwind css](https://tailwindcss.com/)
- [Clerk](https://clerk.com/) - authentication
- [Text-editor](https://quilljs.com/docs/quickstart) - react-quill
- [react-query](https://tanstack.com/query/v5/docs/framework/react/overview)

### backend
- [Express@5.x.x](https://expressjs.com/en/5x/api.html) - beta version
- [MongoDB](https://www.mongodb.com/) - no sql
- [Mongoose](https://mongoosejs.com/) - tools for mongodb object modeling
- [ClerkWebhook](https://clerk.com/) - webhook listening events
- [Ngrok](https://ngrok.com/) - forwarding localhost URL through ngrok http
#### [Verify webhook request using SVIX](https://clerk.com/docs/webhooks/sync-data#install-svix)

```
npm install svix
```
#### [Clerk express SDK](https://clerk.com/docs/references/express/overview) - adding authentication with CLERK MIDDLEWARE

```
npm i @clerk/express
```