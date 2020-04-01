import React from 'react';
import {connect} from 'react-redux';
import {selectShopByCategory} from './../../redux/shop-reducer/shop.selectors.js';
import CollectionItem from './../../components/collection-item/collection-item.component';
// import './category.styles.scss';

import {
    CollectionPageContainer,
    TitleStyle,
    ItemsStyle
} from './category-page.styles'; 
const CategoryPage = ({collection: {title, items}}) => {
    
    return (
        <CollectionPageContainer>
            <TitleStyle>{title.toUpperCase()}</TitleStyle>
            <ItemsStyle>
               {
                   items
                   .map(item =>                         
                        <CollectionItem key={item.id} item={item} />
                    )
               }
            </ItemsStyle>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopByCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps, null)(CategoryPage);