/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.scss";

const SignInForm = () => {
    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars min")
            .max(16, "Password is too long - should be 16 chars max")
    });

    const initialValues = {
        email: "",
        password: ""
    };

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {(props) => {
                const { errors, touched, isValid } = props;
                console.log(props)
                return (
                    <div className="container mx-auto">
                        <h1>Sign in to continue</h1>
                        <Form>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={
                                        errors.email && touched.email ? "input-error" : ""
                                    }
                                />
                                <ErrorMessage name="email" component="span" className="error" />
                                {/* Note that when not using any UI library ErrorMessage component should be written outside the Field
                                    The helperText prop was only for Material UI TextField */}
                            </div>

                            <div className="form-row">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={
                                        errors.password && touched.password ? "input-error" : null
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <button
                                type="submit"
                                className={!(isValid) ? "disabled-btn" : ""}
                                disabled={!(isValid)}
                            >
                                Sign In
                            </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default SignInForm;