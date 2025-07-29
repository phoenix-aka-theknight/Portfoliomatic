# Goblin Infotech Portfolio Website

## Overview

This is a professional portfolio website for Goblin Infotech, a web development company based in Vidyanagar, Hubli, Karnataka. The application is built as a full-stack web solution featuring a modern React frontend with a Node.js/Express backend, designed to showcase the company's services, portfolio, and facilitate client contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 29, 2025)

✓ Updated founder information:
  - Md Faadil Shaikh: Co-Founder & Lead Developer (Data Science, Advanced Python, MERN stack, 3rd year BE AIML student)
  - Manjunath Giraddi: Co-Founder & Frontend Specialist (Frontend development, DBMS MySQL, Authentication Designs)

✓ Improved hero section with smoother banner transition (full-height with better gradient)

✓ Enhanced technical expertise section with actual programming language icons instead of solid color blocks

✓ Created dedicated pricing page (/pricing) with detailed pricing tiers:
  - Basic Package: ₹10,000-₹15,000 (templates)
  - Premium tiers: ₹25,000-₹1,00,000+ (custom solutions based on tech stack and integrations)
  - Add-on services section

✓ Updated navigation to support both section scrolling and page routing

✓ Optimized mobile navigation:
  - Reduced icon sizes for less dominating appearance
  - Smaller mobile menu width (280px instead of 300-400px)
  - Compact button spacing and padding
  - Responsive logo sizing

✓ Fixed mobile banner positioning:
  - Added top padding on mobile to prevent navigation overlap
  - Improved responsive text sizing for better mobile display
  - Removed database integration as requested

✓ Prepared for Vercel deployment:
  - Converted to static frontend-only build
  - Contact form now uses mailto links (works without server)
  - Added vercel.json configuration for automatic deployment
  - Created deployment guides and documentation
  - Build successfully tested and optimized for production

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and interactions
- **Theme**: Dark/light mode support with custom theme provider

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript
- **API Style**: RESTful API endpoints
- **Middleware**: Custom logging and error handling
- **Development Server**: Vite integration for hot reload during development

### Build System
- **Frontend Build**: Vite for fast development and optimized production builds
- **Backend Build**: ESBuild for server-side bundling
- **Development**: Concurrent development setup with Vite dev server and Express API

## Key Components

### Core Pages and Sections
1. **Hero Section**: Company introduction with call-to-action buttons
2. **About Section**: Team information and company overview
3. **Services Section**: Web development services offered
4. **Portfolio Section**: Showcase of completed projects
5. **Testimonial Section**: Client feedback and reviews
6. **Pricing Section**: Three-tier pricing structure (Basic, Premium, Enterprise)
7. **Contact Section**: Contact form and company information
8. **Footer**: Company links and social media

### UI Component System
- Comprehensive design system using shadcn/ui
- Radix UI primitives for accessibility and functionality
- Custom theme with CSS variables for consistent branding
- Responsive design with mobile-first approach
- Dark/light theme toggle functionality

### Form Handling
- Contact form with validation using React Hook Form and Zod
- Form submission handled through API endpoints
- Toast notifications for user feedback
- Error handling and validation display

## Data Flow

### Contact Form Flow
1. User fills out contact form with personal details and message
2. Form data validated client-side using Zod schema
3. Data submitted to `/api/contact` endpoint via POST request
4. Server validates data and stores in memory storage
5. Success/error response sent back to client
6. Toast notification displayed to user

### Data Storage
- **Current**: In-memory storage using JavaScript Maps
- **Schema**: Drizzle ORM schemas defined for future database integration
- **Models**: User and Contact entities with TypeScript interfaces

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack React Query
- **Validation**: Zod with Drizzle-Zod integration
- **Animations**: Framer Motion
- **Utilities**: date-fns for date handling

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM (configured for PostgreSQL)
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Linting/Formatting**: TypeScript configuration for strict type checking

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend build output served by Express in production

### Environment Configuration
- Development mode uses Vite dev server with API proxy
- Production mode serves static files from Express
- Environment variables for database configuration
- NODE_ENV-based conditional logic for development features

### Database Setup
- Drizzle configuration points to PostgreSQL database
- Migration system ready for schema deployment
- Environment variable (`DATABASE_URL`) required for database connection
- Current implementation uses in-memory storage as fallback

### Hosting Considerations
- Designed for deployment on platforms supporting Node.js
- Static file serving handled by Express
- Database migrations can be run via `npm run db:push`
- Environment variables need to be configured for production database

## Development Workflow

### Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Start production server
- `npm run check`: TypeScript type checking
- `npm run db:push`: Push database schema changes

### Project Structure
- `/client`: Frontend React application
- `/server`: Backend Express application
- `/shared`: Shared TypeScript types and schemas
- `/dist`: Build output directory
- Configuration files in project root

The application follows modern web development best practices with type safety, responsive design, and a scalable architecture that can easily accommodate future enhancements like database integration, user authentication, and additional features.