"use client"

import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from "react"
import { useIsClient } from "@/hooks/useIsClient"

type MusicContextType = {
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  togglePlay: () => void
  isClient: boolean
  currentTrack: string
  setCurrentTrack: (track: string) => void
  volume: number
  setVolume: (volume: number) => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState("/music/wonderful-cinematic-piano1.mp3")
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isClient = useIsClient()

  useEffect(() => {
    if (isClient && !audioRef.current) {
      audioRef.current = new Audio(currentTrack)
      audioRef.current.loop = true
      audioRef.current.volume = volume
    }
  }, [isClient, currentTrack, volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current && audioRef.current.src !== currentTrack) {
      const wasPlaying = isPlaying
      if (isPlaying) {
        audioRef.current.pause()
      }
      audioRef.current.src = currentTrack
      if (wasPlaying) {
        audioRef.current.play().catch(console.error)
      }
    }
  }, [currentTrack, isPlaying])

  const togglePlay = () => {
    if (!isClient || !audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }

  const safeSetIsPlaying = (playing: boolean) => {
    if (!isClient || !audioRef.current) return
    
    if (playing && !isPlaying) {
      audioRef.current.play().catch(console.error)
    } else if (!playing && isPlaying) {
      audioRef.current.pause()
    }
    setIsPlaying(playing)
  }

  const safeSetCurrentTrack = (track: string) => {
    if (!isClient) return
    setCurrentTrack(track)
  }

  const safeSetVolume = (vol: number) => {
    if (!isClient) return
    setVolume(vol)
  }

  return (
    <MusicContext.Provider value={{ 
      isPlaying, 
      setIsPlaying: safeSetIsPlaying, 
      togglePlay,
      isClient,
      currentTrack,
      setCurrentTrack: safeSetCurrentTrack,
      volume,
      setVolume: safeSetVolume
    }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusicContext() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error("useMusicContext must be used within a MusicProvider")
  }
  return context
}
