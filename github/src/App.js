import './App.css';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import arrow from '../src/assets/Vector.png';
import userImage from '../src/assets/image3.png'
import axios from 'axios';
import { useEffect, useState } from 'react';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ color: 'blue',  border: 0, align: 'right', background: 'none' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function App() { 

  const [commit, setCommit] = useState();

  const fetchData = async () => {
    let data = await axios.get('http://localhost:5000');
    console.log('data', data?.data[0]);
    setCommit(data?.data[0])
  }

  useEffect(() => {
    fetchData();
  },[])
  

  return (
    <div className="App mt-4">
      <Container>
        <Row>
          <Col>
            <img src={userImage}></img>
          </Col>
          <Col xs={5}>
            <div style={{textAlign: 'left'}}>
              <p>{commit?.message}</p>
              <p><span style={{color: 'gray'}}>Author by</span> {commit?.author?.name} <span style={{color: 'gray'}}>four days ago</span></p>
              <p>This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Col>
          <Col  xs={5}>
            <div style={{textAlign: 'right'}}>
              <p><span style={{color: 'gray'}}>Committed by</span> <span style={{color: 'darkGray'}}>{commit?.committer?.name}</span> three days ago.</p>
              <p><span style={{color: 'gray'}}>Commit</span> {commit?.oid}</p>
              <p><span style={{color: 'gray'}}>Parent</span> <span style={{color: 'darkBlue'}}> {commit?.parents[0]?.oid}</span></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <Accordion defaultActiveKey="0">
            <Card style={{border: 0}}>
              <Card.Header style={{background: 'none', border: 0, textAlign: 'left'}}>
                <CustomToggle eventKey="0"><img src={arrow}></img>enterprise/internal/first/path/first_file.go</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{border: '1px solid gray', textAlign : 'left'}}>
                  <div>
                      <p>5 "database/sql"</p>
                      <p style={{backgroundColor: '#FFE4E9'}}>6 "github.com/keegancsmith/sqlf"</p>
                      <p style={{backgroundColor: '#D8FFCB'}}>"github.com/keegancsmith/sqlf2"</p>
                      <p>7 "github.com/sourcegraph/sourcegraph/internal/db/basestore"</p>
                      <p>8 // scanUploadMeta scans upload metadata grouped by commit from the return value of `*store.query`.</p>
                      <p>9 func scanUploadMeta(rows *sql.Rows, queryErr error) (_ map[string][]UploadMeta, err error)</p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{border: 0}}>
              <Card.Header style={{background: 'none', border: 0, textAlign: 'left'}}>
                <CustomToggle eventKey="1"><img src={arrow}></img>enterprise/internal/first/path/second_file.go</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body style={{border: '1px solid gray', textAlign : 'left'}}>
                  <div>
                    <p>5 "database/sql"</p>
                    <p style={{backgroundColor: '#FFE4E9'}}>6 "github.com/keegancsmith/sqlf"</p>
                    <p style={{backgroundColor: '#D8FFCB'}}>"github.com/keegancsmith/sqlf2"</p>
                    <p>7 "github.com/sourcegraph/sourcegraph/internal/db/basestore"</p>
                    <p>8 // scanUploadMeta scans upload metadata grouped by commit from the return value of `*store.query`.</p>
                    <p>9 func scanUploadMeta(rows *sql.Rows, queryErr error) (_ map[string][]UploadMeta, err error)</p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
