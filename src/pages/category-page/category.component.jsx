import React from 'react';
import {connect} from 'react-redux';
import {selectShopByCategory} from './../../redux/shop-reducer/shop.selectors.js';
import CollectionItem from './../../components/collection-item/collection-item.component';
import './category.styles.scss';

const CategoryPage = ({collection: {title, items}}) => {
    
    return (
        <div className='collection-page'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='items'>
               {
                   items
                   .map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
               }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopByCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps, null)(CategoryPage);