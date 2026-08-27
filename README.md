# LinkedIn Profile API

A Dockerized **Fastify + TypeScript** REST API that reverse-engineers LinkedIn's internal Voyager/RSC responses to extract publicly visible profile information using **Playwright**.

> **Disclaimer:** This project is built for educational and research purposes only. It is not affiliated with or endorsed by LinkedIn.

---

## Features

* Extract profile data from a LinkedIn profile URL
* Fastify REST API with TypeScript
* Playwright-powered authenticated scraping
* Docker support for one-command deployment
* Environment variable based authentication
* Swagger/OpenAPI documentation

---

## Tech Stack

| Technology | Purpose            |
| ---------- | ------------------ |
| TypeScript | Backend language   |
| Fastify    | REST API framework |
| Playwright | Browser automation |
| Docker     | Containerization   |
| Swagger    | API documentation  |

---

## Project Structure

```text
linkedin-profile-api/
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

### Scrape LinkedIn Profile

**POST** `/api/v1/profile`

**Request**

```json
{
  "url": "https://www.linkedin.com/in/username/"
}
```

**Response**

```json
{
  "success": true,
  "data": {
    "name": "John Doe",
    "headline": "Software Engineer",
    "location": "Bengaluru, India",
    "about": "Building scalable backend systems..."
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

Create a `.env` file from the example:

```env
LI_AT=your_linkedin_li_at_cookie
JSESSIONID="ajax:xxxxxxxx"
PORT=3000
```

### 4. Start the development server

```bash
npm run dev
```

Server:

```text
http://localhost:3000
```

Swagger Docs:

```text
http://localhost:3000/docs
```

---

## Docker

### Build Image

```bash
docker build -t linkedin-profile-api .
```

### Run Container

```bash
docker run -p 3000:3000 --env-file .env linkedin-profile-api
```

The API will be available at:

```text
http://localhost:3000
```

---

## Environment Variables

| Variable     | Description                    |
| ------------ | ------------------------------ |
| `LI_AT`      | LinkedIn authentication cookie |
| `JSESSIONID` | LinkedIn CSRF session cookie   |
| `PORT`       | Server port (default: 3000)    |

---

## Available Scripts

```bash
npm run dev      # Development
npm run build    # Compile TypeScript
npm start        # Run production build
```

---

## Future Improvements

* Experience & Education extraction
* Skills and Certifications parsing
* Activity & Posts endpoint
* Profile image extraction
* Redis caching and rate limiting

---

## Author

**Ayush Singh**

* GitHub: https://github.com/ayuxh16
* Project: LinkedIn Profile API
