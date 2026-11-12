# My Training Encyclopedia

A static HTML, CSS, and JavaScript training site with two available topics: **HTTP Fundamentals** and **HTML: Intermediate Fundamentals**.

## Files

- `index.html` — dashboard shell
- `style.css` — shared dashboard styles
- `script.js` — dashboard behavior, search, theme toggle, and topic-specific navigation
- `training/http/http.html` — six-lesson HTTP module with lesson completion, quiz, recap checklist, and print support
- `training/http/http.css` — styles for the HTTP module
- `training/html/html.html` — nine-lesson interactive HTML module
- `training/html/html.css` — HTML module styles
- `training/html/html.js` — HTML module interactions and progress tracking

## Upload to GitHub

Upload the contents of this folder to the root of your existing `msimien3/Training-Encyclopedia` repository. Keep the folder structure exactly as shown above. In particular, `training/http/http.html` must remain inside `training/http/`.

If you are replacing files in an existing repository, overwrite the matching files. Do not upload the outer `Training-Encyclopedia` folder as an extra nested folder; upload the files and `training` folder inside it.

## GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose branch `main` and folder `/(root)`. Save and wait for deployment.

The dashboard should be at:
`https://msimien3.github.io/Training-Encyclopedia/`

The HTTP module should be at:
`https://msimien3.github.io/Training-Encyclopedia/training/http/http.html`

## Notes

This is a static website; it has no backend or account-based progress storage. Lesson completion and quiz results are held in the open page and reset when it is reloaded. The theme preference is saved locally in the browser. Do not publish private or proprietary information.
