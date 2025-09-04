import { Volume2 } from "lucide-react";
import { useAudio } from "../../hooks/useAudio";

export default function AudioPlayer3({ attributes }) {
  const { isPlaying, currentTime, duration, togglePlay, formatTime } =
    useAudio();
  const { audioData } = attributes;

  return (
    <div className="audio-player-3">
      {/* Header */}
      <div className="player-header">
        <div>
          <h3 className="track-title">{audioData.title}</h3>
          <p className="artist-name">{audioData.artist}</p>
        </div>

        <div className="album-cover">
          <img
            src={
              audioData.cover ||
              "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
            alt={audioData.title}
            className="cover-image"
          />
        </div>
      </div>

      {/* Visualizer Section (special) */}
      <div className="visualizer-section">
        <div className="visualizer-container">
          <div className="visualizer-bars">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="visualizer-bar"
                  style={{
                    height: `${4 + Math.random() * 16}px`,
                    backgroundColor:
                      i / 10 < currentTime / duration ? "#22D3EE" : "#4B5563",
                  }}
                ></div>
              ))}
          </div>
        </div>
      </div>

      {/* Progress Section (same as others) */}
      <div className="progress-section">
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <button className="SkipBack">
          <span
            dangerouslySetInnerHTML={{ __html: audioData?.SkipBack }}
          ></span>
        </button>
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? (
            <span
              dangerouslySetInnerHTML={{ __html: audioData?.pauseBtn }}
            ></span>
          ) : (
            <span
              className="play-icon"
              dangerouslySetInnerHTML={{ __html: audioData?.playBtn }}
            ></span>
          )}
        </button>
        <button className="SkipForward">
          <span
            dangerouslySetInnerHTML={{ __html: audioData?.SkipForward }}
          ></span>
        </button>

        <div className="volume-control">
          <Volume2 size={20} className="volume-icon" />
          <div className="volume-bar-container">
            <div
              className="volume-bar"
              style={{ width: "70%" }} 
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
