function SummaryCard({ title, content }) {
  return (
    <div className="summary-card">
      <h3>{title || 'Summary'}</h3>
      <p>{content || 'Summary content will appear here.'}</p>
    </div>
  )
}

export default SummaryCard
