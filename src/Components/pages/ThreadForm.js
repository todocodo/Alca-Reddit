/*
    This is the FORM component - where we create a thread
    It uses Formik and Yup for validation

    It consists of:
        Username: String
        Title: String
        Thread: String 
    
    The submit button sends the info to create-thread.component
*/

import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

import styles from "./ThreadForm.module.css"

const ThreadForm = (props) => {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        thread: Yup.string().required("Required"),
    });
    console.log(props);
    return (
        <div>
            <div className="text-center">
                <h1>Post a Thread</h1>
            </div>
            <div className="form-wrapper card">
                <div className="card-body">
                    <Formik {...props} validationSchema={validationSchema}>
                        <Form>
                            <FormGroup>
                                <label for="username" className="form-label">Username</label>
                                <Field name="username" type="text" placeholder="Your username here..."
                                    className="form-control m-2" />
                                <ErrorMessage
                                    name="username"
                                    className="d-block invalid-feedback"
                                    component="span"
                                />
                            </FormGroup>
                            <FormGroup>
                                <label for="title" class="form-label">Title</label>
                                <Field name="title" type="text" placeholder="Fancy title here..."
                                    className="form-control m-2" />
                                <ErrorMessage
                                    name="title"
                                    className="d-block invalid-feedback"
                                    component="span"
                                />
                            </FormGroup>
                            <FormGroup>
                                <label for="thread" class="form-label">Thread</label>
                                <Field name="thread" type="text" placeholder="Write your post here..."
                                    className="form-control m-2" />
                                <ErrorMessage
                                    name="thread"
                                    className="d-block invalid-feedback"
                                    component="span"
                                />
                            </FormGroup>
                            <Button variant="danger" size="lg" className="mt-4"
                                block="block" type="submit">
                                {props.children}
                            </Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ThreadForm;











{/* <form>
<div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username" name="username" placeholder="username123"></input>
</div>
<div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" name="title" placeholder="Title goes here..."></input>
</div>
<div class="mb-3">
    <label for="thread" class="form-label">Thread</label>
    <textarea class="form-control" id="thread" name="thread" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">{props.children}</button>
</form> */}