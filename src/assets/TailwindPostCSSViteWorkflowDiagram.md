##Tailwind + PostCSS + Vite Workflow Diagram
┌────────────────────┐
│  You write HTML/Vue │
│  with Tailwind CSS  │
│     classes         │
│  e.g. "bg-blue-500" │
└─────────┬──────────┘
          │
          ▼
┌────────────────────────────────┐
│   Tailwind CSS (Utility Framework) │
│  - Reads your classes              │
│  - Decides which CSS is needed     │
└─────────┬──────────────────────────┘
          │  sends instructions to
          ▼
┌──────────────────────────┐
│   PostCSS (Processor)    │
│  - Uses plugin            │
│    "@tailwindcss/postcss"│
│  - Builds real CSS        │
│  - Removes unused styles  │
└─────────┬────────────────┘
          │ final CSS file
          ▼
┌──────────────────────────┐
│     Vite (Build Tool)    │
│  - Bundles everything     │
│  - Compresses files       │
│  - Serves app extremely   │
│    fast in dev mode       │
└─────────┬────────────────┘
          │ sends output to
          ▼
┌──────────────────────────┐
│       Browser            │
│  - Renders optimized CSS │
│  - Loads HTML & Vue      │
└──────────────────────────┘
