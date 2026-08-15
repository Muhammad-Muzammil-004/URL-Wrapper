// Listen for the keyboard shortcut (Alt + Z)
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-url-wrap") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggle_overlay" });
      }
    });
  }
});
