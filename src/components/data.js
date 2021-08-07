import React from 'react'
import {  FaFacebook, FaLinkedin, FaTwitter, FaShoppingCart } from 'react-icons/fa'
export const links = [
  {

    id: 1,
    url: '/',
    text: 'home',

  },
  {
    id: 2,
    url: '/menu',
    text: 'menu',
  },
  {
    id: 3,
    url: '/reservation',
    text: 'reservation',
  },
  {
    id: 4,
    url: '/locations',
    text: 'locations',
  },
  {
    id: 5,
    url: '/delivery',
    text: 'delivery',
  },

  {
    id: 6,
    url: '/cart',
    text: 'My Cart ' ,
  },
  
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  
]
