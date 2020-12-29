import React, { useContext } from 'react';
import Form from '../../components/UI/Forms/Form';
import FormField from '../../components/UI/Forms/FormField';
import * as Yup from 'yup';
import SubmitButton from '../../components/UI/Forms/SubmitButton';
import { useApi } from '../../hooks/useApi';
import { Link, useHistory } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import { loginProducts } from '../../api/products';
import AuthStore from '../../api/authStore';
import { useLogin } from 'react-admin';

const loginSchema = Yup.object({
    username: Yup.string().email().required().label('Email Address'),
    password: Yup.string().required().label('Password'),
});

function Login() {
    const login = useLogin();

    const { loading, error, request } = useApi(login);
    const history = useHistory();

    const { setUser } = useContext(authContext);

    const handleSubmit = async (values) => {
        const response = await request(values);
        if (response.ok) {
            await AuthStore.setClientId(response.data);
            setUser(response.data);
            history.push('/');
        }
    };
    return (
        <div
            className=" row justify-content-center align-items-center mx-0"
            style={{ minHeight: ' 100vh', width: '100%' }}
        >
            <div className="col-md-6 col-lg-4 col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            Kolleris |{' '}
                            <small className="text-secondary">Login</small>
                        </h3>
                    </div>
                    <div className="card-body">
                        {error && <p className="text-danger">{error}</p>}
                        <Form
                            initialValues={{ username: '', password: '' }}
                            handleSubmit={handleSubmit}
                            validationSchema={loginSchema}
                        >
                            <FormField
                                name="username"
                                placeholder="Your email address"
                                label="Email"
                            />
                            <FormField
                                name="password"
                                placeholder="Your password"
                                label="Password"
                                type="password"
                            />
                            <SubmitButton title="Login" loading={loading} />
                            <span className="ml-3">
                                {' '}
                                <Link to="/signup">Signup</Link> instead{' '}
                            </span>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
