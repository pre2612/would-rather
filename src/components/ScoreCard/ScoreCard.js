import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

import './ScoreCard.style.css'

class ScoreCard extends Component {
    render() {
        return (
            <Card className="score-card">
                <Card.Header className="text-center">Score</Card.Header>
                <Card.Body className="score-size">{this.props.score}</Card.Body>
            </Card>
        )
    }
}

export default ScoreCard;
