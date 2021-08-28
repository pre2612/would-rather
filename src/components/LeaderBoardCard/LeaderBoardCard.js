import { PureComponent } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap'
import ScoreCard from 'components/ScoreCard'
import './LeaderBoardCard.style.css'

class LeaderBoardCard extends PureComponent {
    render() {
        const { name, answers, questions, avatarURL } = this.props.user;
        let score = Object.keys(answers).length + questions.length;
        return (
            <Card className="leaderBoard-card">
                <Card.Header><strong>{name}</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="img-col">
                            <Image src={avatarURL ? avatarURL : 'https://via.placeholder.com/100x100'} className="img-avatar" />
                        </Col>
                        <Col>
                            <Row className="pt-3">
                                <Col xs={10}>Answered Question:</Col>
                                <Col xs={2}><span className="text-right">{Object.keys(answers).length}</span></Col>
                            </Row>
                            <Row className="pt-3">
                                <Col xs={10}>Created Question:</Col>
                                <Col xs={2}><span className="text-right">{questions.length}</span></Col>
                            </Row>
                        </Col>
                        <Col>
                            <ScoreCard score={score} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default LeaderBoardCard;
