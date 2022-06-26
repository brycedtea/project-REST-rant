const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1 class="title">REST-Rant</h1>
              <div>
                <img src="https://cdn.wallpaper.com/main/2015/10/malamen-1.jpg" alt="Restaurant Image"
                width="500" 
                height="300" />
              </div>
              <div>
                <a>Restaurant: Malamén in Barcelona, Spain</a>
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
