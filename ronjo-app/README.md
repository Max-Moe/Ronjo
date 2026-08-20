# Für Ronjo – die App

Das ist eine kleine "App" für Ronjo: eine Website, die sie sich als Icon auf ihr
Handy-Startbildschirm legen kann. Sie öffnet dann vollflächig, ganz ohne
Browserleiste – fühlt sich wie eine echte App an. Kein App Store, kein Download,
kostenlos.

Der Clou: Du kannst den Inhalt jederzeit erweitern (neue Fragen, neue kleine
Spiele), und Ronjo sieht die neue Version automatisch, wenn sie die App das
nächste Mal öffnet – sie muss nichts neu installieren.

## Was ist drin?

```
index.html                 → Startbildschirm ("Hey Ronjo 💛") mit der Übersicht
manifest.webmanifest       → macht die Seite installierbar (Name, Icon, Farbe)
icons/                     → App-Icons
activities/strandtag.html  → der Strandtag-Check (das Ja/Nein-Quiz)
```

## Einmalig einrichten (ca. 10 Minuten)

1. **GitHub-Account erstellen** (falls du noch keinen hast): auf
   [github.com](https://github.com) kostenlos registrieren.

2. **Neues Repository anlegen**: oben rechts auf **+** → **New repository**.
   Name z. B. `fuer-ronjo`. Auf **Public** lassen (privates Repo geht auf
   GitHub Pages nur mit einem kostenpflichtigen Plan). Häkchen bei "Add a
   README" **weglassen**. Auf **Create repository** klicken.

3. **Dateien hochladen**: Auf der neuen (leeren) Repo-Seite auf
   **"uploading an existing file"** klicken. Zieh den kompletten Inhalt
   dieses Ordners hinein (also `index.html`, `manifest.webmanifest`, den
   Ordner `icons` und den Ordner `activities` – nicht den `README.md`
   umbenennen oder auslassen, der stört nicht). Unten auf **Commit changes**
   klicken.

4. **GitHub Pages aktivieren**: Im Repo auf **Settings** → links **Pages**.
   Bei "Build and deployment" → **Source: Deploy from a branch** wählen,
   Branch **main**, Ordner **/ (root)**, dann **Save**.

5. Nach ein bis zwei Minuten zeigt dir GitHub oben auf der Pages-Einstellung
   die fertige Adresse, z. B.:

   ```
   https://DEIN-NUTZERNAME.github.io/fuer-ronjo/
   ```

   Das ist der Link, den du Ronjo schickst.

## Ronjo installiert die App

Schick ihr den Link (z. B. per WhatsApp). Sie öffnet ihn auf dem Handy und:

- **iPhone (Safari):** Teilen-Symbol unten antippen → **"Zum Home-Bildschirm"**
- **Android (Chrome):** Menü (⋮) oben rechts → **"App installieren"** bzw.
  **"Zum Startbildschirm hinzufügen"**

Danach liegt ein Icon mit dem gelben Enten-Herz-Symbol auf ihrem Homescreen.

## Später etwas Neues hinzufügen

1. Neue Datei erstellen, z. B. `activities/quiz2.html` (am einfachsten: eine
   bestehende Aktivität kopieren/anpassen lassen).
2. In `index.html` im Bereich `.deck` eine neue Karte ergänzen, z. B.:

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
