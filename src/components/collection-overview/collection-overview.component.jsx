import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopDataForPreview} from './../../redux/shop-reducer/shop.selectors';
import CollectionPreview from './../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {  
                collections.map(({id, ...otherCollectionPreview}) => {
                    return <CollectionPreview key={id} {...otherCollectionPreview} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataForPreview
})

export default connect(mapStateToProps)(CollectionOverview);