import React,{Component} from 'react';

class Header extends Component {
    render (){
        return(
            <header className="red darken-3 z-depth-3 white-text hide-on-med-and-down"
            style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}
            >
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Homestar_Runner_logo.svg/1200px-Homestar_Runner_logo.svg.png" alt="Homestar Logo"/>
                <h1>Homestar Clicker dot com</h1>
                <div>
                    <h3>Current Score: {this.props.score}</h3>
                    <h3>High Score: {this.props.highscore}</h3>
                </div>
            </header>
        )
    }
}

export default Header;