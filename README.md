# Wedding Website

A modern, elegant wedding website built with Vue 3 + Vite.

Couple names are configured in `src/config/site.js` via `COUPLE_NAMES`.

## Project Setup

### Install Dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Deployment

This project is ready to be deployed to any static hosting service.

### Netlify

1. Connect your repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.

### Vercel

1. Import your project to Vercel.
2. It should automatically detect Vite and set the correct settings.
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Traditional Hosting

1. Run `npm run build`.
2. Upload the contents of the `dist` folder to your web server's public directory (e.g., `public_html`).
3. Ensure your server is configured to handle SPA routing (redirect all requests to `index.html`).

## Google Forms RSVP Integration

The RSVP form submits data to a Google Form. To make this work:

1.  Create a new Google Form with the following fields:
    - Full Name (Short answer)
    - Email Address (Short answer)
    - Will you be attending? (Multiple choice: "Yes", "No")
    - Number of Guests (Short answer or Number)
    - Dietary Restrictions (Paragraph)
    - Message (Paragraph)

2.  Get the "pre-filled link":
    - Click the three dots menu -> "Get pre-filled link".
    - Fill in dummy data for all fields.
    - Click "Get link" and copy it.

3.  Update `src/config/googleForm.js`:
    - Set `actionUrl` to the form URL, replacing `/viewform` with `/formResponse`.
    - Extract the `entry.XXXXXX` IDs from the pre-filled link and update the `fieldIds` object.

## Project Structure

- `src/views`: Page components (Home, Info, RSVP, etc.)
- `src/components`: Reusable UI components (Forms, Buttons, etc.)
- `src/composables`: Shared logic (RSVP submission)
- `src/config`: Configuration files
- `src/styles`: SCSS variables and global styles
- `src/router`: Vue Router configuration
- `src/components`: Reusable UI components

## Customization

- **Colors & Fonts**: Edit `src/styles/_variables.scss`
- **Content**: Edit the respective Vue files in `src/views`

## Localization Notes

- This project uses Vue I18n message syntax, where `@` has special meaning for linked messages.
- To render a literal `@` character in translation text, escape it as `{'@'}`.
- Example: use `your{'@'}email.com` instead of `your@email.com`.
- If a raw `@` is added in locale JSON, it can throw `Invalid linked format` at runtime.
