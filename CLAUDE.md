# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Root Commands (Monorepo)
- `bun run dev` - Start all development servers in parallel
- `bun run dev:web` - Start web development server (excluding Stripe)
- `bun run build` - Build all packages and applications
- `bun run lint` - Run ESLint across all packages
- `bun run lint:fix` - Fix ESLint issues automatically
- `bun run format` - Check code formatting with Prettier
- `bun run format:fix` - Fix formatting with Prettier
- `bun run typecheck` - Run TypeScript type checking
- `bun run db:push` - Push database schema changes to PostgreSQL

### Next.js App Commands
- `bun run dev` - Start Next.js development server
- `bun run build` - Build Next.js application (includes contentlayer build)
- `bun run start` - Start Next.js production server
- `bun run lint` - Run Next.js ESLint
- `bun run format` - Format Next.js code with Prettier

### Database Commands
- `bun run db:push` - Push Prisma schema changes to database (from packages/db)
- `bun run db:generate` - Generate Prisma client
- `bun run format` - Format Prisma schema and TypeScript files

## Architecture Overview

### Monorepo Structure
This is a Turborepo-managed monorepo with the following structure:

- **apps/** - Main applications
  - `nextjs/` - Primary Next.js 14 web application using App Router
  - `auth-proxy/` - Authentication proxy service
- **packages/** - Shared packages
  - `api/` - tRPC API utilities and server setup
  - `auth/` - Authentication utilities (Clerk/NextAuth.js)
  - `common/` - Shared TypeScript types and utilities
  - `db/` - Database layer (Prisma + Kysely)
  - `stripe/` - Stripe payment integration
  - `ui/` - Shared React UI components
- **tooling/** - Development configurations
  - ESLint, Prettier, Tailwind, TypeScript configs

### Key Technologies
- **Framework**: Next.js 14.2.5 with App Router
- **Language**: TypeScript 5.4.5
- **Package Manager**: Bun 1.1.10
- **Database**: PostgreSQL with Prisma ORM and Kysely query builder
- **Authentication**: Clerk (primary) with NextAuth.js support
- **UI**: Tailwind CSS, Shadcn/ui, Radix UI primitives
- **State Management**: Zustand, TanStack Query
- **API**: tRPC for type-safe APIs
- **Email**: React Email with Resend
- **Payments**: Stripe integration
- **Analytics**: Vercel Analytics, PostHog

### Database Architecture
- PostgreSQL as primary database
- Prisma manages schema and migrations
- Kysely provides type-safe SQL queries
- Schema supports multi-tenant SaaS with customer subscriptions

### Authentication Flow
- Clerk is the primary authentication provider
- NextAuth.js is available as alternative
- GitHub OAuth integration
- Admin accounts configured via ADMIN_EMAIL env var

### UI Component Architecture
- Components built with Radix UI primitives
- Shadcn/ui component library
- Tailwind CSS for styling
- Framer Motion for animations
- Dark/light theme support with next-themes

### API Structure
- tRPC provides type-safe APIs
- Routes defined in `apps/nextjs/src/trpc/`
- Procedures organized by feature (auth, stripe, etc.)
- Server-side rendering with Next.js App Router

## Development Notes

### Environment Setup
1. Copy `.env.example` to `.env.local`
2. Required env vars: Database URL, Clerk keys, Stripe keys, Resend API
3. Run `bun install` to install dependencies
4. Run `bun run db:push` to initialize database

### Code Style
- ESLint configuration extends custom configs in tooling/
- Prettier for consistent formatting
- TypeScript strict mode enabled
- Component naming: PascalCase for components, camelCase for utilities

### Database Changes
1. Update schema in `packages/db/prisma/schema.prisma`
2. Run `bun run db:push` to update database
3. Types are automatically generated

### Building & Deployment
- Build all packages with `bun run build`
- Next.js app outputs to `.next/`
- Turborepo handles build orchestration
- Vercel deployment recommended

### Contribution Guidelines
- All contributions follow discussion-first approach
- No breaking changes allowed
- UI/UX must remain consistent
- Large features require draft PR for discussion