import React from 'react';

const Product = (props) => {
    const wiek = props.match.params.productId;

    // if(+wiek >= 18) { //+ przed stringiem zamienia go na liczbę!
    //
    // }

    return (
        <p>
            Czy {props.match.params.productId} jest pełnoletnia?: {wiek >= 18 ? 'tak': 'nie'}
        </p>
    );
};

export default Product;