
import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="text-center">No Results Found!</h1>
                        <h1 className="text-center">
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                🙄
              </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;