import React, { useState, useRef, useEffect } from "react"
import { Container, Brand } from "./style"
import { RiPlayCircleLine } from "react-icons/ri"
import { HiOutlinePause } from "react-icons/hi"

import brand from "../../assets/svg/brand.svg"

export default function videoPlayer({ videoSource }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const videoElement = videoRef.current

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData)

      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData)
      }
    }

  }, [])

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        controls={false}
        onClick={handlePlayPause}
        src={videoSource}
      ></video>
      <Brand>
        <div>
          <img src={brand} alt="Marca" />
        </div>
      </Brand>

      {(isHovered || (!isPlaying && isLoaded)) && (
        <button onClick={handlePlayPause}>
          {isPlaying ? null : <RiPlayCircleLine />}
        </button>
      )}
    </Container>
  )
}
