# SchoolStoryPage Conversion Engine Spec

## Context
Current school project pages (e.g., St. Kizito) already function as:
- Proof of impact
- Credibility anchors
- Case studies

They do not yet function as:
- Conversion engines
- Revenue triggers
- Engagement funnels

Goal: transform school story pages from passive storytelling into demand capture infrastructure.

## Strategic Framing
Airbnb monetizes: scarcity of space.
SHINE can monetize: scarcity of reliable power.

Each school page should move users through:
- Viewing
- Funding
- Deploying
- Managing

Equivalent model:
- Airbnb: Book stay
- SHINE: Book solar transition / participation in a school energy ecosystem

## Core Conversion Panels (Feature Concepts)

### 1) Sponsor Power (Highest Emotional + Financial Conversion)
Panel title: `Power a Classroom`

What users can fund:
- Sponsor one classroom's power
- Sponsor batteries
- Sponsor maintenance
- Sponsor internet uptime

Post-conversion outcomes for donor:
- Impact dashboard
- School updates
- Recognition

Why it works:
- Emotional equivalent of booking a room
- Converts intent into measurable impact participation

### 2) Adopt a School (Enterprise / CSR Hook)
Panel title: `Adopt This School's Energy System`

Target users:
- Corporations
- NGOs
- Foundations

Options:
- One-year energy support
- Maintenance coverage
- Expansion funding

Monetization:
- Platform fee + project margin

Positioning:
- "Airbnb for climate philanthropy"

### 3) Deploy SHINE Here (Lead Gen Engine)
Panel title: `Bring SHINE to Your School`

Booking options:
- Schedule energy assessment
- Request feasibility study
- Book consultation call

Outcome:
- Turns each case study into a sales funnel

### 4) Energy-as-a-Service Subscription (Recurring Revenue)
Panel title: `Join the SHINE Network`

Offerings:
- Remote monitoring
- AI maintenance alerts
- Performance analytics
- Financing plans

Outcome:
- Recurring revenue layer

### 5) Visit & Learn (Trust Builder)
Panel title: `Book a Site Visit`

Target users:
- Governments
- NGOs
- School operators

Options:
- Virtual tour
- Physical visit
- Technical briefing

### 6) Impact Marketplace (Long-Term Vision)
Each school page evolves into a mini marketplace where users can fund:
- Batteries
- Panels
- Upgrades
- Internet connectivity

Analogy:
- Kickstarter for energy infrastructure

## Recommended Rollout (Early-Stage)
Best immediate move:
- Launch one primary panel first: `Request This System for My School`

Primary CTA buttons:
- `Book Assessment`
- `Get Cost Estimate`
- `Talk to SHINE Advisor`

Equivalent behavior:
- Airbnb: booking inventory
- SHINE: booking solar transition

## AI-Native OS Integration
Panel actions should feed backend agents:
- Estimator Agent
- Finance Agent
- Deployment Agent
- Maintenance Agent

Rule:
- Every click creates a project pipeline entry

## Example Left Panel Layout
- Power Status: 24/7 Reliable
- Interested in similar results?
- `Get My School Assessed`
- `Estimate My System Cost`
- `Sponsor This School`
- `Join SHINE Network`

## Why This Is Strategically Powerful
Without conversion:
- Pages remain passive stories

With conversion:
- Pages become demand capture infrastructure

Business effect:
- Airbnb converted listings into transactions
- SHINE can convert impact stories into infrastructure deals

## Clear Winner (Top Recommendation)
Build one conversion engine first:
- `Bring SHINE to My School`

Required intake fields:
- Location
- Student count
- Current power source
- Budget range

Role in funnel:
- Primary pipeline generator

## Next-Level Addition (After Traffic Growth)
Add:
- `Sponsor a Classroom's Power`

Unlocks:
- Philanthropy capital
- ESG funding
- Diaspora engagement

## Execution Tracker
- [x] Move `End-to-End Energy Delivery` and `Solutions` sections to top of About page.
- [x] Make Home page listing-first, with Ecosystem cards as the first major surface after navigation.
- [x] Add header listing mode tabs under SHINE: `Schools`, `Energy Partners`, `Financiers`.
- [x] Keep mode switching on Home without leaving the page.
- [x] Remove school badge strip from Home listing surface.
- [x] Add school authenticity module to School Story pages.
- [x] Add School Story booking counter: `Bring SHINE to My School`.
- [x] Add booking actions: `Book Assessment`, `Get Cost Estimate`, `Talk to SHINE Advisor`.
- [x] Add intake fields: `Location`, `Student count`, `Current power source`, `Budget range`.
- [x] Add local pipeline event capture for CTA and lead submissions.
- [x] Replace story-page `More ... Stories` section with the shared site footer content.
- [x] Enforce top-of-page landing when opening/navigating between story pages.
- [x] Expand card metadata model for richer Airbnb-style listing signals (status, scale, reliability).
- [ ] Connect lead capture to backend API/agent pipeline (Estimator, Finance, Deployment, Maintenance).
- [ ] Add sponsor flow (`Sponsor a Classroom's Power`) as Phase 2 conversion module.

## Next Work Item

# Prompt to Codex (put this into Spec.md as the next work item)

## Feature: SHINE School Metrics Badges + Details Metrics Grid + Hover Tooltips

### Objective
Implement a consistent “Impact Stack” metrics system across:
1) **SchoolCard (homepage carousels)**: show ONLY the top 4 primary metrics as compact icon badges over the hero image.
2) **SchoolDetailsPage (/projects/:slug)**: show ALL 8 metrics (primary + secondary) in a structured “Infrastructure Profile” grid.
3) **Hover behavior**: each icon badge should show a tooltip with a short, high-signal metric sentence (so cards feel like live infrastructure assets).

---

## Definitions

### Primary Metrics (show on SchoolCard AND SchoolDetailsPage)
1. 🛡️ **Resilience Score** (SHINE score, 0–100)
2. 🔋 **Storage / Backup Autonomy** (kWh + hours)
3. 💰 **Savings / Generator Reduction** (% and/or annual savings)
4. 📶 **Connectivity** (internet enabled + uptime)

### Secondary Metrics (show ONLY on SchoolDetailsPage)
5. 📊 **Monitoring / AI Enabled** (monitoring status, forecasting, alerts)
6. 🌿 **Carbon Avoidance** (tons CO2 / year)
7. ⏱️ **Deployment Speed** (weeks)
8. 🎓 **Student Impact** (students impacted)

---

## Task Execution Plan (Codex must complete in order, one task per PR/commit)

### Task 1 — Data model (single source of truth)
- Locate the data source for school/project cards (e.g., `projects.ts`, `schools.ts`, `data/*.ts`, CMS mock, etc).
- Add a `metrics` object to each project with the following shape:

```ts
type SchoolMetrics = {
  resilienceScore: number; // 0-100
  storage: { kwh: number; autonomyHours: number; chemistry?: string }; // e.g. lithium
  savings: { generatorReductionPct?: number; annualDieselSavingsUsd?: number };
  connectivity: { enabled: boolean; provider?: string; uptimePct?: number };

  monitoring?: { enabled: boolean; features?: string[] }; // secondary
  carbon?: { tonsCo2AvoidedPerYear?: number };            // secondary
  deployment?: { durationWeeks?: number };                // secondary
  students?: { count?: number };                          // secondary
};
```

### Task Progress (Impact Stack)
- [x] Task 1 — Data model with `metrics` populated for all school projects.
- [x] Task 2 — SchoolCard primary metric badges (max 4) added with graceful hiding.
- [x] Task 3 — Accessible tooltips on badges (hover/focus + touch toggle behavior).
- [x] Task 4 — SchoolDetails `Infrastructure Profile` grid with primary/secondary hierarchy.
- [x] Task 5 — QA pass (lint/build/type checks clean; responsive metric rendering verified in implementation).
