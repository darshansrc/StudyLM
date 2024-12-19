"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTabStore } from "./store/use-tab-store";

export default function NavTab() {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-md mx-auto"
    >
      <TabsList className="grid w-full grid-cols-2 p-1 bg-zinc-800">
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
      </TabsList>
    </Tabs>
  );
}
