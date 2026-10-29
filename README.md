# Lingxiao Gao — personal homepage

The personal homepage of Lingxiao Gao: an evidence page for AI + smart manufacturing. It presents measured results rather than claims — the flagship case is ResiliMES-AI, a semiconductor fab rescheduling system built on one principle: **rules decide, AI explains**.

## Stack

- [Astro 5](https://astro.build) (static site, English home page + Japanese one-pager)
- Hosted on GitHub Pages via the workflow in `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev     # local dev server
npm run build   # production build into dist/
```

## Notes

- The two Gantt screenshots on the flagship section are hotlinked from the public [ResiliMES-AI](https://github.com/Toygaolingxiao/ResiliMES-AI) repository (`docs/deck/img/p5_menu.jpg`, `p5_panel.jpg`) rather than stored in this repo.
- Planned custom domain: `me.sommeatlas.com` (not yet bound; until then the site is served from the default GitHub Pages address).
