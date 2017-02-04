import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Test from './components/Test'

interface props {
    // name: string,
    // place: string
}

interface state {

}

class Sample extends React.Component<props, state> {
    render() {
        return (<div><Test /></div>)
    }
}

ReactDOM.render(<Sample />, document.getElementById('app'))