# Weekly Report Microservice

A simple Node.js microservice that sends a POST request to a specified API endpoint every Monday at 5 AM.

## Features

- Scheduled POST requests using node-cron
- TypeScript for type safety with direct execution using Node.js `--experimental-strip-types` feature
- Configurable API endpoint and schedule
- Comprehensive logging

> **Note:** When using the `--experimental-strip-types` feature, all local imports must include file extensions (e.g., `import { config } from './config.ts'` instead of `import { config } from './config'`). This is required by the Node.js ESM loader.

## Requirements

- Node.js (v18.17.0 or higher required for the `--experimental-strip-types` feature)
- npm or yarn

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd cron-microservice
   ```

2. Install dependencies:
   ```
   npm install
   ```


## Configuration

Configuration is managed through environment variables using a `.env.local` file. A template file `.env.example` is provided as a reference.

1. Copy the example file to create your local configuration:
   ```
   cp .env.example .env.local
   ```

2. Edit the `.env.local` file to customize your settings:

   ```
   # API Configuration
   API_URL=http://localhost:3000/api/weekly-report

   # Schedule Configuration (every Monday at 5 AM)
   SCHEDULE_DAY_OF_WEEK=1
   SCHEDULE_HOUR=5
   SCHEDULE_MINUTE=0

   # Logging Configuration
   LOG_LEVEL=info
   LOG_TIMESTAMPS=true
   ```

The following settings can be configured:

- `API_URL`: The target API endpoint (default: 'http://localhost:3000/api/weekly-report')
- `SCHEDULE_DAY_OF_WEEK`: Day of the week for the scheduled task (0-6, where 0 is Sunday, 1 is Monday, etc.)
- `SCHEDULE_HOUR`: Hour of the day for the scheduled task (0-23)
- `SCHEDULE_MINUTE`: Minute of the hour for the scheduled task (0-59)
- `LOG_LEVEL`: Logging level ('info' or 'debug')
- `LOG_TIMESTAMPS`: Whether to include timestamps in logs ('true' or 'false')

## Usage

### Starting the service

```
npm start
```

This will start the microservice using Node.js with the `--experimental-strip-types` flag, which allows running TypeScript code directly without requiring a build step. The service will run in the background and send a POST request to the configured API endpoint according to the schedule.

### Development mode

```
npm run dev
```

This will start the service using ts-node, which is useful during development as it provides better error messages and debugging capabilities.

### Testing

There are two ways to test the service:

1. Using the dedicated test script:

```
npm test
```

This will run a test script using Node.js with the `--experimental-strip-types` flag that directly calls the API endpoint and logs the response.

2. Alternatively, you can uncomment the following line in `src/index.ts`:

```typescript
// sendWeeklyReportRequest();
```

Then run the service:

```
npm start
```

## Logs

The service logs information about:
- Service startup
- Scheduled task configuration
- API request attempts
- API responses
- Any errors that occur

## License

ISC
