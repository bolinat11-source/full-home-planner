# House Planner Monorepo

This repository contains a minimal **MVP skeleton** for the dynamic house-planning platform.

## Structure

```
.
├── apps
│   ├── web   # Next.js + Tailwind + Konva (2D editor)
│   └── api   # FastAPI service
├── package.json
├── turbo.json
└── README.md
```

## Prerequisites

1. Node.js ≥ 18
2. Python ≥ 3.10
3. (Optional) `pipx` for isolated Python envs

## Installation

```bash
# install JS deps (root) – will hoist workspaces
pnpm install   # or: npm install / yarn install

# install Python deps for API
cd apps/api
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

## Development

Open **two** terminals:

```bash
# Terminal 1 – FastAPI backend
cd apps/api
source .venv/bin/activate
uvicorn main:app --reload --port 8000
```

```bash
# Terminal 2 – Next.js frontend
pnpm dev   # turbo will run apps/web dev script
```

Frontend will be available at <http://localhost:3000> and communicate with the API at <http://localhost:8000>.

## Next Steps

* Connect to a real database (PostgreSQL) instead of the in-memory list.
* Persist projects and edits.
* Add Auth (Auth0 / Firebase).
* Implement regulation checks and PDF export workers.