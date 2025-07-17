"use client";

import { useRef, useState } from "react";

const tracks = [
  {
    title: "Interstellar Main Theme",
    artist: "Hans Zimmer",
    src: "/audio/TLC.mp3",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "/audio/Lirik Lagu “MALING” _ Sukses Lancar Rejeki _ [3vvkufiNSrQ].mp3",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "/audio/DJ BARUDAK PHONK TERROR MELODY KANE _ DJ TIK TOK TERBARU 2025 [-SNrUA86dmo].mp3",
  },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    setCurrentTrack(next);
    setPlaying(false);
    setTimeout(() => audioRef.current?.play(), 100);
    setPlaying(true);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + tracks.length) % tracks.length;
    setCurrentTrack(prev);
    setPlaying(false);
    setTimeout(() => audioRef.current?.play(), 100);
    setPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-center justify-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white shadow-lg border border-white/20 w-fit">
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
        autoPlay
        loop={false}
      />

      <button
        onClick={prevTrack}
        className="text-lg hover:text-blue-300 transition"
        aria-label="Previous"
      >
        ⏮
      </button>
      <button
        onClick={togglePlay}
        className="text-lg hover:text-blue-300 transition"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? "⏸" : "▶️"}
      </button>
      <button
        onClick={nextTrack}
        className="text-lg hover:text-blue-300 transition"
        aria-label="Next"
      >
        ⏭
      </button>
    </div>
  );
}
