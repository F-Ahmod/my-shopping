import React, { useEffect, useState } from 'react';
import Tsharts from './../Tsharts/Tsharts';
import banner from '../../imgage/download.jpg'

const Tshart = () => {
    const [tshart, setTshart] = useState([]);
    useEffect(() => {
        fetch(`https://salty-crag-62284.herokuapp.com/tshart`)
            .then(res => res.json())
            .then(data => setTshart(data))
    }, [])

    return (
        <div className="bg-info">
            <img style={{ width: "100%", height: "300px" }} src={banner} alt="" />
            <h2>Tshart</h2>
            <div className="container callction">
                {
                    tshart.map(tshart => <Tsharts
                        tshart={tshart}
                    ></Tsharts>)
                }
            </div>
        </div>
    );
};

export default Tshart;