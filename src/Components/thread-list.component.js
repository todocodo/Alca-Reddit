/*
    This component maps all the threads in the database with card layout in the ThreadDisplay component

    Using Axios we are getting the api requirest created in the backend 
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ThreadDisplay from "./pages/ThreadDisplay";
import threadMockData from '../assets/mockData/threadMockData'

const ThreadList = () => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/threads/")
            .then(({ data }) => {
                setThreads(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataCard = () => {
        return threads.map((res, i) => {
            return <ThreadDisplay obj={res} key={i} />;
        });
    };

    return (
        <div>
            <h2 className="text-center">All Posts</h2>
            <div>{DataCard()}</div>
        </div>
    );
};

export default ThreadList;