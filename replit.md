# Overview

This is a full-stack web application built with Express.js backend and React frontend, showcasing a personal portfolio website for an AI/ML engineer. The application uses modern web technologies including TypeScript, TailwindCSS, and shadcn/ui components to create a professional portfolio with sections for experience, projects, skills, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: TailwindCSS with CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for robust server-side development
- **Development**: tsx for TypeScript execution in development mode
- **Build Process**: esbuild for efficient backend bundling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database implementations

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL) for scalable cloud database hosting
- **Schema Management**: Centralized schema definitions in `shared/schema.ts` with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations and management

## Authentication and Authorization
- **Session Storage**: PostgreSQL session storage using connect-pg-simple for persistent sessions
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Validation**: Zod schemas for runtime type validation and data integrity

## Development and Deployment
- **Development Server**: Vite middleware integration with Express for hot reloading
- **Error Handling**: Runtime error overlay for development debugging
- **Production Build**: Separate client and server builds with static file serving
- **Environment**: Replit-optimized with cartographer plugin for enhanced development experience

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon Database driver for serverless PostgreSQL connections
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React

### UI and Styling
- **@radix-ui/***: Collection of accessible UI primitives for building the component system
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements

### Form Handling and Validation
- **react-hook-form**: Forms library for React with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation library

### Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-kit**: CLI tool for database migrations and schema management