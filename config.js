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

  // ── ADMIN SECURITY ───────────────────────────────────────
  // Change this PIN to whatever you want — keep it secret!
  // Viewers can see everything but cannot make any changes.
  adminPin: "1234",   // ← CHANGE THIS to your own PIN

  // ── CLOUDINARY (photo storage) ────────────────────────────
  // Get these from cloudinary.com → Dashboard (cloud name)
  // and Settings → Upload → Upload Presets (preset name)
  cloudinary: {
    cloudName:    "dhxvobnxr",   // Your Cloudinary cloud name
    uploadPreset: "ml_default",  // Your unsigned upload preset
  },

};

export default CONFIG;
