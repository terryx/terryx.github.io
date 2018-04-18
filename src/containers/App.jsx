import React from 'react'
import Intro from '../components/Intro'
import Card from '../components/Card'
import projects from '../data/projects'

const Main = class extends React.Component {
  state = {
    rows: projects
  }

  render () {
    return (
      <div id='wrapper' className='container'>
        <Intro />
        <div className='section'>
          <h3 className='title'>Personal fun projects</h3>
          <div className='columns is-multiline is-flex-desktop'>
            {this.state.rows.map((row, i) =>
              <Card key={row.name} {...row} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
