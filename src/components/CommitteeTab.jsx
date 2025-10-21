import React from 'react';
import '../assets/css/CallForPosters.css';
import { Row, Col, Container } from 'react-bootstrap';

const speakers = [
  ["Christopher Stewart, Ohio State University", "Wei-Lun Chao, Ohio State University"],
  ["Ben Craker, AgGateway", "Chuk Stewart, RPI"],
  ["Ananth Kalyanaraman, Washington State University", "Barney Maccabe, The University of Arizona"],
  ["Margaret Burnett, Oregon State University", "Madhav Marathe, University of Virginia"],
  ["Katie Driggs-Campbell, UIUC", "Girish Chowdhary, UIUC"],
  ["Roser Matamala, Argonne National Laboratory", "George A. Kantor, CMU"],
  ["Nirav Merchant, University of Arizona", "Michelle S. Segovia, University of Delaware"],
  ["Arti Singh, Iowa State University", "Isabella Condotta, UIUC"],
  ["Georgine Yorgey, Washington State University", "Sandhya Saisubramanian, Oregon State University"],
  ["Bernard Gregory, Tuskegee University", "Christine Diepenbrock, UC Davis"],
  ["Stephanie Russo Carroll, The University of Arizona", "Nicholas Butts, John Deere"],
];

const CommitteeTab = () => {
  return (
    <section className="call-for-posters" id="committee">
        <Row className="section-box">
            <Col>
            <h3>Technical Program Committee</h3>
            <p>More details will be available soon.</p>
            </Col>
        </Row>
      

      {/* <table className="committee-table">
        <tbody>
          {speakers.map(([left, right], i) => (
            <tr key={i}>
              <td>{left}</td>
              <td>{right}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </section>
  );
};

export default CommitteeTab;
