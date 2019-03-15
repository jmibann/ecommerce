import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';;
import { connect } from 'react-redux';
import { setShowModal, setHideModal } from '../store/actions/actions';
import axios from 'axios';



class Reg extends React.Component {




    handleClick(e){
        e.preventDefault()
        var formData = new FormData(e.target);
        const email = formData.get('email')
        const password = FormData.get('password')
        console.log('pass', password)
        axios.post('/auth/register', {
            email,
            password
        })
        .then(status => {
            console.log(status)
        })
    }

    render() {

        return (
            <Modal
                show={this.props.showModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Register new user
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleClick.bind(this)}>
                            Register
  </Button>
                    </Form>;
            </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.setHideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.showModal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setShowModal: () => dispatch(setShowModal()),
        setHideModal: () => dispatch(setHideModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reg)