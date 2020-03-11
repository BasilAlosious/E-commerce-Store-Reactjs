import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
    <div className='shop-page'>
    { collections.map(({ id,...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);