# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Garage Gains** is a web application for home gym workout management and generation. It uses vanilla HTML, CSS, and JavaScript with zero dependencies.

## Running

Open `garage-gains.html` directly in a browser. There is no build step, package manager, or dev server.

## Architecture

Split across three files:
- **`garage-gains.html`** — HTML structure with `<link>` and `<script>` tags. Four tab pages — Equipment (Kit), Exercises, Workout Generator (Generate), and Timer.
- **`garage-gains.css`** — All CSS using custom properties for theming (`--bg`, `--accent`, `--text-dim`, etc.)
- **`garage-gains.js`** — All JavaScript: exercise database (108 exercises), filtering, workout generation, standalone timer, and workout timer overlay.

### Four Main Sections (bottom nav tabs)
1. **Equipment (Kit)** — Static list of home gym equipment organized by category (including Heavy Bag for boxing)
2. **Exercises** — Filterable database of exercises with muscle group filters (Chest, Back, Shoulders, Arms, Legs, Core, Cardio)
3. **Generate** — Workout builder that creates routines based on type (Weights/Cardio/Circuit), focus area, duration, and intensity. Includes "Start Workout" button that launches a fullscreen workout timer overlay.
4. **Timer** — Standalone countdown timer with presets (30s, 60s, 90s, 2min, 3min, 5min) and custom input.

### JavaScript Patterns
- **State**: Global variables (`currentFilter`, `selectedType`, `selectedFocus`, `selectedDuration`, `selectedIntensity`, timer state)
- **Exercise database**: Array of objects, each with `name`, `muscle`, `secondary`, `equipment`, `type`, `category` (push/pull/core/cardio), `body` (full/upper/lower), and `desc`
- **Workout generation**: Separate functions per type — `generateWeights()`, `generateCardio()`, `generateCircuit()`. Uses `shuffle()` and `pick()` for random exercise selection, compounds first then accessories.
- **Cardio time minimums**: `getMinimumSeconds()` and `applyMinimumTime()` enforce minimum work periods for treadmill/bike (120s) and boxing (90s) exercises in interval/circuit modes.
- **Filtering**: `filterByFocus()` applies user selections to narrow exercises
- **Timer engine**: Shared between standalone timer page and workout timer overlay. Uses `setInterval` with audio beep (`AudioContext`) on completion.
- **Workout timer**: Builds a flat list of work/rest steps from generated workout data (`lastWorkoutData`), steps through them with auto-advance.

### UI Conventions
- Dark theme with neon gold accents
- Mobile-first design (max-width 480px app shell), progressive web app meta tags
- Card-based layouts with `.equip-card`, `.exercise-item`, `.workout-block` class naming
- Color coding: Red (strength), Green (cardio), Blue (accessories), Orange (varied)
