"use client";
import React, { useState, useEffect } from "react";
import { Content } from "@tiptap/react";
import { MinimalTiptapEditor } from "./minimal-tiptap";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Notes(props: { chatId: string }) {
  const [value, setValue] = useState<Content>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`notes-${props.chatId}`);
      if (stored) setValue(stored);
    }
  }, [props.chatId]);

  const handleChange = (newContent: Content) => {
    setValue(newContent);
    localStorage.setItem(`notes-${props.chatId}`, newContent as string);
  };

  const handleDownload = () => {
    const blob = new Blob([value as string], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `notes-${props.chatId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-[calc(100vh-50px)] w-full pt-20 overflow-scroll no-scrollbar">
      <div className="flex justify-end px-4 mb-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDownload}
          className="hover:bg-gray-800"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <TooltipProvider>
        <MinimalTiptapEditor
          value={value}
          onChange={handleChange}
          className="w-full min-h-[75vh] "
          editorContentClassName="p-4 prose prose-invert max-w-none"
          output="html"
          placeholder="Start typing your notes..."
          autofocus={true}
          editable={true}
          editorClassName="focus:outline-none"
        />
      </TooltipProvider>
    </div>
  );
}
