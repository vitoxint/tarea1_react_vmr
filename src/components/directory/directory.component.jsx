import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
              {
                title: "automoviles",
                imageUrl: "https://noticias.autosusados.cl/wp-content/uploads/2011/09/0421.jpg",
                size: "large",
                id: 1,
                linkUrl: "",
              },
              {
                title: "pick up",
                imageUrl: "https://memolira.com/wp-content/uploads/2020/03/Comparativa-de-pick-up-grandes-full-size-pick-ups.jpg",
                size: "large",
                id: 2,
                linkUrl: "",
              },
              {
                title: "van/mini buses",
                imageUrl: "https://www.rutamotor.com/wp-content/uploads/2015/11/DSCN5087.jpg",
                size: "large",
                id: 3,
                linkUrl: "",
              },
              {
                title: "todo terreno y 4x4",
                imageUrl: "https://agenceauto.com/uploads/ImageEntity/jeep-wrangler-2-8-crd-200-fap-rubicon-bva-prepa-large-74029-5e305b4f43354.jpg",
                size: "large",
                id: 4,
                linkUrl: "",
              }, 
            ],
          };

    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map( ( {id , ...otherSectionProps} ) => (
                        <MenuItem key={id} {...otherSectionProps} />


                    ))
                }
            </div>
        )
    }
}


export default Directory;