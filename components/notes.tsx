"use client";
import React from "react";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";

export default function Notes(props: { chatId: string }) {
  const editor = useCreateBlockNote();

  if (editor === undefined) {
    return "Loading content...";
  }
  return (
    <div className="h-[calc(100vh-50px)] w-full pt-20 overflow-scroll no-scrollbar ">
      <BlockNoteView editor={editor} theme={"dark"} />
    </div>
  );
}
