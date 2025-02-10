"use client";

import React from "react";
import { Message } from "ai";
import { Session } from "next-auth";
import { Chat as PreviewChat } from "@/components/chat";
import Notes from "@/components/notes";
import { useTabStore } from "@/components/store/use-tab-store";

export function Dashboard({
  id,
  initialMessages,
  session,
}: {
  id: string;
  initialMessages: Array<Message>;
  session: Session | null;
}) {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div className="w-full  max-w-2xl mx-auto">
      {activeTab === "chat" ? (
        <PreviewChat
          id={id}
          initialMessages={initialMessages}
          session={session}
        />
      ) : (
        <Notes chatId={id} />
      )}
    </div>
  );
}
