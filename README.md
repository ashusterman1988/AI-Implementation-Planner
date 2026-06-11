# AI Implementation Planner

An AI agent that drafts complete, phase-gated implementation plans the way a senior project manager would. Built by [Aleksandr Shusterman](https://www.linkedin.com/in/aleksandr-shusterman-61326374), PMP, CSM.

**[Live demo →](YOUR_CLAUDE_SITE_LINK_HERE)**

## What it does

Pick an industry, what's being implemented, the customer segment, and the timeline. The agent generates a full implementation blueprint built on real delivery methodology:

- **Phased timeline** with durations, objectives, key activities, and exit criteria for each phase
- **RACI matrix** assigning Responsible, Accountable, Consulted, and Informed roles per workstream
- **Risk register** with ranked exposures and concrete mitigations
- **Comms cadence** defining the governance rhythm from kickoff through hypercare

## Features

- **Industry-aware inputs.** Product and constraint options cascade by industry, so a healthcare user sees EHR migration and HIPAA review while a logistics user sees ocean shipping and peak-season deadlines
- **Inline editing.** Click any text in the plan to edit it. AI drafts, the human owns the deliverable
- **Self-critique loop.** A "Critique plan" button runs a PMO-style audit of the AI's own output, scoring it and flagging weaknesses with fixes
- **Ask the Planner.** A Q&A box with full plan context for pressure-testing ("What if the timeline slips to 6 months?")
- **Section re-rolls.** Regenerate just the RACI, risks, or comms without losing the rest
- **Saved plans.** Plans persist across sessions with per-user storage
- **Export.** Print/PDF output and one-click copy as Markdown for Confluence, Notion, or Teams

## How it's built

- **React** (single-component app, no external state library)
- **Claude API** (Anthropic) for plan generation, critique, and Q&A, with structured JSON prompting
- **Persistent key-value storage** for saved plan history
- Custom CSS design system: ocean/logistics theme, accessible focus states, reduced-motion support

## Why I built it

There's a gap between AI hype and real delivery discipline. This agent encodes the methodology I use on enterprise rollouts (phase gates, clear ownership, honest risk registers) and adds the oversight loops that responsible AI deployment requires: human editing, self-critique, and pressure-testing. The same discipline I bring to every go-live.

## Running locally

The live demo runs on claude.site, where Claude API calls are handled by the platform. To run locally you need your own [Anthropic API key](https://docs.claude.com) and a small backend proxy to keep the key out of the browser. The component itself is in `src/ImplementationPlanGenerator.jsx`.

```bash
npm install
npm run dev
```

Note: without an API key proxy, generation features will not function locally; the UI and sample plan will still render.

## License

MIT
