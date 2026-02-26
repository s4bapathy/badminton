// ═══════════════════════════════════════════════════════════
//  config.js  —  Tournament App Configuration
//  Edit this file to change Firebase credentials or app settings.
//  Do NOT rename this file — index.html imports it automatically.
// ═══════════════════════════════════════════════════════════

const CONFIG = {

  // ── FIREBASE CREDENTIALS ──────────────────────────────────
  // Get these from: Firebase Console → Project Settings → Your Apps → Web App
  firebase: {
    apiKey:            "AIzaSyAltYOtV8uXmsMmTgN5z-qBvsQCWNI68xc",
    authDomain:        "badminton-fbf13.firebaseapp.com",
    databaseURL:       "https://badminton-fbf13-default-rtdb.firebaseio.com",
    projectId:         "badminton-fbf13",
    storageBucket:     "badminton-fbf13.firebasestorage.app",
    messagingSenderId: "38033616386",
    appId:             "1:38033616386:web:b181af007abee92595c11b"
  },

  // ── TOURNAMENT SETTINGS ───────────────────────────────────
  tournament: {
    name:         "Badminton Tournament",   // Shown in the browser tab and header
    defaultTeams:  16,                      // Default number of teams on setup screen
    defaultGroups:  2,                      // Default number of groups on setup screen
    pointsForWin:   2,                      // Points awarded for a win
    pointsForLoss:  0,                      // Points awarded for a loss
    pointsForDraw:  1,                      // Points awarded for a draw (if scores are equal)
  },

  // ── FIREBASE DATABASE PATH ────────────────────────────────
  // Change this if you want to run multiple tournaments in the same Firebase project.
  // e.g. "tournament_2025" or "season2"
  dbPath: "tournament",

};

export default CONFIG;
