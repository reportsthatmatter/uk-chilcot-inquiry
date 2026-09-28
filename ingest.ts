import { pipeline, runningFurniture, quoteInset, numberedParagraphs, listedHeadings } from "@rtm/ingest";

/**
 * How this report is built. Owned by the report: every decision that shaped
 * its text is named here, and the passes it composes are library code, so a
 * fix to a shared pass reaches every report that calls it.
 */
export default pipeline({
  id: "uk-chilcot-inquiry",
  title: "The Report of the Iraq Inquiry — Executive Summary",
  authors: "Sir John Chilcot (Chairman), Sir Lawrence Freedman, Sir Martin Gilbert, Baroness Usha Prashar, Sir Roderic Lyne",
  published_at: "6 July 2016",
  source_url:
    "https://webarchive.nationalarchives.gov.uk/ukgwa/20171123123237mp_/http://www.iraqinquiry.org.uk/media/246416/the-report-of-the-iraq-inquiry_executive-summary.pdf",
  repo: ".",
  volumes: [
    {
      path: "archive/the-report-of-the-iraq-inquiry-executive-summary.pdf",
      sha256: "2be8c4385850b3216a2359809445996907d17e9d24b92437528438b3e2682cc4",
    },
  ],
  passes: [
    // Running heads alternate "The Report of the Iraq Inquiry" (verso) and
    // "Executive Summary" (recto), with a bare page number centred beneath.
    runningFurniture(),
    // Quoted documents and Cabinet-committee papers sit four columns in from
    // the body, the same depth as Saville; the default of five would miss them.
    quoteInset(4),
    // "19.", "104." numbered paragraphs, continuous through the whole summary.
    numberedParagraphs(),
    // The Executive Summary opens with a single front contents (pp.1-3)
    // listing every section and subsection to a page number, rather than a
    // per-chapter contents (Saville) or a numbered-section scheme (9/11). A
    // heading stands only if that contents names it.
    listedHeadings(),
  ],
});
