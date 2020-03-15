import React from 'react';
import {connect} from 'react-redux';
import {filterItemsOnDemand} from './../../redux/shop-reducer/shop.selectors';

import './collection-preview.styles.scss';
import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({title, routeName, items, filterItemsOnDemand}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    filterItemsOnDemand
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    filterItemsOnDemand: filterItemsOnDemand(ownProps.routeName)(state)
})

export default connect(mapStateToProps)(CollectionPreview);