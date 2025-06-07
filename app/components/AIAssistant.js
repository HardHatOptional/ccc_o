"use client"; // Ensures state and event handling work in Next.js

import React, { useState } from "react";
import "./AIAssistant.css"; // Import styles

const AIAssistant = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const toggleWidget = () => setIsVisible(!isVisible);

    const handleSubmit = async (query) => {
        if (!query.trim()) return;

        setIsLoading(true);
        setMessages(prev => [...prev, { type: "user", content: query }]);

        try {
            const response = await fetch(`https://api.abacus.ai/api/v0/deployment/${process.env.NEXT_PUBLIC_DEPLOYMENT_ID}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ABACUS_API_TOKEN}`
                },
                body: JSON.stringify({ query })
            });

            const data = await response.json();
            setMessages(prev => [...prev, { type: "assistant", content: data.response || "No response." }]);
        } catch (error) {
            console.error("API Error:", error);
            setMessages(prev => [...prev, { type: "error", content: "Error contacting AI Assistant." }]);
        }

        setIsLoading(false);
    };

    return (
        <div className="assistant-widget">
            <div className="widget-button" onClick={toggleWidget}>
                <span>💡 Get Help</span>
            </div>
            {isVisible && (
                <div className="widget-container">
                    <div className="widget-header">
                        <h3>Career Assistant</h3>
                        <button onClick={toggleWidget} className="close-button">×</button>
                    </div>
                    <div className="chat-container">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}-message`}>{msg.content}</div>
                        ))}
                        {isLoading && <div className="message loading-message">Thinking...</div>}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit(e.target.value);
                                    e.target.value = "";
                                }
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;

