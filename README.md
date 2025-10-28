
  # Sito Web E-commerce Vintage

  Questo repository contiene il codice sorgente del sito "Sito Web E-commerce Vintage" (app Vite + React).

  ## Eseguire in locale

  1. Installa le dipendenze:

    ```powershell
    npm ci
    ```

  2. Avvia il server di sviluppo (hot-reload):

    ```powershell
    npm run dev
    ```

  3. Costruisci la versione di produzione:

    ```powershell
    npm run build
    ```

  4. Servi la build localmente per un controllo finale:

    ```powershell
    npx vite preview --port 5173
    ```

  ## Deploy

  - Il progetto è pronto per essere pubblicato su Netlify (o altro hosting statico). È presente un file `netlify.toml` che definisce il comando di build e la cartella `dist` come pubblicazione.
  - Per un deploy manuale con Netlify CLI:

   ```powershell
   npm ci
   npm run build
   netlify deploy --prod --dir=dist
   ```

  Nota: sono stati rimossi i riferimenti diretti a risorse di design (es. link a file Figma) e a impostazioni di GitHub Pages.
  