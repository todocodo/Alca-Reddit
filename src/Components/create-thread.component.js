/* 
    CreateThread Component for adding a new thread
*/

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ThreadForm from "./pages/ThreadForm";

// CreateThread Component
const CreateThread = () => {
    const [formValues, setFormValues] = useState({ username: '', title: '', thread: '' })
    // onSubmit handler
    const onSubmit = threadObject => {
        axios.post(
            'http://localhost:4000/threads/create-thread',
            threadObject)
            .then(res => {
                if (res.status === 200)
                    alert('Thread successfully created')
                else
                    Promise.reject()
            })
            .catch(err => alert('Post successfully created - Go to Thread List to se it'))
    }

    // Return thread form
    return (
        <ThreadForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Thread
        </ThreadForm>
    )
}

// Export CreateThread Component
export default CreateThread