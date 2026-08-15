function toggleUrlOverlay() {
  let existingOverlay = document.getElementById("urlwrap-overlay");

  // Toggle off if already open
  if (existingOverlay) {
    existingOverlay.remove();
    return;
  }

  // Create overlay container
  const overlay = document.createElement("div");
  overlay.id = "urlwrap-overlay";

  // Header section
  const header = document.createElement("div");
  header.className = "urlwrap-header";
  header.innerHTML = `<span><strong>urlWrap</strong> (Alt + Z)</span>`;

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.onclick = () => overlay.remove();
  header.appendChild(closeBtn);

  // URL display section
  const urlText = document.createElement("div");
  urlText.className = "urlwrap-body";
  urlText.textContent = window.location.href;

  // Assembly
  overlay.appendChild(header);
  overlay.appendChild(urlText);
  document.body.appendChild(overlay);
}

// Listen for keyboard signal from background worker
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "toggle_overlay") {
    toggleUrlOverlay();
  }
});