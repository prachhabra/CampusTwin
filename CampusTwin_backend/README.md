# CampusTwin — Backend (Node.js + Express + MongoDB)

Real, working REST API + Socket.io backend covering all 15 chapters of the
Back-end Engineering plan. Chapters 1–13 have working models/controllers/
routes; Chapter 14 (security) is applied throughout (see below); Chapter 15
(deployment) is a checklist at the bottom for when you're ready.

This has been **boot-tested** end-to-end (module wiring, all imports/exports,
route mounting) before being handed to you — it will start cleanly once you
`npm install` and have MongoDB reachable.

## 1. Prerequisites

- **Node.js 18+** — check with `node -v`
- **MongoDB** — either:
  - **Local**: install MongoDB Community Server and have it running on
    `mongodb://127.0.0.1:27017`, OR
  - **Atlas (easier, no local install)**: create a free cluster at
    [mongodb.com/atlas](https://www.mongodb.com/atlas), get your connection
    string from *Connect → Drivers*.

## 2. Setup

```bash
cd campustwin-backend
npm install
cp .env.example .env
```

Open `.env` and set `MONGO_URI` to either your local MongoDB or your Atlas
connection string. Change `JWT_SECRET` to any random string.

## 3. Run it

```bash
npm run dev
```

You should see:

```
CampusTwin backend running on http://localhost:5000
MongoDB connected: <your host>
```

**Now open `http://localhost:5000` in your browser** — the server serves the
full CampusTwin interface (`public/index.html`) directly at that address.
This is the same zero-install demo from before, just now served *by* your
backend instead of opened as a separate file — one link shows the whole
thing, which is the cleanest way to demo "frontend + backend running
together" in your evaluation.

The interface still uses its own mock data by default (nothing crashes if
the API isn't wired up yet). When you're ready to connect them for real,
edit `public/index.html` and swap the mock `login()`/`register()` calls for
real `fetch()` calls to `/api/auth/login` and `/api/auth/register` — since
it's served from the same origin, no CORS config is even needed for that.

If you see `MongoDB connection error` instead, MongoDB isn't reachable —
double check `MONGO_URI` in `.env` and that your local `mongod` is running
(or that your Atlas IP whitelist includes your current IP / `0.0.0.0/0` for
testing).

## 4. Test it (Postman / Thunder Client)

**Register:**
```
POST http://localhost:5000/api/auth/register
Body (JSON):
{
  "name": "Rahul Sharma",
  "email": "rahul@campus.edu",
  "password": "test1234",
  "role": "student",
  "department": "CSE",
  "year": 3
}
```
Copy the `token` from the response.

**Use the token on any protected route** — add header:
```
Authorization: Bearer <token>
```

**Try a few more:**
```
POST /api/auth/login              { "email": "...", "password": "..." }
GET  /api/users/dashboard         (protected)
POST /api/products                (protected) { "title": "Calculator", "price": 300 }
GET  /api/products
POST /api/lostfound                (protected) { "type": "lost", "itemName": "Water bottle" }
GET  /api/campus/locations
```

Full endpoint list is in `app.js` — every `app.use(...)` line shows which
router handles which URL prefix, and each `routes/*.js` file lists its exact
paths + which controller function handles it.

## 5. Folder structure

```
campustwin-backend/
├── config/db.js              # Ch.1 — MongoDB connection
├── models/                   # one file per Mongoose schema
├── controllers/               # business logic, grouped roughly by chapter
├── routes/                    # Express routers, mounted in app.js
├── middleware/
│   ├── authMiddleware.js      # Ch.2 — protect() + authorize(...roles)
│   └── errorMiddleware.js     # 404 + central error handler
├── socket/socketHandler.js    # Ch.9 — Socket.io chat, presence
├── utils/                     # asyncHandler, generateToken
├── public/index.html          # the Phase 1 interface, served at http://localhost:5000
├── uploads/                   # Ch.14 — uploaded files land here
├── app.js                     # Express app + all routes mounted
├── server.js                  # entry point: HTTP server + Socket.io + DB connect
└── .env.example
```

## 6. Chapter → file map

| Chapter | Files |
|---|---|
| 1. Setup | `config/db.js`, `app.js`, `server.js` |
| 2. Auth | `models/User.js`, `controllers/authController.js`, `middleware/authMiddleware.js`, `routes/authRoutes.js` |
| 3. Dashboard APIs | `controllers/userController.js`, `routes/userRoutes.js` |
| 4. Marketplace | `models/Product.js`, `controllers/productController.js`, `routes/productRoutes.js` |
| 5. Lost & Found | `models/LostFound.js`, `controllers/lostFoundController.js`, `routes/lostFoundRoutes.js` |
| 6. Events & Clubs | `models/Event.js`, `models/Club.js`, `controllers/eventClubController.js`, `routes/eventClubRoutes.js` |
| 7. Complaints & Study Groups | `models/Complaint.js`, `models/StudyGroup.js`, `controllers/complaintStudyGroupController.js`, `routes/complaintStudyGroupRoutes.js` |
| 8. Skills & Confessions | `models/Skill.js`, `models/Confession.js`, `controllers/skillConfessionController.js`, `routes/skillConfessionRoutes.js` |
| 9. Real-Time Chat | `models/Message.js`, `socket/socketHandler.js`, `routes/chatRoutes.js` |
| 10. Placement Tracker | `models/Company.js`, `controllers/placementController.js`, `routes/placementRoutes.js` |
| 11. QR Attendance & Digital ID | `models/Attendance.js`, `controllers/attendanceController.js`, `routes/attendanceRoutes.js` |
| 12. Campus & Achievements | `models/CampusLocation.js`, `controllers/campusAchievementController.js`, `routes/campusAchievementRoutes.js` |
| 13. Analytics | `controllers/analyticsController.js`, `routes/analyticsRoutes.js` |
| 14. Testing & Security | `middleware/errorMiddleware.js`, `routes/uploadRoutes.js` (file-type/size validation), `authorize()` role checks on every sensitive route, `select: false` on password field |
| 15. Deployment | see below |

## 7. Chapter 9 — testing the chat in the browser console

Since Socket.io needs a live connection, the easiest way to test it before
your frontend is wired up: open your browser console on any page and run
(after `npm install socket.io-client` somewhere, or via CDN):

```js
const socket = io("http://localhost:5000", { auth: { token: "<your JWT>" } });
socket.emit("room:join", "club-101");
socket.emit("message:send", { room: "club-101", text: "Hello CampusTwin" });
socket.on("message:new", (msg) => console.log("New message:", msg));
```

## 8. Chapter 15 — deployment checklist

1. Push this repo to GitHub.
2. Create a free MongoDB Atlas cluster (if not already) and whitelist your
   deployment platform's IP (or `0.0.0.0/0` for simplicity while testing).
3. Deploy on **Render** or **Railway**: connect your GitHub repo, set the
   build command to `npm install` and start command to `npm start`, and add
   your `.env` values as environment variables in their dashboard (never
   commit `.env`).
4. Copy the deployed URL (e.g. `https://campustwin-api.onrender.com`) and use
   it as the frontend's API base URL instead of `http://localhost:5000`.
5. Update `CLIENT_ORIGIN` in your deployed environment variables to your
   deployed frontend's URL so CORS allows it.

## 9. What's mocked vs real

Nothing here is mocked — every model, controller, and route is real,
working Mongoose/Express code. What's *not* included: automated test files
(Chapter 14 says "test using Postman", which is manual — see section 4
above) and CI/CD config (not part of the chapter plan).
