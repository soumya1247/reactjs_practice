import { PureComponent } from 'react'

class PureComponentEmbed extends PureComponent {
    render() {
        
        return (
            <div>PureComponentEmbed RenderedAt {Date.now()} <br/>
                Name : {this.props.name}
            </div>
        )
    }
}

export default PureComponentEmbed