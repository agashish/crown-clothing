import React from 'react';
import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';

import './shop-page.styles.scss';
import CategoryPage from '../category-page/category.component';

const ShopPage = ({match}) => {
    console.log(match)
    return (
        <div className="shop-page"> 
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
        </div>
    )
} 

export default ShopPage;