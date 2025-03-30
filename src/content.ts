console.log("Bug Reporter content script loaded!");

document.querySelectorAll("button").forEach((button) => {
  button.style.outline = "2px solid red";

  const flagBtn = document.createElement("div");
  flagBtn.innerText = "🚩";
  flagBtn.style.position = "absolute";
  flagBtn.style.cursor = "pointer";
  flagBtn.style.padding = "5px";
  flagBtn.style.background = "red";
  flagBtn.style.color = "white";
  flagBtn.style.borderRadius = "4px";
  flagBtn.style.display = "none";

  button.addEventListener("mouseenter", () => {
    flagBtn.style.display = "block";
    document.body.appendChild(flagBtn);
    const rect = button.getBoundingClientRect();
    flagBtn.style.top = `${rect.top + window.scrollY}px`;
    flagBtn.style.left = `${rect.left + window.scrollX + rect.width}px`;
  });

  button.addEventListener("mouseleave", () => {
    flagBtn.style.display = "none";
  });

  flagBtn.addEventListener("click", () => {
    const note = prompt("Describe the issue:");
    if (note) {
      chrome.runtime.sendMessage({
        type: "REPORT_BUG",
        url: window.location.href,
        buttonText: button.innerText,
        note,
        timestamp: new Date().toISOString(),
      });
    }
  });
});
