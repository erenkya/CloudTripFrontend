# CloudTripFrontend

<img width="1470" height="769" alt="Ekran Resmi 2025-08-11 14 34 30" src="https://github.com/user-attachments/assets/101e13ad-5e14-4fee-ad3c-f3b5545cd7de" />

<img width="1470" height="770" alt="Ekran Resmi 2025-08-11 14 35 15" src="https://github.com/user-attachments/assets/3cc7664d-772c-4d62-97bd-180556303624" />

<img width="489" height="355" alt="Ekran Resmi 2025-08-11 14 36 12" src="https://github.com/user-attachments/assets/65c316e7-73f3-42c7-9c04-218421600c3a" />

<img width="1470" height="448" alt="Ekran Resmi 2025-08-11 14 37 52" src="https://github.com/user-attachments/assets/1fe2cf6e-bb18-45d7-87b2-d21e26776255" />



CloudTripFrontend is a [Next.js](https://nextjs.org) web application for searching, booking, and managing flight reservations. It provides a modern UI for users to browse available flights, view purchase history, and manage their profile.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `src/app/page.js`: **Home Page**  
  Displays a hero section and a grid of all available flights. Users can browse and book flights.

- `src/app/search/page.jsx`: **Search Results Page**  
  Shows flights matching the user's search criteria (departure, arrival, date). Users can book flights from here.

- `src/app/purchaseHistory/page.jsx`: **Purchase History Page**  
  Lists all flights purchased by the logged-in user. Users can view details and cancel flights if eligible.

- `src/app/layout.js`:  
  Sets up global styles and fonts for the app.

- `src/components/Navbar.jsx`:  
  Navigation bar with search functionality, login/logout, and profile management.

- `src/components/HomeFlightCart.jsx`:  
  Card component for displaying individual flight details on the home and search pages.

- `src/components/PurchaseHistoryCart.jsx`:  
  Card component for displaying purchased flight details and cancellation options.

- `src/components/ui/`:  
  Reusable UI components (Button, Input, Card, Calendar, Popover, etc.).

## Pages Overview

- **Home (`/`)**:  
  Browse all available flights. Use the search bar in the navbar to filter flights by route and date.

- **Search (`/search`)**:  
  View flights matching your search. Accessible via the navbar search.

- **Purchase History (`/purchaseHistory`)**:  
  See your booked flights and cancel if needed.

- **Profile (`/profile`)**:  
  Manage your user profile (feature placeholder).

- **Login/Signup (`/login`, `/signup`)**:  
  Authenticate to access booking and purchase history features.

## Technologies

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com/)
- [clsx](https://github.com/lukeed/clsx)
- [class-variance-authority](https://cva.style/)
- [date-fns](https://date-fns.org/)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.

##
