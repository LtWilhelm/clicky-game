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

    render () {
        return (
            <div className="hoverable col s3">
                <img src={this.props.image} alt="card" max-width="200px" height="200px" />
            </div>
        )
    }
}

export default Card;