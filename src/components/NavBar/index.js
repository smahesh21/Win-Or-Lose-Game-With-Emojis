// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <div className="navbar-container">
      <div className="emoji-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-game-image"
          alt="emoji logo"
        />
        <h1 className="emoji">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-card">
          <p className="scores">Score: {currentScore}</p>
          <p className="scores">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
