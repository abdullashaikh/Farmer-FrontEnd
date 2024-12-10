import { useState, useEffect } from "react";
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import farmerImage from '../Images/farmer.jpg'
function Login() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post('https://backend-377w.vercel.app/login', { email: formValues.email, password: formValues.password })
                .then(result => {
                    console.log(result);
                    if (result.data === "Success") {
                        console.log("Login Success");
                        // alert('Login successful!')
                        navigate('/home');
                    }
                    else {
                        alert('Incorrect password! Please try again.');
                    }
                })
                .catch(err => console.log(err));
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    return (
        <div className="bgimage">
            <div className="bgImg"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>

                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
                <div className="text">
                    Not a member? <Link to='/register' > Register</Link>
                </div>
            </div>{" "}
        </div>
    );
}

export default Login;