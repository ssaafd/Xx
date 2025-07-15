
async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    const res = await fetch("/api/grok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    responseElement.textContent = data.reply || "Erreur.";
}
