// js/meeting-setup.js

document.addEventListener("DOMContentLoaded", function () {
  // Elementreferenser
  const toggleOptions = document.querySelectorAll(".toggle-option");
  const voiceControls = document.getElementById("voiceControls");
  const startRecordingBtn = document.getElementById("startRecording");
  const statusText = document.getElementById("statusText");
  const timerDisplay = document.getElementById("recordingTimer");

  let seconds = 0;
  let timer;

  // Toggle mellan manuell/röst
  toggleOptions.forEach((option) => {
    option.addEventListener("click", function () {
      toggleOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");

      if (this.dataset.inputType === "voice") {
        voiceControls.style.display = "block";
      } else {
        voiceControls.style.display = "none";
        stopRecording();
      }
    });
  });

  // Inspelningskontroll
  startRecordingBtn.addEventListener("click", function () {
    if (this.classList.contains("recording")) {
      stopRecording();
      this.innerHTML = '<i class="fas fa-microphone"></i> Starta inspelning';
      statusText.textContent = "Transkriberar...";

      // Simulera AI-bearbetning
      setTimeout(() => {
        statusText.textContent = "Färdig! Information har fyllts i.";
        simulateAutoFill();
      }, 2000);
    } else {
      startRecording();
      this.innerHTML = '<i class="fas fa-stop"></i> Avsluta inspelning';
    }
  });

  function startRecording() {
    startRecordingBtn.classList.add("recording");
    voiceControls.classList.add("recording");
    statusText.textContent = "Inspelning pågår...";

    // Timer
    seconds = 0;
    timer = setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopRecording() {
    startRecordingBtn.classList.remove("recording");
    voiceControls.classList.remove("recording");
    clearInterval(timer);
  }

  function simulateAutoFill() {
    // Exempeldata för prototyp
    const exampleData = {
      "meeting-title": "Kvartalsgranskning med Acme Corp",
      "meeting-purpose": "Diskutera Q3-resultat och Q4-strategi",
      "meeting-aim": "Nå konsensus om budgetförslag",
      "specific-goals": "1. Godkänn Q3-rapport\n2. Beslut om Q4-marknadsföring",
    };

    for (const [id, value] of Object.entries(exampleData)) {
      const element = document.getElementById(id);
      if (element) element.value = value;
    }

    setTimeout(() => {
      statusText.textContent = "Klicka för att börja inspelning";
      timerDisplay.textContent = "00:00";
    }, 3000);
  }
});
