// Trage hier die Werte aus deinem eigenen Firebase-Projekt ein.
// Anleitung dazu steht in der README.md unter "Kalender einrichten".
//
// So kommst du an diese Werte:
// Firebase Console → Projekteinstellungen (Zahnrad oben links) → ganz unten
// bei "Meine Apps" → Web-App → "SDK-Setup und Konfiguration" → "Config".
//
// Diese Werte sind KEINE Geheimnisse (sie stehen in jeder Firebase-Web-App
// öffentlich im Quellcode) – der eigentliche Schutz kommt über die
// Firestore-Regeln, die du ebenfalls in der README einrichtest.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDr7mqAAaMg7y5yqxJ-BR1PFw6S3wbhqAw",
  authDomain: "ronjo-c6f13.firebaseapp.com",
  projectId: "ronjo-c6f13",
  storageBucket: "ronjo-c6f13.firebasestorage.app",
  messagingSenderId: "731182049620",
  appId: "1:731182049620:web:532c2c7df7a0eb03a300c1"
};

// Optional: PIN-Schutz für den Kalender.
// Trag hier eine eigene Zahlenfolge ein (z. B. euer Jahrestag "0508"), die
// ihr beide kennt – dann fragt der Kalender bei jedem Öffnen der App danach.
// Auf "CHANGE-ME" lassen, um den PIN-Schutz auszuschalten.
//
// Wichtig zu wissen: Das ist ein netter Schutz gegen zufälliges Reinschauen,
// aber keine echte Verschlüsselung – der PIN steht im Quellcode der Seite
// und wäre für jemanden mit technischem Wissen einsehbar. Für "niemand
// schaut aus Versehen rein" reicht es aber locker.
window.APP_PIN = "0904";
