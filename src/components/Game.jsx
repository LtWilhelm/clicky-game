import React, { Component } from 'react';
import Card from './Card';
import Header from './Header';
import Disclaimer from './Disclaimer';

class Game extends Component {
    state = {
        score: 0,
        highScore: 0,
        cards: [
            { name: 'Homestar', img: 'https://static.tvtropes.org/pmwiki/pub/images/180px-NewestHomestar_9833.png' },
            { name: 'Marzipan', img: 'https://static.tvtropes.org/pmwiki/pub/images/marzipan_3356.png' },
            { name: 'Pom Pom', img: 'https://static.tvtropes.org/pmwiki/pub/images/pom_pom_5773.PNG' },
            { name: 'Strong Bad', img: 'https://static.tvtropes.org/pmwiki/pub/images/strongbad2kq.png' },
            { name: 'Strong Mad', img: 'https://static.tvtropes.org/pmwiki/pub/images/strong_mad_1184.png' },
            { name: 'Strong Sad', img: 'https://static.tvtropes.org/pmwiki/pub/images/strong_sad_9578.png' },
            { name: 'The Cheat', img: 'https://static.tvtropes.org/pmwiki/pub/images/180px-The_Cheat_Character_Video_5480.PNG' },
            { name: 'Bubs', img: 'https://static.tvtropes.org/pmwiki/pub/images/bubs_5676.png' },
            { name: 'Coach Z', img: 'https://static.tvtropes.org/pmwiki/pub/images/coach_z_7947.png' },
            { name: 'The King of Town', img: 'https://static.tvtropes.org/pmwiki/pub/images/kot_3377.PNG' },
            { name: 'The Poopsmith', img: 'https://static.tvtropes.org/pmwiki/pub/images/psmith_7293.PNG' },
            { name: 'Homsar', img: 'https://static.tvtropes.org/pmwiki/pub/images/180px-homsar_evolution_current_6605.png' }
        ]
    }

    handleCorrectClick = i => {
        this.setState(prevState => ({ score: ++prevState.score }));
        if (this.state.score >= this.state.highScore) this.setState(prevState => ({ highScore: prevState.score }));
        this.setState(prevState => ({cards: this.shuffleArray(prevState.cards)}))
    }

    handleIncorrectClick = i => {
        this.setState({ score: 0 });
        this.setState(prevState => ({cards: this.shuffleArray(prevState.cards)}))
}


    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

        render() {
            return (
                <div>
                    <Header score={this.state.score} highscore={this.state.highScore} />
                    <div className="container grey lighten-3 z-depth-2"
                        style={{
                            marginTop: '1em'
                        }}
                    >
                        <div className="row">
                            {this.state.cards.map((card, i) => <Card correct={this.handleCorrectClick} incorrect={this.handleIncorrectClick} key={card.name} image={card.img} score={this.state.score} />)}
                        </div>
                        <Disclaimer />
                    </div>
                    <footer className="red darken-3 z-depth-3"
                        style={{
                            position: 'fixed',
                            bottom: '0',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <div className="valign-wrapper">
                            <img height="40px" src="/logo192.png" alt="react logo"/>
                            <h5 className="white-text">Powered by React.js</h5>
                        </div>
                    </footer>
                </div>
            )
        }
    }

    export default Game;