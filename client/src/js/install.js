const butInstall = document.getElementById("buttonInstall");

// event handler for beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// event handler for butInstall button
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  console.log(window.deferredPrompt);
  if (!promptEvent) {
    return;
  }
  // Show prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// event handler for appinstalled event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
