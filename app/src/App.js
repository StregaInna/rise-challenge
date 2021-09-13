import React from 'react'
import axios from 'axios'

export default class App extends React.Component {


  async componentDidMount () {
    const {data} = await axios.get('/knowledge-check-blocks')
    console.dir(data)  
  }
  render () {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

