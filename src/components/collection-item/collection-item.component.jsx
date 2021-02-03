import React from 'react';
import NumberFormat from 'react-number-format';

import './collection-item.styles.scss';

const CollectionItem = ({ id ,name , price , imageUrl}) => (

    <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl}`
            }}
        ></div>
        <div className="name">{name}</div>
        <div className="price"><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / día</div>
        

    </div>
    

);

export default CollectionItem;