
async function sendTg(text) {
    let tg = {
        token: process.env.TG_TOKEN, 
        chat_id: process.env.TG_CHAT_ID
    }

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The URL to request


    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: `
        Name: ${text.name}
        Email: ${text.email}
        Services: ${text.services}
        website Types: ${text.websiteTypes}
        Specific Features: ${text.specificFeatures}
        contactMethod: ${text.contactMethod}
        Telegram: ${text.tg}
        ` // The text to send
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
