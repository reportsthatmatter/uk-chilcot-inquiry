# The Report of the Iraq Inquiry — Executive Summary

HC 264, published 6 July 2016. Sir John Chilcot's inquiry into the UK's
involvement in the 2003 invasion of Iraq and its aftermath — the Executive
Summary of a report whose full text runs to 12 volumes and roughly 2.6 million
words. Only the Executive Summary is ingested here.

## Scope

The full Iraq Inquiry report is very large (12 volumes, about 2.6 million
words, plus a further volume of media transcripts and a separate volume of
contemporaneous notes and records). Ingesting all of it is a separate scoping
decision, the same way Volumes II-X of the Bloody Sunday Inquiry were left for
`reportsthatmatter-wdt` once Volume I shipped. That decision for Chilcot's
remaining volumes is tracked in `reportsthatmatter-0a7` (filed alongside this
report). The Executive Summary is complete in itself: a 150-page, ~140,000-word
digest of the Inquiry's findings, written to be read on its own, and it is what
most readers actually want.

## Source and edition

The Inquiry published the report in two parallel editions on 6 July 2016:

- **The HC print edition** (`HC 264`, PDF/X-1 prepress file, as mirrored on
  `assets.publishing.service.gov.uk`): built for print, and its text layer
  carries the print workflow's own artefacts — InDesign job-slug lines
  (`46561_00c Viking_Executive Summary.indd 1`, print-run dates) interleaved
  into the extracted text, and ligatures (`ﬁ`, `ﬂ`) in place of plain letter
  pairs.
- **The Inquiry's own A4 web edition**, hosted at the time on
  `iraqinquiry.org.uk` and preserved by the UK Government Web Archive: the
  same text, reflowed to A4, tagged for accessibility, with none of the print
  edition's slug lines or ligatures.

This report is built from **the web edition**, pinned by SHA-256 below. Both
editions were fetched and their extracted text compared page-for-page; aside
from the print edition's slug lines and ligatures, the two are identical.

- **Archive copy:** `archive/the-report-of-the-iraq-inquiry-executive-summary.pdf`
- **Original source:** [iraqinquiry.org.uk, as archived 23 November 2017](https://webarchive.nationalarchives.gov.uk/ukgwa/20171123123237mp_/http://www.iraqinquiry.org.uk/media/246416/the-report-of-the-iraq-inquiry_executive-summary.pdf)
- **SHA-256:** `2be8c4385850b3216a2359809445996907d17e9d24b92437528438b3e2682cc4`
- **Licence:** Crown copyright 2016, published under the Open Government Licence v3.0.

## Build

`ingest.ts` declares how the report is turned into Markdown. Rebuild from the
site repo with `pnpm ingest run uk-chilcot-inquiry`.

## Processing notes

[`PROCESSING.md`](PROCESSING.md) records how this edition was read from the
PDF and where it still falls short. The site publishes it at
`/reports/uk-chilcot-inquiry/processing`. The site copies it in with
`pnpm ingest aggregate`.

## Reference texts

`reference/wikisource/` mirrors the volunteer-proofread Wikisource transcription of the Report of the Iraq Inquiry: Executive Summary, one file per printed page (142 of its 150 pages are proofread), as served by the MediaWiki API: `pages/<n>.wiki` (the wikitext), `manifest.json` (page and revision ids, proofread levels, SHA-256 of every file, proofreaders credited, licence) and `pagemap.json` (each page's PDF page, measured against the PDF's text). The underlying text is public; Wikisource's transcription and formatting are CC BY-SA 4.0, so this is a measurement reference for `pnpm score` in the site repo (word error rate and footnote-marker accuracy per page, see docs/scoring.md there), not served text. Rebuild with `scripts/wikisource/fetch.mjs` and `map.mjs` in the site repo.
