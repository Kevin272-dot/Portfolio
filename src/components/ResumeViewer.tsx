"use client";

import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, Download, ExternalLink, ZoomIn, ZoomOut, FileText } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PreviewLoading() {
  return (
    <div className="flex items-center justify-center h-[520px] bg-near-black-lighter/40 animate-pulse">
      <div className="flex items-center gap-3 text-text-tertiary">
        <FileText size={16} className="animate-pulse-gold" />
        <span className="text-xs font-mono tracking-widest">LOADING RESUME…</span>
      </div>
    </div>
  );
}

function PreviewError() {
  return (
    <div className="flex flex-col items-center justify-center h-[520px] bg-near-black-lighter/40 gap-4 text-center px-6">
      <FileText size={24} className="text-text-tertiary" />
      <p className="text-xs text-text-secondary tracking-wider max-w-sm">
        The preview could not be loaded. You can still open or download the PDF below.
      </p>
    </div>
  );
}

interface ResumeViewerProps {
  file: string;
  height?: number;
}

export default function ResumeViewer({ file, height = 620 }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoaded(true);
  }, []);

  const nextPage = () => setPageNumber((p) => Math.min(p + 1, numPages ?? 1));
  const prevPage = () => setPageNumber((p) => Math.max(p - 1, 1));

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  return (
    <div className="border border-border bg-near-black-light shadow-card overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-border bg-near-black-lighter/30 flex-wrap">
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevPage}
            disabled={!numPages || pageNumber <= 1}
            className="p-1.5 text-text-secondary hover:text-off-white hover:bg-gold/10 disabled:opacity-30 disabled:hover:text-text-secondary disabled:hover:bg-transparent transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-[10px] font-mono tracking-wider text-text-secondary min-w-[80px] text-center tabular-nums">
            {numPages ? `${pageNumber} / ${numPages}` : "—"}
          </span>
          <button
            onClick={nextPage}
            disabled={!numPages || pageNumber >= numPages}
            className="p-1.5 text-text-secondary hover:text-off-white hover:bg-gold/10 disabled:opacity-30 disabled:hover:text-text-secondary disabled:hover:bg-transparent transition-colors"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1.5 text-text-secondary hover:text-off-white hover:bg-gold/10 disabled:opacity-30 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut size={14} />
          </button>
          <button
            onClick={resetZoom}
            className="text-[10px] font-mono tracking-wider text-text-tertiary hover:text-gold px-1.5 py-1 transition-colors tabular-nums"
            aria-label="Reset zoom"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            onClick={zoomIn}
            disabled={scale >= 2.5}
            className="p-1.5 text-text-secondary hover:text-off-white hover:bg-gold/10 disabled:opacity-30 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn size={14} />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-text-secondary hover:text-off-white hover:bg-gold/10 transition-colors"
            aria-label="Open PDF in new tab"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={file}
            download
            className="p-1.5 text-text-secondary hover:text-off-white hover:bg-gold/10 transition-colors"
            aria-label="Download PDF"
          >
            <Download size={14} />
          </a>
        </div>
      </div>

      {/* Document viewport */}
      <div
        className="overflow-auto flex justify-center py-6 px-4 bg-near-black-lighter/40"
        style={{ maxHeight: height }}
      >
        {failed ? (
          <PreviewError />
        ) : (
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={() => setFailed(true)}
            loading={<PreviewLoading />}
            error={<PreviewError />}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={<PreviewLoading />}
              error={<PreviewError />}
              className="shadow-[0_4px_24px_rgba(28,28,28,0.18)] bg-white"
            />
          </Document>
        )}
      </div>

      {/* Footer status */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-near-black-lighter/30">
        <span className="text-[9px] font-mono tracking-widest text-text-tertiary">
          {loaded ? "PREVIEW READY" : "LOADING PREVIEW"}
        </span>
        <span className="text-[9px] font-mono tracking-widest text-text-tertiary">
          {numPages ? `${numPages} PAGE${numPages > 1 ? "S" : ""}` : ""}
        </span>
      </div>
    </div>
  );
}