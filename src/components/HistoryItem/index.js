import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = historyDetails

  const onDeleteHistory = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>

      <img src={logoUrl} alt="domain logo" className="history-logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteHistory}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default HistoryItem
