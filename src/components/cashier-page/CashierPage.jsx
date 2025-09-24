import React from 'react'
import { useState ,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Cookies from "js-cookie";
import   "./index.css"
import { getproducts,deleteproduct } from '../../redux/actions/products-actions';
import { addToCart , removeFromCart} from '../../redux/actions/cart';
import { useNavigate } from 'react-router-dom';
import AddButton from "../quotations/add-button"
function CashierPage({userData}) {
const [count, setcount] = useState(0)
	const navigate=useNavigate()
  const dispatch=useDispatch();
  const info=useSelector((state)=>state.getProducts);
  let cart=useSelector((state)=>state.cart);
  let signature=userData.signature;
 
  let cartItems=cart.cartItems;
  let products= cartItems
  let totalPriceWithoutVat=cartItems&& cartItems.reduce((item,{total})=>item+total,0);
  let totalPriceWithVat= cartItems&& cartItems.reduce((item,{grandTotal})=>item+grandTotal,0);
  let vatDue=0.15*totalPriceWithoutVat;
  const {loading,data,error}=info;
console.log(cartItems);

useEffect(() => {
   
	dispatch(getproducts())

  
	  
	}, [dispatch])
	function addItems() {
		setcount(count+1)
	  }
	
  
  return (
  <>
  <main class="page">
	 	<section class="shopping-cart dark">
	 		<div class="container">
		        <div class="block-heading">
		          <h2>Shopping Cart</h2>    <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#modal-scrollable">
                {
                  cartItems.length=== 0 ? "Add products" : "Add More Products" 
                }   
                  </a>
		          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
		        </div>
				<div class="modal modal-blur fade" id="modal-scrollable" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select Products</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
        {
          loading ? "Loading....." : error ? "Error in loading products" :
          data ? data.map((item)=>{
    return     <div key={item._id} class="card" >
  
    <div   class="card-header" style={{
      display:"grid"
    }}>
      
    <h3 class="card-title"> {item.name} {item.brand} {item.model} {item.year}   - {item.sellingPrice}
    </h3>
    <div style={{
      display:"flex",
      alignItems:"center",
     
      
     
      
    }}>
    {
  item.stockLeft <= 0 ? <p>Item out of stock</p> : <AddButton removeFromCart={removeFromCart} dispatch={dispatch}  addToCart={addToCart} productId={item._id}  addItems={addItems}/>
 }
    </div>
 
      
    
   
  </div> 
  </div> 
    
  ///  <CartCard item={item} data={data} addToCart={addToCart} removeItemFromCart={removeItemFromCart}/>
    
   
          }) : null
        }
               
               
           
      
         
          </div>
          <div class="modal-footer">
            <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
		        <div class="content">
	 				<div class="row">
	 					<div class="col-md-12 col-lg-8">
	 						<div class="items">
				 				<div class="product">
				 					<div class="row">
					 					<div class="col-md-3">
					 						<img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg" />
					 					</div>
					 					<div class="col-md-8">
					 						<div class="info">
						 						<div class="row">
							 						<div class="col-md-5 product-name">
							 							<div class="product-name">
								 							<a href="#">Lorem Ipsum dolor</a>
								 							<div class="product-info">
									 							<div>Display: <span class="value">5 inch</span></div>
									 							<div>RAM: <span class="value">4GB</span></div>
									 							<div>Memory: <span class="value">32GB</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div class="col-md-4 quantity">
							 							<label for="quantity">Quantity:</label>
							 							<input id="quantity" type="number" value ="1" class="form-control quantity-input"/>
							 						</div>
							 						<div class="col-md-3 price">
							 							<span>$120</span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
				 				<div class="product">
				 					<div class="row">
					 					<div class="col-md-3">
					 						<img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg"/>
					 					</div>
					 					<div class="col-md-8">
					 						<div class="info">
						 						<div class="row">
							 						<div class="col-md-5 product-name">
							 							<div class="product-name">
								 							<a href="#">Lorem Ipsum dolor</a>
								 							<div class="product-info">
									 							<div>Display: <span class="value">5 inch</span></div>
									 							<div>RAM: <span class="value">4GB</span></div>
									 							<div>Memory: <span class="value">32GB</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div class="col-md-4 quantity">
							 							<label for="quantity">Quantity:</label>
							 							<input id="quantity" type="number" value ="1" class="form-control quantity-input"/>
							 						</div>
							 						<div class="col-md-3 price">
							 							<span>$120</span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
				 				<div class="product">
				 					<div class="row">
					 					<div class="col-md-3">
					 						<img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg"/>
					 					</div>
					 					<div class="col-md-8">
					 						<div class="info">
						 						<div class="row">
							 						<div class="col-md-5 product-name">
							 							<div class="product-name">
								 							<a href="#">Lorem Ipsum dolor</a>
								 							<div class="product-info">
									 							<div>Display: <span class="value">5 inch</span></div>
									 							<div>RAM: <span class="value">4GB</span></div>
									 							<div>Memory: <span class="value">32GB</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div class="col-md-4 quantity">
							 							<label for="quantity">Quantity:</label>
							 							<input id="quantity" type="number" value ="1" class="form-control quantity-input"/>
							 						</div>
							 						<div class="col-md-3 price">
							 							<span>$120</span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
				 			</div>
			 			</div>
			 			<div class="col-md-12 col-lg-4">
			 				<div class="summary">
			 					<h3>Summary</h3>
			 					<div class="summary-item"><span class="text">Subtotal</span><span class="price">$360</span></div>
			 					<div class="summary-item"><span class="text">Discount</span><span class="price">$0</span></div>
			 					<div class="summary-item"><span class="text">Shipping</span><span class="price">$0</span></div>
			 					<div class="summary-item"><span class="text">Total</span><span class="price">$360</span></div>
			 					<button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
				 			</div>
			 			</div>
		 			</div> 
		 		</div>
	 		</div>
		</section>
	</main>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </>
  )
}

export default CashierPage