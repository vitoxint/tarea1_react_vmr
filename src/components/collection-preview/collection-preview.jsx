import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';


import './collection-preview.styles.scss';

const CollectionPreview = ({title , items}) => (
    <div className="row" >

        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className="col-12 col-sm-3 mt-3">
            {items
                .filter(  (item , idx) => idx ) 
                .map(({id , ...otherItemProps}) => (
                
                
                    <CollectionItem key={id} {...otherItemProps} />

               
                ))
            }


         </div> 
    </div>



);

export default CollectionPreview;