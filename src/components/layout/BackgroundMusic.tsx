"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";
import { toast } from "sonner";
import { useColorTheme } from "@/context/ColorThemeContext";

const YOUTUBE_VIDEO_ID = "-UfI1X-MSig";
const SONG_TITLE = "Bliss — Lofi Hip Hop Beat";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { activePreset } = useColorTheme();

  useEffect(() => {
    // Attempt automatic playback on initial load
    const timer = setTimeout(() => {
      sendIframeCommand("playVideo");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sendIframeCommand = (command: string, args: string = "") => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: args }),
        "*"
      );
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendIframeCommand("pauseVideo");
      setIsPlaying(false);
      toast.info("Background Music Paused");
    } else {
      sendIframeCommand("playVideo");
      setIsPlaying(true);
      toast.success(`🎵 Playing "${SONG_TITLE}"`, {
        description: "Enjoy the chill bliss lofi beat while exploring the portfolio.",
      });
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      sendIframeCommand("unMute");
      setIsMuted(false);
    } else {
      sendIframeCommand("mute");
      setIsMuted(true);
    }
  };

  return (
    <div className="relative inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm">
      {/* Hidden YouTube IFrame Audio Engine */}
      <iframe
        ref={iframeRef}
        id="bg-music-youtube-iframe"
        width="1"
        height="1"
        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0`}
        title={SONG_TITLE}
        className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none border-none"
        allow="autoplay; encrypted-media"
      />

      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all text-xs font-semibold group"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        title={isPlaying ? `Pause "${SONG_TITLE}"` : `Play "${SONG_TITLE}"`}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-dynamic-primary group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform fill-current" />
          )}
        </span>

        {/* Soundwave Equalizer Animation */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3 px-1">
            <span
              className="w-0.5 bg-dynamic-primary animate-[bounce_0.8s_ease-in-out_infinite] rounded-full"
              style={{ height: "100%", backgroundColor: activePreset.hex }}
            />
            <span
              className="w-0.5 bg-dynamic-primary animate-[bounce_1.1s_ease-in-out_infinite_0.2s] rounded-full"
              style={{ height: "60%", backgroundColor: activePreset.hex }}
            />
            <span
              className="w-0.5 bg-dynamic-primary animate-[bounce_0.9s_ease-in-out_infinite_0.4s] rounded-full"
              style={{ height: "80%", backgroundColor: activePreset.hex }}
            />
          </div>
        ) : (
          <Music className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
        )}

        <span className="hidden lg:inline text-[11px] font-mono truncate max-w-[120px]">
          {isPlaying ? "Stay Beat" : "Play Beat"}
        </span>
      </button>

      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-rose-500" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
          )}
        </button>
      )}
    </div>
  );
}
