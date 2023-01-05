import React from 'react'
import Blockchain from './Blockchain_Home/Blockchain';
import { Homepage } from './HomePage/Homepage'
import Workhere from './Home_HowToWork/Workhere';
import Service from './OurService/Service';
import BlockChain from './Blockchain_Home/Blockchain';
import Success from './Success/Success';
import ContactUs from './ContactUs_Home/ContactUs';


function Introduction() {
  return (
    <div>
        <Homepage />
        <Service />
        <Workhere />
        <Blockchain />
        <Success />
        <ContactUs />
    </div>
  )
}

export default Introduction;