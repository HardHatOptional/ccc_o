import AIAssistant from './components/AIAssistant';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <AIAssistant /> {/* AI Assistant Widget */}
            </body>
        </html>
    );
}

