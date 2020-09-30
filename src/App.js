import React from 'react';

import './App.css';
import Button from './Components/Buttons/Button';
import BUTTON_TYPES   from './Components/Buttons/Constants';
import ResponsiveList from './Components/ResponsiveList/ResponsiveList';
import Faq from './Components/Faq/Faq';
import StepCard from './Components/StepCard/StepCard';
import Modal from './Components/Modal/Modal';
import CountryCard from './Components/CountryCard/CountryCard';
import countryList from './Components/CountryCard/countryList';
import Review from './Components/Review/Review';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';

import {connect} from 'react-redux'
import QouteForm from './Containers/QouteForm/QouteForm';
import NotificationCard from './Components/NotificationCard/NotificationCard';
import ProgressCircle from './Components/ProgressCircle/ProgressCircle';
import Footer from './Components/Footer/Footer';
import Text from './Components/Text/Text';
import types from './Components/Text/Constants';

const q = [
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  },
  {
    question: 'Does my landlord need to be present',
    answer: 'No, In order to validate the current status of the rental apartment, out signature along with yours wwill be enough.'
  }
]

const steps = [
  {
    step: 1,
    title: 'Consultation',
    content: 'Give us a call, we’ll work to schedule the best time for you'
  },
  {
    step: 2,
    title: 'Inventory',
    content: 'Our inventory specialist arrives before you move in and before you move out to conduct the inventory'
  },
  {
    step: 3,
    title: 'Documentation',
    content: 'You’ll receive a legally valid document. Documenting the status of the property before the move-in'
  }
]


const reviews = [
  {
    author: 'Yaniv Matalon',
    content: 'this would be a reiew, here would be a review, a review would be here'
  },
  {
    author: 'Yaniv Matalon',
    content: 'this would be a reiew, here would be a review, a review would be here',
    left: true
  },
  {
    author: 'Yaniv Matalon',
    content: 'this would be a reiew, here would be a review, a review would be here'
  }
]



function App(props) {
  return (
    <div className="App">
       <Navbar />
       {/* banner */}
         <div className="banner">
           <div className="bannerLeft">
              <div className="bannerLeftContent">
                <div className="contentTitle">
                  <Text type={types.LARGE} black bold > 
                    A Property Inventory Ensures Your Financial  Protection
                  </Text>
                </div>
                <div className="contentCTA">
                  <Button type={BUTTON_TYPES.RED} text={'Secure Yourself Today'}/>
                  <Button type={BUTTON_TYPES.RED_BORDER} text={'How Does This Work?'}/>
                </div>
              </div>
           </div>
           <div className="bannerRight">

           </div>
         </div>
         {/* banner */}
         {/* how-does-this-work */}
          <div className="hdtw-wrap">
            <div className="pageTitle">
              <div className="header">
                <Text type={types.LARGE} black bold>
                  Whats The Big Deal ?
                </Text>
              </div>
              <div className="subHeader">
                <Text type={types.XSMALL} grey bold>
                  People arent bad, unfortunetly that doesnt mean bad things dont happen.  
                  These figures provided by Renters.com show what can happen when not properly covered
                </Text>
              </div>
            </div>
            <div className="percentWrap">
              <ResponsiveList rows={2}>
                <ProgressCircle percent={26} message={"Renters that dont receive their security deposit back when they move out"}/>
                <ProgressCircle percent={36} message={"Percent of those renters received no explantion from their landlord"}/>
              </ResponsiveList>
            </div>
            <div className="hdtwCTA">
              <div className="hdtwCTAText">
                <Text type={types.SMALL} black bold>
                    By not having a valid 3rd party unbiased company do your inventory, 
                    you risk your security deposit when moving out
                </Text>
              </div>
              <div className="hdtwCTAButton">
                <Button type={BUTTON_TYPES.RED} text={"Contact Us"} />
              </div>
            </div>
          </div>
         {/* how-does-this-work */}
       <Footer />
    </div>
  );
}

export default App;
