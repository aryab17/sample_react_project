import * as React from 'react'

interface props { }
interface state {
    name: string
}

const classes = require('./Test.scss')

export default class Test extends React.Component<props, state> {
    constructor(props){
        super(props)
        this.state = { name: ''}
    }

    render() {
        return (
            <div className='hdr'>
                <h1>Hello world!!</h1>
                <h2 className='bolding'>How are you</h2>
                <input type="text" onChange={(event) => this.setState({name: event.target.value})} />
                <h3>{this.state.name}</h3>
            </div>)
    }
}