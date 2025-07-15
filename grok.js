
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { message } = req.body;

    const apiKey = "xai-8mpOkik6NyB8ZOwKY0FmjXaz7qPMy4yJzAj1vc84iGJP59bn6vo5cO7RkCTwuHeztnDywQeuYdH0Paj5";

    try {
        const response = await fetch("https://grok.x.ai/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        res.status(200).json({ reply: data.reply || "Pas de réponse" });

    } catch (error) {
        res.status(500).json({ error: "Erreur serveur", detail: error.toString() });
    }
}
