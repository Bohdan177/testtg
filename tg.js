
async function sendTg(text) {
    let tg = {
        token: "B6869529917:AAHPhFnVk5i2gB-XPiNDoqTb8Mh-S9MiRrw", // Your bot's token that got from @BotFather
        chat_id: "testtgs1" // The user's(that you want to send a message) telegram chat id
    }

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The URL to request

    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: text // The text to send
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        if (response.ok) {
            console.log("Message sent successfully.");
        } else {
            console.error("Failed to send message. Status:", response.status);
        }
    } catch (error) {
        console.error("Error sending message:", error);
    }
}