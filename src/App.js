import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const CreateHistoryItems = props => {
  const {historyItem, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="total-cont">
        <div className="icon-cont">
          <img className="social-logo-img" src={logoUrl} alt="domain logo" />
          <p className="head">{title}</p>
          <p className="para">{domainUrl}</p>
        </div>
        <button data-testid="delete" onClick={onDelete} type="button">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

class CreateHistory extends Component {
  state = {mainListItems: initialHistoryList, shows: ''}

  textVisible = event => {
    const {mainListItems} = this.state
    const word = event.target.value
    const result = word.toLowerCase()
    const searchResults = mainListItems.filter(eachUser =>
      eachUser.title.toLowerCase().includes(result),
    )
    this.setState({mainListItems: searchResults, shows: result})
  }

  onDeleteItem = num => {
    const {mainListItems} = this.state
    const filteredList = mainListItems.filter(each => each.id !== num)
    this.setState({mainListItems: filteredList})
  }

  render() {
    const {mainListItems, shows} = this.state
    const items = mainListItems.length
    console.log(shows)
    return (
      <div className="main-container">
        <div className="blue-container">
          <div className="blue-sub">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-bar-container">
              <div className="search-container">
                <img
                  alt="search"
                  className="search-icon"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                />
              </div>
              <input
                onChange={this.textVisible}
                className="input"
                type="search"
                placeholder="Search history"
              />
            </div>
          </div>
        </div>
        <div>
          {items > 0 ? (
            <ul className="history-list-cont">
              {mainListItems.map(each => (
                <CreateHistoryItems
                  historyItem={each}
                  key={each.id}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          ) : (
            <p className="final-msg">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

const App = () => <CreateHistory />

export default App
