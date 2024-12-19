"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, Loader2 } from "lucide-react";

interface TextToSpeechButtonProps {
  text: string;
}

export function TextToSpeechButton({ text }: TextToSpeechButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleTextToSpeech = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate speech");
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
      newAudio.play();
    } catch (error) {
      console.error("Error generating speech:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleTextToSpeech}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Volume2 className="h-4 w-4" />
      )}
    </Button>
  );
}
