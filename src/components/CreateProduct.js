import React,{useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import ProductService from "../service/ProductService";


function CreateProduct(){

   
  

    const navigate = useNavigate();
    /*The useParams hook returns an object of key/value pairs of the dynamic params 
    from the current URL that were matched by the <Route path>. Child routes inherit 
    all params from their parent routes.
    */
    const { id } = useParams(); // It fetches id from URL
    // state Management
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [madein, setMadein] = useState('');
    const [price, setPrice] = useState('');

     // componentDidUpdate usage
    useEffect(() => {
        if (id !== '_add') {
            ProductService.getProductById(id).then((response) => {
                const product = response.data;
                setName(product.name);
                setBrand(product.brand);
                setMadein(product.madein);
                setPrice(product.price);
            });
        }
    }, [id]); // //values -id triggers re render whenever they are updated in your program,
                //you can add multiple values by separating them by commas

    const saveOrUpdateProduct = (event) => {
        event.preventDefault();
        const product = { name, brand, madein, price };

        if (id === '_add') {
            ProductService.createProduct(product).then(() => {
                navigate('/product');
            });
        } else {
            ProductService.updateProduct(product, id).then(() => {
                navigate('/product');
            });
        }
    };

    const changeNameHandler = (event) => {
        setName(event.target.value);
    };

    const changeBrandHandler = (event) => {
        setBrand(event.target.value);
    };

    const changeMadeinHandler = (event) => {
        setMadein(event.target.value); // method to set value of state
    };

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    };

    const cancel = () => {
        navigate('/product');
    };

    const getTitle = () => {
        if (id === '_add') {
            return <h1 className="text-center">Add Product</h1>;
        } else {
            return <h1 className="text-center">Update Product</h1>;
        }
    };

    return(

        <div>
            <br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "form-outline mb-4">
                            {getTitle()}
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Product Name" name="name" className="form-control" 
                                            value={name} onChange={changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Brand: </label>
                                        <input placeholder="Product Brand" name="brand" className="form-control" 
                                            value={brand} onChange={changeBrandHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Made In: </label>
                                        <input placeholder="Made In" name="madein" className="form-control" 
                                            value={madein} onChange={changeMadeinHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="price" className="form-control" 
                                            value={price} onChange={changePriceHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={saveOrUpdateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>

    );
}

export default CreateProduct






// import React, {Component} from "react";
// import ProductService from "../service/ProductService";


// export default class CreateProduct extends Component{


//     // step 2 - We retrive productId from the route and store it in id variable. 



//     constructor(props){
//         this.state={

//             id:this.props.match.params.id,
//             name:'',
//             brand:'',
//             madein:'',
//             price:'',
//         }
//     }



//     // step 3 
//     /*
//         The componentDidMount() is executed when the component is mounted for the first time.
//         In componentDidMount() method, if the id is _add then we don't do anything,
//         else we retrieve Product by id using ProductService.getProductById() method:
//     */


//     componentDidMount(){
//         if(this.state.id==='_add'){
//             return;
//         }
//     }



       
//      /*
//      In the saveOrUpdateEmployee () method, we check if the id is _add then we call ProductService.createProduct() method,
//      which internally makes a REST API call to store product data into MySQL database.
//      If id is any positive number then we call ProductService.updateProduct() method,
//      which internally makes a REST API call to store updated product data into MySQL database.
//     */

    
//     saveOrUpdateProduct = (p) =>{
        
//         let product={
//             name:this.state.name,brand:this.state.brand,
//             madein:this.state.madein,price:this.state.price};

//             console.log(JSON.stringify(product));
           
//             if(this.state.id==='_add'){
//                 ProductService.createProduct(product).then(Response =>{
//                     // history("/product")
//                 });
//             }
//         }


//          //We are using a getTitle() method to get the title for Add/Update Employee page based on id:
//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h1 className="text-center">Add Product</h1>
//         }else{
//             return <h1 className="text-center">Update Product</h1>
//         }
//     }

//     changeNameHandler= (event) => {
//         this.setState({name: event.target.value});
//     }
 
//     changeBrandHandler= (event) => {
//         this.setState({brand: event.target.value});
//     }
 
//     changeMadeinHandler= (event) => {
//         this.setState({madein: event.target.value});
//     }
 
//     changePriceHandler= (event) => {
//         this.setState({price: event.target.value});
//     }
 
//     cancel(){
        
//     }




//     render(){

//         return(

//             <div>
//                 <br></br>
//                 <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> Name: </label>
//                                             <input placeholder="Product Name" name="nameame" className="form-control" 
//                                                 value={this.state.name} onChange={this.changeNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Brand: </label>
//                                             <input placeholder="Product Brand" name="brand" className="form-control" 
//                                                 value={this.state.brand} onChange={this.changeBrandHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Made In: </label>
//                                             <input placeholder="Made In" name="madein" className="form-control" 
//                                                 value={this.state.madein} onChange={this.changeMadeinHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Price: </label>
//                                             <input placeholder="Price" name="price" className="form-control" 
//                                                 value={this.state.price} onChange={this.changePriceHandler}/>
//                                         </div>
 
//                                         <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
 
//                    </div>
//             </div>

//         );
//     }



           
// }