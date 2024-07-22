import { Form,Button } from "react-bootstrap";

const signUpForm = () => {

    return(
        <>
        
        <Form style={{paddingBottom:'20px', paddingTop:'20px'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{marginRight:'30px'}}>
                <Form.Group controlId="formBasicFirstName" style={{paddingBottom:'10px'}}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName" style={{paddingBottom:'10px'}}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group controlId="formBasicDate" style={{paddingBottom:'10px'}}>
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter birth date" />
                </Form.Group>
            </div>
            <div style={{marginRight:'30px'}}>
            <Form.Group controlId="formBasicEmail" style={{paddingBottom:'10px'}}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicUsername" style={{paddingBottom:'10px'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" style={{paddingBottom:'10px'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </div>  
        </div>
                
            <Button variant='success' style={{marginLeft:'360px'}}>Sign Up</Button>
        </Form>
        </>
    )

}

export default signUpForm;