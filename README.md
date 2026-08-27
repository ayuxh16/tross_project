# LinkedIn Profile API

> A Dockerized **Fastify + TypeScript** REST API that reverse-engineers LinkedIn's internal Voyager/RSC responses to extract publicly visible profile information as structured JSON using **Playwright**.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-5-black?logo=fastify)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-Automation-2EAD33?logo=playwright&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

> **Educational Disclaimer:** This project is intended for educational and research purposes only. It is not affiliated with or endorsed by LinkedIn.

---

## Features

- Extract public LinkedIn profile information from a profile URL
- Fastify REST API with TypeScript
- Playwright-powered authenticated scraping
- Dockerized for one-command deployment
- Swagger/OpenAPI interactive documentation
- Environment variable based authentication

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Backend language |
| Fastify | REST API framework |
| Playwright | Browser automation |
| Docker | Containerization |
| Swagger | API documentation |

---

## Architecture

```text
                Client Application
                        │
                        ▼
          POST /api/v1/profile
                        │
                        ▼
              Fastify Route Layer
                        │
                        ▼
                Profile Controller
                        │
                        ▼
               Voyager Service
                        │
                        ▼
       Playwright + LinkedIn Voyager
                        │
                        ▼
            Structured JSON Response
```

---

## Project Structure

```text
linkedin-profile-api/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   │   └── linkedin/
│   ├── utils/
│   ├── types/
│   └── server.ts
│
├── Dockerfile
├── .dockerignore
├── .env.example
├── package.json
└── tsconfig.json
```

---

## API Endpoint

### Scrape LinkedIn Profile

**POST** `/api/v1/profile`

### Request

```json
{
  "url": "https://www.linkedin.com/in/johndoe/"
}
```

### Successful Response

```json
{
  "success": true,
  "data": {
    "name": "John Doe",
    "headline": "Software Engineer",
    "location": "Bengaluru, Karnataka, India",
    "about": "Building scalable backend systems..."
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Invalid LinkedIn profile URL"
}
```

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/ayuxh16/linkedin-profile-api.git
cd linkedin-profile-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file from `.env.example`

```env
LI_AT=your_linkedin_li_at_cookie
JSESSIONID="ajax:xxxxxxxx"
PORT=3000
```

### 4. Start development server

```bash
npm run dev
```

Server runs at:

```text
http://localhost:3000
```

Swagger documentation:

```text
http://localhost:3000/docs
```

---

## Docker

### Build the image

```bash
docker build -t linkedin-profile-api .
```

### Run the container

```bash
docker run -p 3000:3000 --env-file .env linkedin-profile-api
```

The API will be available at:

```text
http://localhost:3000
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `LI_AT` | LinkedIn authentication cookie |
| `JSESSIONID` | LinkedIn CSRF session cookie |
| `PORT` | Server port (default: `3000`) |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Compile TypeScript |
| `npm start` | Run production build |

---

## Roadmap

- Experience & Education extraction
- Skills & Certifications endpoint
- Request rate limiting and caching

---

## Author

**Ayush Singh**

- GitHub: https://github.com/ayuxh16

---

## License

This project is licensed under the **MIT License**.
