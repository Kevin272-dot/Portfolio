"use client";

import dynamic from "next/dynamic";
import { FileText } from "lucide-react";

const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="border border-border bg-near-black-light/30">
      <div className="flex items-center justify-center h-[620px] bg-near-black-lighter/40 animate-pulse">
        <div className="flex items-center gap-3 text-text-tertiary">
          <FileText size={16} className="animate-pulse-gold" />
          <span className="text-xs font-mono tracking-widest">LOADING RESUME…</span>
        </div>
      </div>
    </div>
  ),
});

interface ResumePreviewProps {
  file: string;
  height?: number;
}

export function ResumePreview({ file, height = 620 }: ResumePreviewProps) {
  return <ResumeViewer file={file} height={height} />;
}