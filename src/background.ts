chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "REPORT_BUG") {
    fetch("https://tmazfdjzncsfskdttmye.supabase.co/rest/v1/bug_reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtYXpmZGp6bmNzZnNrZHR0bXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNzI4OTgsImV4cCI6MjA1ODk0ODg5OH0.oyraT-TGjFV2dXsABxRT6KSBLrF2s0MqCJOnR7iXuDo",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then(() => console.log("Report saved"))
      .catch(console.error);
  }
});
