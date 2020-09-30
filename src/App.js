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
          <div className="test">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
       <Footer />
    </div>
  );
}

export default App;
