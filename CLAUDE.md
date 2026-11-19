# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Static site, no dependencies, no build step, no test runner: `index.html` (markup), `style.css`, `app.js`. Run it by opening `index.html` in a browser; deploy by publishing the repo root to GitHub Pages.

How it works:
- The `PRIZES` array at the top of `app.js` is the only place the prizes are defined. The wheel's slices and labels are generated from it as SVG at load, so changing it changes the wheel.
- A spin picks a uniform random slot with `crypto.getRandomValues`, then rotates the `#spinner` group with a CSS transition to put that slot under the fixed top pointer. `slotAt(angle)` maps the final angle back to the slot shown in a native `<dialog id="modal">` (prize, message, QR) opened with `showModal()`; a `console.assert` loop at load checks that mapping (failures only show in the browser devtools console, so open it after editing the wheel geometry).
- The rim, hub and pointer are static and don't rotate. The spin control is the "Girar" link-style button; clicking the wheel also spins.
- Portrait layout (`@media (orientation: portrait)` at the end of `style.css`) targets the vertical 55" TV and phones, following `aspecto.jpeg`: centered column logo > title > wheel > Girar, sizes in `vw`/`clamp`. `.info` becomes `display: contents` there so the wheel can sit between the title and the button; landscape keeps the two-column grid.
- Label wrapping (14 characters) and font sizes were tuned by eye against the 10 current prizes; recheck the render if you change labels.

## What the app is

A prize-wheel ("ruleta") app for a raffle run by **Arroyo Hondo Gardens (AHG)**. All user-facing text is in Spanish.

The wheel's segments are the 10 prizes listed in `README.md`, in that order. Treat the README as the source of truth for segment labels. Several entries are joke or no-win outcomes ("La próxima es la tuya", "Eso fue calentamiento", "Reserva de nuevo 😏", "El apartamento sí, el premio después 🤭"), and some labels contain emoji, so the wheel's text rendering must handle them. Items 3, 9 and 10 in the README contain invisible U+2060 (word joiner) characters; strip them when copying labels into code.

## Deployment

Per the README, the app must be deployable to **GitHub Pages** and will be used once, at a single raffle. That means static files only: no server, no build step that Pages can't serve, and asset paths that are relative (the site is served from `/<repo-name>/`, not `/`). Asset filenames have no spaces (`logo.png`, `qr.png`) for that reason; keep it that way.

## Visual design

The look follows `DESING.md` (a spec written for an "Atelier North" landing page, adapted here to the wheel): AHG brown `#574426` page background (sampled from `logo-marron.jpeg`) with Bone `#F2F0EB` text and a light Muted `#C9BFA9`; the modal dialog keeps Bone background / Ink text, Helvetica Neue, weights 400/500 only, 12-column grid, left-aligned, no shadows or stock images. Orange `#FF4F00` is allowed only on the final period of the `h1`, link hover underlines and focus outlines; the pointer and wheel are Ink/Bone. `DESING.md` bans emoji, but the README prize labels contain two, and the README wins for prize text. Its Atelier North content (sections, copy, project artwork) does not apply.

## Assets (repo root)

- `aspecto.jpeg` and `logo-marron.jpeg` are untracked reference images (not used by the page); `DESING.md` is also still untracked. Don't reference them from the site without committing them first.

- `logo.png`: white AHG logo on a transparent background. It is shown as-is (white) on the brown page.
- `qr.png`: gold-on-white QR code ("Síguenos"), shown in the result modal. It encodes `https://www.instagram.com/arroyohondogardens?jplx=M2oxejczb3lnNnQz` (regenerated with `segno`, same gold and double frame).
