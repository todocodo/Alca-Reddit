/* This page is the base for each thread 
    A single thread is a card with username, title and context
                                    comments, and functionality for delete in the bottom 
    
    This component is rendered in thread-list.component 
    where all threads saved in the database are displayed using this layout 
*/
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ThreadDisplay = (props) => {
    const { _id, username, title, thread } = props.obj;

    const deleteThread = () => {
        axios
            .delete(
                "http://localhost:4000/threads/delete-thread/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Thread successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch();
                window.location.reload();
    };

    return (
        <div className="card m-3">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                <h5 className="card-title">{title}</h5>

                <p className="card-text">{thread}</p>
            </div>
            <div className="card-footer">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Comments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Save</a>
                    </li>
                    <li class="nav-item">
                        <div className="btn btn-danger" onClick={deleteThread}>Delete</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ThreadDisplay;