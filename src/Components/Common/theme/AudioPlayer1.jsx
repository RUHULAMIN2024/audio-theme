import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useAudio } from "../../hooks/useAudio";

export default function AudioPlayer1({ attributes }) {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    adjustVolume,
    formatTime,
  } = useAudio();
  const { audioData } = attributes;
  console.log(audioData.playBtn);
  console.log(audioData.pauseBtn);
  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    seek(newTime);
  };

  const handleVolumeChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.max(0, Math.min(1, clickX / width));
    adjustVolume(newVolume);
  };

  return (
    <div className="audio-player-1">
      <div className="player-header">
        <div>
          <h3 className="track-title">{audioData.title}</h3>
          <p className="artist-name">{audioData.artist}</p>
        </div>

        <div className="status-indicator">
          {isPlaying ? (
            <div className="wave">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="wave-bar"></div>
              ))}
            </div>
          ) : (
            <span className="duration-text">{formatTime(duration)}</span>
          )}
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-container" onClick={handleProgressClick}>
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
          <Volume2 size={16} className="volume-icon" />
          <div className="volume-bar-container" onClick={handleVolumeChange}>
            <div
              className="volume-bar"
              style={{ width: `${volume * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
