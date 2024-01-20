import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../../Assets/Projects/MatraimNurmatovResume.pdf';
import { saveAs } from 'file-saver';
import imgPdf from '../../Assets/resumeMatraimNurmatov.png';

function ResumeNew() {
  const handleDownload = () => {
    saveAs(pdf, 'NurmatovMatraimResume');
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <img
          src={imgPdf}
          alt="Matraim Nurmatov Resume"
          style={{ maxWidth: '30rem' }}
        />

        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            margin: '1rem',
          }}
        >
          <Button
            variant="primary"
            style={{ maxWidth: '250px' }}
            onClick={handleDownload}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
