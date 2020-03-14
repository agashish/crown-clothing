import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory-menu.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from './../../redux/directory-reducer/directory.selectors';

// STAEFUL COMPONENTS
const DirectiveMenu = ({sections}) => {
  return (
    <div className="directory-menu">
        {
            // #### OPTION 1 TO PASS THE DESTRUCTURING THE PROPS
            // this.state.sections.map(({title, imageUrl, id, size}) => {
            //     return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            // })

            // #### OPTION 1 TO PASS THE SPREAD THE PROPS EVEN WITHOUT TOUCHING THE ORIGINAL
            sections.map(({id, ...orderSomethingProps}) => {
              return <MenuItem key={id} {...orderSomethingProps} />
          })
        } 
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(DirectiveMenu);