function EmailCard({ email }) {
  return (
    <div className="email-card">
      <h3>{email?.subject || 'Email Subject'}</h3>
      <p>{email?.summary || 'Email summary will appear here.'}</p>
      <span>{email?.sender || 'sender@example.com'}</span>
    </div>
  )
}

export default EmailCard
