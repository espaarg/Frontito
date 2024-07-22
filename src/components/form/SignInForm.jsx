import { Form,Button } from "react-bootstrap";

const signInForm = () => {

    return(
        <>
        <Form style={{paddingBottom:'20px', paddingTop:'20px', paddingRight:'50px', paddingLeft:'50px'}}>
            <Form.Group controlId="formBasicUsername" style={{paddingBottom:'10px'}}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" style={{paddingBottom:'10px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div style={{display:'flex', flexDirection:'row' , justifyContent:'flex-end !important'}}>
              <Button style={{marginLeft:'130px'}} variant='success'>Sign In</Button>
            </div>
        </Form>
        </>
    )

}

export default signInForm;