# Project memory

## Product intent & audience

- Career preparation app for engineering students in Kerala/India, organized by branch (CSE, ECE, EEE, Mechanical, Civil).
- Users select their branch and a target company, then receive a personalized report with preparation tips, expected skills, a company match percentage, and a roadmap.

## Brand personality & voice

- Practical and locally relevant: features real Kerala/India recruiters (e.g., UST, Keltron, Cochin Shipyard, PWD Kerala, KSEB) alongside major national/global firms.
- Informative and guidance-oriented — each company has actionable prep tips and concrete skill expectations.

## Visual design & UX direction

- React + Vite + Tailwind CSS; JSX only; Lucide React for icons.
- Company selection list is scrollable inside a fixed-height container to stay tidy with many options (up to ~16 per branch).
- Each company entry shows name + one-line description beneath it.
- `@/` path alias for all project module imports (maps to `src/`).

## Decisions, constraints & rationale

- Companies are branch-specific, not a shared list across branches — real recruiters per discipline.
- Each company entry includes: name, description, preparation tip, and expected-skills list.
- Expected-skills list feeds the scoring engine for match percentage and roadmap generation.
- Branch counts: CSE 16, ECE 15, EEE 13, Mechanical 14, Civil 13 companies.
- Do not install extra UI/icon packages beyond what the template provides.
- Object keys containing special chars (e.g., `L&T`) must be quoted to avoid syntax errors.

## Open questions & assumptions

- Scoring/match algorithm details and roadmap generation rules are not yet documented — assumed to live in an engine module.
- No explicit UI theme/color direction given yet beyond "beautiful, not cookie cutter, production-worthy."
- Branch list may expand later (e.g., IT, Safety, Fire Tech); current scope is five core branches.