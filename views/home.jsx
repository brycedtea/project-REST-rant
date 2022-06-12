const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="/images/dish.jpg" alt="dish"
                width="500" 
                height="300" />
              </div>
              <div>
                Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/restaurant">Unsplash</a>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
              <link rel="stylesheet" href="/css/style.css"/>
          </main>
      </Def>
    )
  }
  

module.exports = home
