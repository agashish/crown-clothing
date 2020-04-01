import React from 'react';
import {connect} from 'react-redux';

import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import {ShopPageContainer} from './shop-page.styles';

import './shop-page.styles.scss';
import CategoryPage from '../category-page/category.component';

import {firestore, convertCollectionsSnapshotToMap} from './../../firebase/firebase.utils';
import {setShopData} from './../../redux/shop-reducer/shop.actions';

import WithSpinner from './../../components/with-spinner/with-spinner.components';

// const ShopPage = ({match}) => {
//     console.log(match)
//     return (
//         <ShopPageContainer> 
//             <Route exact path={`${match.path}`} component={CollectionOverview}/>
//             <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
//         </ShopPageContainer>
//     )
// }

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { setShopData } = this.props;
        const collectionRef = firestore.collection('collections');

        // PROMISE BASED
        // fetch() but it gives unnecessary child objects inside the respose

        // NOT LIVE RELOAD WHE ANY CHANGES HAPPENS IN FIREBASE
        // collectionRef.get()
        // .then(snapshot => {
        //     const shopData = convertCollectionsSnapshotToMap(snapshot);
        //     setShopData(shopData)
        //     this.setState({
        //         loading: false
        //     })
        // }) 

        // Original subscription actiovated by firebase
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const shopData = convertCollectionsSnapshotToMap(snapshot);
            setShopData(shopData)
            this.setState({
                loading: false
            })
        })  
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        console.log(this.props)
        return (
            <ShopPageContainer> 
                {/* <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:categoryId`} component={CategoryPage}/> */}

                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props}/>} />

            </ShopPageContainer>
        )
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
        console.log('unsubscribe shop open observer')
    }
}

const mapDispatchToProps = dispatch => ({
    setShopData: (collections) => dispatch(setShopData(collections)) 
})
export default connect(null, mapDispatchToProps)(ShopPage);