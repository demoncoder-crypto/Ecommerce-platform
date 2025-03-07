# ShopHub E-Commerce Platform

A modern, full-stack e-commerce platform built with Next.js, TypeScript, Tailwind CSS, Prisma, and Stripe.

## Features

- **Responsive Design**: Fully responsive UI that works on all devices
- **User Authentication**: Secure login and registration with NextAuth.js
- **Product Management**: Browse, search, and filter products
- **Shopping Cart**: Add, remove, and update items in your cart
- **Checkout Process**: Secure payment processing with Stripe
- **Order Management**: View and track your orders
- **Admin Dashboard**: Manage products, orders, and users (for admin users)
- **Database**: Prisma ORM with SQLite (can be easily switched to PostgreSQL, MySQL, etc.)

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **Authentication**: NextAuth.js
- **Database**: SQLite (development), PostgreSQL (production)
- **Payment Processing**: Stripe
- **Styling**: Tailwind CSS, React Icons
- **Form Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/shophub.git
cd shophub
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your own values.

4. Set up the database
```bash
npx prisma migrate dev --name init
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── prisma/               # Prisma schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

This application can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [NextAuth.js](https://next-auth.js.org/) 