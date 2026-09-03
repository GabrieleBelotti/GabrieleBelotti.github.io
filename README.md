# Sito di Gabriele Belotti — file pronti per GitHub Pages

Questa cartella contiene il sito completo, pronto per essere caricato.

## Contenuto
- `index.html` — la pagina del sito
- `styles.css` — tutti gli stili
- `script.js` — menu mobile e piccolo script di supporto
- `assets/gabriele.jpg` — foto profilo (ritagliata dal CV)
- `assets/GabrieleBelottiCV2026.pdf` — il CV, collegato al pulsante "Scarica il CV"

## Come pubblicarlo (riepilogo)
1. Sull'account GitHub di Gabriele, crea un repository pubblico chiamato **esattamente** `nomeutente.github.io` (es. `gabrielebelotti.github.io`).
2. Carica **tutti** i file di questa cartella nella root del repository, mantenendo la sottocartella `assets/` così com'è (trascinali nell'interfaccia web di GitHub, oppure via git: `git add . && git commit -m "Primo caricamento sito" && git push`).
3. Vai su **Settings > Pages** del repository e verifica che la sorgente sia il branch `main`, cartella `/ (root)`. Per un repository con questo nome speciale di solito è già attivo in automatico.
4. Dopo un paio di minuti il sito sarà online su `https://nomeutente.github.io`.

## Modifiche future
- Per aggiungere o modificare pubblicazioni, apri `index.html` e cerca la sezione `<!-- RICERCA -->`.
- Per aggiornare l'esperienza professionale, cerca `<!-- PERCORSO -->`.
- Per cambiare i servizi di consulenza, cerca `<!-- CONSULENZE -->`.
- Ogni modifica a un file, seguita da commit e push, aggiorna automaticamente il sito pubblicato.
