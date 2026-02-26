// ═══════════════════════════════════════════════════════════
//  config.js  —  Tournament App Configuration
//  Edit ONLY this file to change settings. Never touch index.html.
// ═══════════════════════════════════════════════════════════

const CONFIG = {

  // ── FIREBASE CREDENTIALS ──────────────────────────────────
  firebase: {
    apiKey:            "AIzaSyAltYOtV8uXmsMmTgN5z-qBvsQCWNI68xc",
    authDomain:        "badminton-fbf13.firebaseapp.com",
    databaseURL:       "https://badminton-fbf13-default-rtdb.firebaseio.com",
    projectId:         "badminton-fbf13",
    storageBucket:     "badminton-fbf13.firebasestorage.app",
    messagingSenderId: "38033616386",
    appId:             "1:38033616386:web:b181af007abee92595c11b"
  },

  // ── SCORING ───────────────────────────────────────────────
  points: {
    win:  2,   // Points for a win
    draw: 1,   // Points for a draw
    loss: 0,   // Points for a loss
  },

};

export default CONFIG;
