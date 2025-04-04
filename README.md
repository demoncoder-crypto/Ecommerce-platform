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

