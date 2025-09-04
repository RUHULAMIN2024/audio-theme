import { Music } from "lucide-react";
import { useAudio } from "../../hooks/useAudio";

export default function AudioPlayer2({ attributes }) {
  const { isPlaying, currentTime, duration, togglePlay, formatTime } =
    useAudio();
  const { audioData } = attributes;

  return (
    <div className="audio-player-2">
      {/* Header */}
      <div className="player-header">
        <div className="music-icon-container">
          <Music size={18} />
        </div>
        <div className="track-info">
          <h3 className="track-title">{audioData.title}</h3>
          <p className="artist-name">{audioData.artist}</p>
        </div>
      </div>

      {/* Progress Section */}
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
      </div>
    </div>
  );
}
