import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Layout } from './components/layout'

import './index.css'

const apiTest = async () => {
  try {
    const { data } = await axios.get('http://localhost:3030/test')
    if (!data) {
      return
    }
    console.info(' * * *')
    console.info('This log is purely used to verify communication with the API and thus can be safely removed.')
    console.info(data)
    console.info(' * * *')
  } catch (error) {
    console.error(error.message)
  }
}

const App = () => {
  useEffect(() => {
    apiTest()
  }, [])

  return (
    <Layout>
      Cillum voluptate sint ut eiusmod amet magna tempor incididunt commodo in cillum dolor occaecat fugiat sed occaecat consectetur.
      Dolore velit reprehenderit nostrud sunt labore labore in sed pariatur qui sit minim.
      In cillum eu excepteur reprehenderit in adipisicing deserunt dolor laborum.
      Elit adipisicing nulla laboris eu id anim aute in in eiusmod enim est elit veniam adipisicing pariatur veniam eiusmod.
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById('app-root'))
