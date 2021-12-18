import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleShops = () => {
    const { id } = useParams();
    const [singleProduct, setsingleProduct] = useState({})
    // console.log(idd);
    useEffect(() => {
        fetch(`http://https://salty-crag-62284.herokuapp.com//tshart/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>hii</h2>
            <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={singleProduct?.img} width="300" />
                <Card.Body>
                    <Card.Title className="text-dark">{singleProduct?.name}</Card.Title>

                    <Card.Text className="text-dark">{singleProduct?.price}
                    </Card.Text>

                </Card.Body>

            </Card>
        </div>
    );
};

export default SingleShops;