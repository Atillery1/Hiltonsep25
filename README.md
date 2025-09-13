# Hilton Norfolk The Main - Digital Concierge

A premium digital concierge platform for Hilton Norfolk The Main, delivering an intuitive and sophisticated guest experience through innovative mobile technology.

## Overview

This application serves as a comprehensive digital guide for hotel guests, providing real-time information about:

- Hotel restaurants and dining options
- Property amenities and facilities
- Local area attractions and businesses
- Transit and transportation options
- Internet connection information

## Key Features

- **Mobile-First Design**: Optimized for smartphone browsers with app-like navigation
- **Real-Time Status**: Live status updates for restaurants and amenities
- **Interactive Exploration**: Categorized local business listings with filtering
- **Quick Access**: One-tap calling and website navigation
- **Guest Feedback**: Integrated feedback mechanism to improve guest experience

## Technology Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **UI Components**: Shadcn UI, Lucide React icons
- **State Management**: React Query, React Hooks
- **Routing**: Wouter
- **Development Tools**: Vite, ESBuild, TypeScript

## Project Structure

- `/client`: Frontend React application
  - `/src/components`: Reusable UI components
  - `/src/lib`: Utility functions and data
  - `/src/pages`: Main application pages
- `/server`: Express.js backend server
- `/shared`: Shared types and schemas

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Access the application at http://localhost:5000

## Deployment

The application can be deployed to any static hosting service. The build process creates optimized assets in the `dist` directory.

```
npm run build
```

## License

Copyright © 2023-2025 Hilton Norfolk The Main. All rights reserved.