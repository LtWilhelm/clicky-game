import React,{Component} from 'react';

class Card extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        if (!this.state.clicked) {
            this.setState({clicked: true});
            this.props.correct()
        }
        else {
            this.props.incorrect()
        }
    }

    // compon () {
    //     if (this.props.score % 12 === 0 || !this.props.score) this.setState({clicked: false});
    // }
    
    componentDidUpdate () {
        if ((this.props.score % 12 === 0 || !this.props.score) && this.state.clicked) this.setState({clicked: false});
    }

    render () {
        return (
            <div className="col m3 s4 imgCard"
                style={{
                    display: 'flex',
                    marginTop: '1em',
                    marginBottom: '1em'
                }}
            >
                <img onClick={this.handleClick} className="white hoverable z-depth-2" src={this.props.image} alt="card" max-width="200px" height="200px"
                    style={{
                        margin: 'auto'
                    }}
                />
            </div>
        )
    }
}

export default Card;