import React, { useState} from "react";
import Wrapper from "../../assets/wrappers/sub-wrappers/NewProduct";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const NewProduct = ({
  id,
  text,
  img,
  type,
  rating,
  reviews,
  options,
  size,
  price,
}) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div key={id} className="product-item-container" onClick={()=>navigate(`/new-product-details/${id}`)}>
        <img src={img} className="img" alt="img" />
        <div className="product-item">
          <div className="name">{text}</div>
          <div className="type-size">
            <h4>
              {type} {size}
            </h4>
          </div>
          <div className="price">
            <span>$</span>
            {price}
          </div>
          <div className="ratings">
            {rating >= 1 ? (
              <div>
                <AiFillStar />
              </div>
            ) : (
              <div>
                <AiOutlineStar />
              </div>
            )}
            {rating >= 2 ? (
              <div>
                <AiFillStar />
              </div>
            ) : (
              <div>
                <AiOutlineStar />
              </div>
            )}
            {rating >= 3 ? (
              <div>
                <AiFillStar />
              </div>
            ) : (
              <div>
                <AiOutlineStar />
              </div>
            )}
            {rating >= 4 ? (
              <div>
                <AiFillStar />
              </div>
            ) : ( 
              <div>
                <AiOutlineStar />
              </div>
            )}
            {rating >= 5 ? (
              <div>
                <AiFillStar />
              </div>
            ) : (
              <div>
                <AiOutlineStar />
              </div>
            )}
            <span className="reviews">({reviews})</span>
          </div>
          <h2 className="options">
            {options > 1 ? "Available in more options" : ""}
          </h2>
          <div className="add-container">
            <div className="add-to-cart">
              <MdAddShoppingCart/>
            </div>
            <div className="add-to-fav">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewProduct;
