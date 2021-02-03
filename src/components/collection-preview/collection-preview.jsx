import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import CollectionFull from '../collection-full/collection-full.component';

import {NavLink, withRouter}  from 'react-router-dom'

import './collection-preview.styles.scss';

const CollectionPreview = ({title , items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item , idx) => idx < 4 ) 
                .map(({id , ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }


        </div>

        <div>
        <NavLink to= {{pathname:"/colletion-full" ,  component:{CollectionFull} , state:{ title : title , items:items } }}  >
            Ver Todos
        </NavLink>
        </div>


    </div>



);

export default CollectionPreview;