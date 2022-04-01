import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {emojiUrl, emojiName, id} = eachEmoji
  const onClickOnEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-list-container">
      <button type="button" className="button" onClick={onClickOnEmoji}>
        <img src={emojiUrl} className="emoji-logo" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
