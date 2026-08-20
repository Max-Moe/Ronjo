# Für Ronjo – die App

Eine kleine "App" für euch beide: eine Website, die ihr euch als Icon auf den
Handy-Startbildschirm legt. Sie öffnet vollflächig, ganz ohne Browserleiste –
fühlt sich wie eine echte App an. Kein App Store, kein Download, kostenlos.

Du kannst den Inhalt jederzeit erweitern. Ronjo sieht Neues automatisch beim
nächsten Öffnen – sie muss nichts neu installieren.

## Was ist drin?

```
index.html                 → Profil-Auswahl ("Für mich" / "Für Ronjo")
home-ronjo.html             → Ronjos Startbildschirm (Kalender, Quiz, mehr)
home-me.html                 → dein Startbildschirm (erstmal nur der Kalender)
manifest.webmanifest         → macht die Seite installierbar (Name, Icon, Farbe)
firebase-config.js           → deine Zugangsdaten für den Kalender (siehe unten)
icons/                       → App-Icons (die beiden Herzen)
activities/kalender.html     → der gemeinsame, live-synchrone Kalender
activities/strandtag.html    → der Strandtag-Check (Ja/Nein-Quiz)
```

### Wie die Profile funktionieren

Beim ersten Öffnen fragt die App "Für wen ist die App gerade?". Die Wahl wird
auf dem jeweiligen Handy gespeichert – öffnet ihr die App danach erneut, geht
es automatisch direkt zum passenden Startbildschirm. Über "🔁 Profil
wechseln" oben links kommt man jederzeit wieder zur Auswahl zurück (z. B. zum
Testen auf einem Gerät).

- **Dein Profil ("Für mich")**: zeigt aktuell nur den Kalender.
- **Ronjos Profil ("Für Ronjo")**: zeigt den Kalender plus alles andere
  (Strandtag-Check, künftige Spiele/Quizzes).

Wenn du ihr Profil auf deinem eigenen Handy nur zum Testen sehen willst, wähle
einfach "Für Ronjo" – das ändert nichts an ihrem Gerät, jedes Handy merkt sich
seine eigene Wahl für sich.

## Einmalig einrichten (ca. 10 Minuten)

1. **GitHub-Account erstellen** (falls du noch keinen hast): auf
   [github.com](https://github.com) kostenlos registrieren.

2. **Neues Repository anlegen**: oben rechts auf **+** → **New repository**.
   Name z. B. `fuer-ronjo`. Auf **Public** lassen (privates Repo geht auf
   GitHub Pages nur mit einem kostenpflichtigen Plan). Häkchen bei "Add a
   README" **weglassen**. Auf **Create repository** klicken.

3. **Dateien hochladen**: Auf der neuen (leeren) Repo-Seite auf
   **"uploading an existing file"** klicken. Zieh den **Inhalt** dieses
   Ordners hinein – also `index.html`, `home-ronjo.html`, `home-me.html`,
   `manifest.webmanifest`, `firebase-config.js`, die Ordner `icons` und
   `activities`, sowie `README.md`. **Wichtig:** zieh den Inhalt, nicht den
   umschließenden Ordner selbst hinein (sonst landet alles eine Ebene zu
   tief). Unten auf **Commit changes** klicken.

4. **GitHub Pages aktivieren**: Im Repo auf **Settings** → links **Pages**.
   Bei "Build and deployment" → **Source: Deploy from a branch** wählen,
   Branch **main**, Ordner **/ (root)**, dann **Save**.

5. Nach ein bis zwei Minuten zeigt dir GitHub oben auf der Pages-Einstellung
   die fertige Adresse, z. B.:

   ```
   https://DEIN-NUTZERNAME.github.io/fuer-ronjo/
   ```

   Das ist der Link, den du Ronjo schickst.

## Kalender einrichten (kostenloses Firebase-Konto)

Der Kalender braucht einen Ort, an dem die Termine für euch beide live
gespeichert werden. Dafür nutzen wir **Firebase** (von Google) – kostenlos
für so ein kleines Projekt.

1. Geh auf [console.firebase.google.com](https://console.firebase.google.com)
   und melde dich mit einem Google-Konto an.
2. **Projekt hinzufügen** → einen Namen vergeben, z. B. `fuer-ronjo` → die
   Vorschläge einfach durchklicken (Google Analytics kannst du deaktivieren,
   braucht ihr nicht).
3. Im Projekt links im Menü auf **Build → Firestore Database** → **Datenbank
   erstellen**. Standort einmal bestätigen (Standardwert ist ok) und starte
   im **Testmodus** (die Regeln ersetzen wir gleich).
4. Immer noch bei Firestore: oben auf den Tab **Regeln**. Ersetze den Inhalt
   durch:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /events/{eventId} {
         allow read, write: if true;
       }
     }
   }
   ```

   Dann **Veröffentlichen**. (Hinweis: Das ist bewusst einfach gehalten –
   jede:r, der/die eure genaue Firebase-Projekt-ID kennt, könnte theoretisch
   mitlesen/-schreiben. Für ein privates Pärchen-Projekt ist das ok, da diese
   ID nirgends öffentlich auftaucht. Sag mir Bescheid, falls du es zusätzlich
   mit einem PIN absichern willst, das kann ich ergänzen.)

5. Zurück zur Projektübersicht (Zahnrad oben links → **Projekteinstellungen**).
   Ganz unten bei "Meine Apps" auf das **Web-Symbol (`</>`)** klicken, um eine
   Web-App zu registrieren. Einen Spitznamen vergeben (z. B. "Für Ronjo Web"),
   **Firebase Hosting nicht** aktivieren, **App registrieren**.
6. Jetzt zeigt Firebase dir ein Code-Snippet mit einem `firebaseConfig`-
   Objekt. Kopiere die Werte (apiKey, authDomain, projectId, storageBucket,
   messagingSenderId, appId) in die Datei **`firebase-config.js`** in diesem
   Ordner – an der jeweils passenden Stelle.
7. Datei `firebase-config.js` im GitHub-Repo aktualisieren: **Add file →
   Upload files** → die geänderte Datei hochladen → **Commit changes**
   (überschreibt die alte Version automatisch, weil sie gleich heißt).
8. Fertig! Öffnet ihr jetzt den Kalender in der App, fragt sie beim ersten
   Mal pro Handy nach eurem Namen und einer Farbe (lila/rot) – danach seht
   ihr eure Termine live auf beiden Geräten.

### Optional: PIN-Schutz für den Kalender

Ganz unten in `firebase-config.js` steht `window.APP_PIN = "CHANGE-ME";`.
Ersetzt `"CHANGE-ME"` durch eine eigene Zahlenfolge, die ihr beide kennt
(z. B. euer Jahrestag), z. B. `window.APP_PIN = "0508";` – dann fragt der
Kalender bei jedem Öffnen der App nach diesem PIN, bevor er sich zeigt. Über
das kleine 🔒-Symbol neben "Zurück" könnt ihr ihn jederzeit wieder manuell
sperren. Lasst den Wert auf `"CHANGE-ME"`, wenn ihr keinen PIN wollt.

Wichtig zu wissen: Das ist ein netter Schutz gegen zufälliges Reinschauen
(z. B. wenn mal wer anders das Handy in der Hand hat), aber keine echte
Verschlüsselung – der PIN steht sichtbar im Quellcode der Seite. Für "niemand
schaut aus Versehen rein" reicht es aber locker.

## Ronjo installiert die App

Schick ihr den Link (z. B. per WhatsApp). Sie öffnet ihn auf dem Handy und:

- **iPhone (Safari):** Teilen-Symbol unten antippen → **"Zum Home-Bildschirm"**
- **Android (Chrome):** Menü (⋮) oben rechts → **"App installieren"** bzw.
  **"Zum Startbildschirm hinzufügen"**

Beim ersten Öffnen wählt sie "Für Ronjo". Danach liegt ein Icon mit den
beiden Herzen auf ihrem Homescreen, und die App merkt sich ihre Wahl.

## Später etwas Neues hinzufügen

1. Neue Datei erstellen, z. B. `activities/quiz2.html` (am einfachsten: sag
   mir, was es werden soll, ich baue dir die Datei fertig).
2. In `home-ronjo.html` im Bereich `.deck` eine neue Karte ergänzen, z. B.:

   ```html
   <a class="item" href="activities/quiz2.html">
     <span class="item-icon">🎡</span>
     <span class="item-text">
       <p class="item-title">Titel hier</p>
       <p class="item-desc">Kurzbeschreibung hier</p>
     </span>
     <span class="item-arrow">→</span>
   </a>
   ```

3. Im GitHub-Repo die geänderte(n) Datei(en) erneut hochladen (**Add file** →
   **Upload files**, dann **Commit changes**) – überschreibt die alte Version.

Fertig – Ronjo sieht die Änderung beim nächsten Öffnen der App, ganz ohne
etwas neu zu installieren.

Am einfachsten sagst du mir einfach, was als Nächstes dazu soll ("bau mir noch
eine Aktivität wie X") – ich baue dir dann die passende Datei, du musst sie nur
noch hochladen.
