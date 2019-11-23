import React from 'react';
import ProductTable from "./ProductTable";
import TextField from './TextField';
import style from "../style/style";

class ProductForm extends React.Component {
    state = {
        name: "",
        price: "",

    };

    onNameChange = event =>
        this.setState({
            name: event.target.value
        });

    onPriceChange = event =>
        this.setState({
            price: event.target.value
        });

    render() {
        return (
            <div>
                <div style={style.form}>
                    <TextField label="Name" onChange={this.onNameChange} name='name'/>
                    <TextField label="Price" onChange={this.onPriceChange} name='price'/>
                </div>
                <div>
                    <ProductTable name={this.state.name} price={this.state.price}/>
                </div>
            </div>


        );
    }

}

export default ProductForm;