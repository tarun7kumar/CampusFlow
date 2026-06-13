function ChatAssistant() {
  return (
    <div className="chat-assistant">
      <div className="chat-messages">
        {/* Chat messages will render here */}
        <p>Ask me anything about your schedule, emails, or tasks!</p>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  )
}

export default ChatAssistant
