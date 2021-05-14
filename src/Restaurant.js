import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = ({imageUrl,street,number,phone,city,zipCode,id}) => {
  return (
    <article className='cocktail'>
      <div className="row">
            <div className="col-md-6">
                <div className="block product no-border z-depth-2-top z-depth-2--hover">
                    <div className="block-image">
                        
                            <img src={imageUrl} className="img-center"/>
                        
                        <span className="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
                    <div className="block-body text-center">
                        <h3 className="heading heading-5 strong-600 text-capitalize">
                            <a href="#">
                                Google Home Base
                            </a>
                        </h3>
                        <p className="product-description">
                            2.8GHz Processor 1TB Storage 16GB DDR
                        </p>
                        <div className="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                <a href="#" className="bg-purple"></a>
                                <a href="#" className="bg-pink"></a>
                                <a href="#" className="bg-blue"></a>
                            </div>
                        </div>
                        <div className="product-buttons mt-4">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <button type="button" className="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i className="fa fa-share"></i>
                                    </button>
                                </div>
                                <div className="col-8">
                                    <button type="button" className="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i className="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
       </div>
    </article>
  )
}

export default Restaurant