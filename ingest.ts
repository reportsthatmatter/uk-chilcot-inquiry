import {
  pipeline,
  runningFurniture,
  quoteInset,
  numberedParagraphs,
  escapeNumberedParagraphs,
  listedHeadings,
  unmarkedHeadings,
  recoverListedHeadings,
} from "@rtm/ingest";

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
    // Set at the margin, not indented like Philip Morris's findings — without
    // this, each paragraph's own "20. " reaches Markdown as a bare ordered-list
    // opener, so only ~60 of ~950 paragraphs carried a citable id
    // (reportsthatmatter-4qw).
    escapeNumberedParagraphs(),
    // The Executive Summary opens with a single front contents (pp.1-3)
    // listing every section and subsection to a page number, rather than a
    // per-chapter contents (Saville) or a numbered-section scheme (9/11). A
    // heading stands only if that contents names it.
    listedHeadings(),
    // 75 of the contents' 88 entries are set with no capital, number or
    // division label at all ("UK policy before 9/11"), so nothing about
    // their own shape says they are headings — only the contents does.
    unmarkedHeadings(),
    // The 19 entries unmarkedHeadings leaves: headings that open a PDF page,
    // follow a footnote marker, or wrap over two lines, and the contents entry
    // whose leaders squeeze down to a single dot (see PROCESSING.md).
    recoverListedHeadings(),
  ],
});
