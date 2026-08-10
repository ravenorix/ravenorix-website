document.addEventListener("DOMContentLoaded", () => {
  const players = document.querySelectorAll(".music-preview");

  players.forEach((player) => {
    const audioUrl = player.dataset.audio;

    if (!audioUrl) return;

    const audio = new Audio(audioUrl);

    const playButton = player.querySelector(".music-play-button");
    const pauseButton = player.querySelector(".music-pause-button");
    const progress = player.querySelector(".music-progress");
    const currentTime = player.querySelector(".music-current-time");
    const duration = player.querySelector(".music-duration");

    if (!playButton || !pauseButton || !progress) return;

    const formatTime = (seconds) => {
      if (!Number.isFinite(seconds)) return "0:00";

      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);

      return `${minutes}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    };

    playButton.addEventListener("click", () => {
      audio.play();
    });

    pauseButton.addEventListener("click", () => {
      audio.pause();
    });

    audio.addEventListener("loadedmetadata", () => {
      progress.max = audio.duration;
      progress.value = 0;

      if (duration) {
        duration.textContent = formatTime(audio.duration);
      }
    });

    audio.addEventListener("timeupdate", () => {
      progress.value = audio.currentTime;

      if (currentTime) {
        currentTime.textContent = formatTime(audio.currentTime);
      }
    });

    progress.addEventListener("input", () => {
      audio.currentTime = Number(progress.value);
    });

    audio.addEventListener("ended", () => {
      progress.value = 0;

      if (currentTime) {
        currentTime.textContent = "0:00";
      }
    });
  });
});