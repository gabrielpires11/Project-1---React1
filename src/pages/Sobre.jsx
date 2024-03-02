import Menu from "./Menu";

import Form from 'react-bootstrap/Form';

function Sobre(){
    return(
        <div>
           <Menu />
        <Form id="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Feedback: </Form.Label>
                <Form.Control as="textarea" placeholder="deixe sua avaliação aqui" rows={3} />
            </Form.Group>

            <button>Enviar</button>
        </Form>
        </div>
    )}
export default Sobre