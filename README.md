# LinkedIn Profile API

A Dockerized **Fastify + TypeScript** REST API that reverse-engineers LinkedIn's internal **Voyager/Dash** endpoints to extract publicly visible profile information as structured JSON.

> **Disclaimer:** This project is built for educational and research purposes only. It is not affiliated with or endorsed by LinkedIn.

---

## Features

- Reverse-engineered LinkedIn Voyager/Dash API integration
- No browser automation (no Playwright)
- Fastify REST API with TypeScript
- Structured JSON response
- Dockerized for easy deployment
- Swagger/OpenAPI documentation
- Cookie-based authenticated requests

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Backend language |
| Fastify | REST API framework |
| Undici | HTTP client |
| Docker | Containerization |
| Swagger | API documentation |

---

## Project Structure

```text
tross_project/
│── src/
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

### POST `/api/v1/profile`

Extract publicly available information from a LinkedIn profile.

### Request

```json
{
  "url": "https://www.linkedin.com/in/username/"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "name": "Ayush Singh",
    "headline": "Student at IIIT Senapati, Manipur",
    "location": null,
    "about": null
  }
}
```

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/ayuxh16/tross_project.git
cd tross_project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file from `.env.example`:

```env
LI_AT=your_li_at_cookie
JSESSIONID="ajax:xxxxxxxxxxxx"
PORT=3000
```

### 4. Start the server

```bash
npm run dev
```

API:

```text
http://localhost:3000
```

Swagger:

```text
http://localhost:3000/docs
```

---

## Docker

### Build

```bash
docker build -t linkedin-profile-api .
```

### Run

```bash
docker run -p 3000:3000 --env-file .env linkedin-profile-api
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `LI_AT` | LinkedIn authentication cookie |
| `JSESSIONID` | LinkedIn CSRF session cookie |
| `PORT` | Server port |

---

## Available Scripts

```bash
npm run dev      # Development server
npm run build    # Compile TypeScript
npm start        # Production server
```

---

## How It Works

1. Accepts a LinkedIn public profile URL.
2. Extracts the profile's public identifier.
3. Sends authenticated requests to LinkedIn's internal Voyager/Dash endpoints.
4. Parses the returned JSON.
5. Returns structured profile information through a REST API.

---

## Author

**Ayush Singh**

- GitHub: https://github.com/ayuxh16
- LinkedIn: https://www.linkedin.com/in/ayush-singh-41395b2a2/
