function checkKey() {
  const correctKey = "@LOUSY_ERROR"; // 🔑 YOUR KEY
  const userKey = document.getElementById("keyInput").value;
  const msg = document.getElementById("msg");

  if (userKey === correctKey) {
    msg.innerHTML = "✅ ACCESS GRANTED";
    msg.style.color = "#00ff00";

    // Redirect after success
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } else {
    msg.innerHTML = "❌ INVALID KEY";
    msg.style.color = "red";
  }
}
