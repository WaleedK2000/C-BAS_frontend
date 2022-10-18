// Returns list of containers running in a table, by sending post request to API Server

import React, { useState, useEffect } from 'react';

const axios = require('axios');



export default function ContainerList() {

    const [dockerList, setdockerList] = useState(0);

    useEffect(() => {
        console.log('sup')
        axios.post('http://localhost:4000/api/fetch/docker/running_containers/', {
            // params: {
            //     facultyId: `'AV189'`
            // },
        })
            .then(function (response) {

                return response.data;
            })
            .then(res => {
                setdockerList(res);
            })
            .catch(function (error) {
                console.log(error);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // let table;



    // Condition To check if data is loaded
    if (dockerList === 0) {
        return (<div className="load">
            Loading
        </div>);
    } else if (dockerList.running === 0) {

        return (<div className="load">
            No Running
        </div>);

    } else {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Container Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dockerList.data.map((element) => {
                            return <tr>
                                <th scope="row"></th>
                                <td>{element.Names}</td>
                                <td>{element.Image}</td>
                                <td>{element.State}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        );
    }

}
