# nebr-app

A NestJS backend API application with TypeORM and PostgreSQL.

## Tech Stack

- **Framework:** NestJS v11 (TypeScript)
- **Runtime:** Node.js
- **Database:** PostgreSQL via TypeORM
- **ORM:** TypeORM with auto-schema synchronization

## Project Structure

```
src/
  main.ts           - Application entry point (port 5000)
  app.module.ts     - Root module with TypeORM config
  app.controller.ts - Main controller
  app.service.ts    - Main service
test/               - E2E tests
```

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (set by Replit)
- `PORT` - Server port (defaults to 5000)

## Running

```bash
npm run start:dev   # Development with hot-reload
npm run build       # Compile TypeScript
npm run start:prod  # Production (node dist/main)
```

## Deployment

- Target: Autoscale
- Build: `npm run build`
- Run: `node dist/main`
