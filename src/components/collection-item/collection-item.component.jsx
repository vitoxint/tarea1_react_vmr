import { render } from '@testing-library/react';
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Card } from "react-bootstrap";

import './collection-item.styles.scss';

const CollectionItem = ({ id ,name , price , imageUrl}) =>  ( 

/*     <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl}`
            }}
        ></div>
        <div className="name">{name}</div>
        <div className="price"><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / día</div>
        

    </div> */
    

/* ); */

        <Card>
            <Card.Img className="image" variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title> <div className="name">{name}</div></Card.Title>
                <Card.Text>
                    <div className="price"><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / día</div>
                </Card.Text>
            </Card.Body>
        </Card>

    

);



export default CollectionItem;