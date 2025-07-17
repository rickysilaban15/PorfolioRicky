"use client";

import { useRef, useState } from "react";

const tracks = [
  {
    title: "Interstellar Main Theme",
    artist: "Hans Zimmer",
    src: "/audio/interstellar.mp3",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "/audio/song2.mp3",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "/audio/song3.mp3",
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
  <div className="p-4 bg-black/40 rounded-xl text-white">
    <div className="mb-2">Volume</div>
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={handleVolumeChange}
      aria-label="Volume control"
      className="w-full accent-white"
    />
  </div>
);
}
