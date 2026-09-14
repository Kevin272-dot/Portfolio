# Portfolio TODO — Next Session

## Build Status
- [x] Next.js project initialized (Node 20 via nvm)
- [x] All pages compile and build successfully
- [x] Lint passes clean
- [x] 9 routes working: Home, Resume, 5 project case studies, API, 404

---

## CRITICAL — Must Do Before Deploying

### Environment Variables
- [ ] Create `.env.local` with:
  ```
  RESEND_API_KEY=re_xxx
  CONTACT_EMAIL=lrkevindaniel@gmail.com
  ```

### Data File Placeholders to Fill
All in `src/data/`:

**profile.ts**
- [ ] `linkedin` — replace `"[ADD LINK]"` with real LinkedIn URL

**experience.ts**
- [ ] `startDate` — actual start date at 180DC
- [ ] `endDate` — already set to "Present"
- [ ] `description` array — replace `[EXACT RESPONSIBILITIES]` with real bullets
- [ ] `metrics.teamSize` — replace `[TEAM SIZE]`
- [ ] `metrics.impact` — replace `[IMPACT METRICS]`

**skills.ts**
- [ ] `LANGUAGES[0]` — remove `[VERIFY]` or replace with actual verified skill
- [ ] `DATABASES` — replace `[ADD VERIFIED DATABASES]` with real databases used

**projects.ts**
- [ ] Club Management System — fill all `[ADD ...]` placeholders:
  - features, tech stack, database, auth, deployment, users, impact
- [ ] Synapse GitHub URL — currently points to profile root, link to actual repo if separate

**research.ts**
- [ ] Fill all `[RESEARCH ...]` placeholders if ready

### Project Case Study Pages — Placeholders
- [ ] `projects/club-management-system/page.tsx` — Problem, Solution, Features, Challenges, Impact, Future Work
- [ ] `projects/mcp/page.tsx` — Architecture diagram placeholder
- [ ] `projects/qnn-vs-mlp/page.tsx` — Dataset, Metrics, Results, Research Questions
- [ ] All project pages — screenshot/demo image placeholders

### Resume Page
- [ ] Add actual degree name
- [ ] Add CGPA
- [ ] Add date range
- [ ] Update LinkedIn link
- [ ] Update portfolio URL

---

## DESIGN / UX Improvements

- [ ] Add `favicon.ico` or proper SVG favicon
- [ ] Add OpenGraph image (og-image.png in `/public`)
- [ ] Review mobile layout on real device
- [ ] Test all navigation links work (especially anchor links on home page)
- [ ] Add smooth scroll offset for fixed navbar (anchor links jump too high)

---

## CONTENT Improvements

- [ ] Add real project screenshots to case study pages (replace `[SCREENSHOT / DEMO IMAGE]`)
- [ ] Add architecture diagrams (can use SVG or Mermaid)
- [ ] Write actual resume bullets using ACTION + TECHNOLOGY + PROBLEM + RESULT format
- [ ] Review Synapse case study for accuracy — make sure no invented claims

---

## FEATURES to Consider

- [ ] PDF download for resume (generate PDF version)
- [ ] Add `next-sitemap` for SEO sitemap
- [ ] Add structured data (JSON-LD) for person schema
- [ ] Dark/light mode toggle (if desired — current design is dark-only which is fine)
- [ ] Add reading time or last-updated dates to project pages

---

## DEPLOYMENT

- [ ] Choose platform: Vercel (easiest for Next.js) or self-hosted
- [ ] Connect GitHub repo
- [ ] Set environment variables in deployment platform
- [ ] Configure custom domain if desired
- [ ] Test production build on deployed URL
