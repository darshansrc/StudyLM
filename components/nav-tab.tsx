"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTabStore } from "./store/use-tab-store";
import { useRouter } from "next/navigation";

export default function NavTab() {
  const { activeTab, setActiveTab } = useTabStore();
  const router = useRouter();

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-md mx-auto"
    >
      <TabsList className="grid w-full grid-cols-3 p-1 bg-zinc-800">
        <TabsTrigger
          value="chat"
          className={`transition-colors duration-200 ${
            activeTab === "chat"
              ? "bg-zinc-900 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Chat
        </TabsTrigger>
        <TabsTrigger
          value="notes"
          className={`transition-colors duration-200 ${
            activeTab === "notes"
              ? "bg-zinc-900 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Notes
        </TabsTrigger>
        <TabsTrigger
          value="quiz"
          onClick={() => router.push("/quiz")}
          className={`transition-colors duration-200 ${
            activeTab === "quiz"
              ? "bg-zinc-900 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Quiz
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
