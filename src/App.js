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

const mapStateToProps = ( state ) => ( { user: state.user } )
const mapDispatchToProps = ( dispatch ) => ({
  setUser: ( user ) => {
    dispatch( { type: 'user/new', payload: user } )
  }
});


function App(props) {

  console.log('PROPS', props);
  return (
    <div className="App">

      <div style={{marginBottom: '200px', width: '60%', backgroundColor: '#D56C52', height: '100vh'}}>
        <QouteForm />
      </div>

      <Navbar />
      <div style={{margin: '50px'}}>
          <ResponsiveList items={reviews} rows={1} render={ ( r, k ) => {
            return <Review key={k} { ...r }/>
          } }/>
      </div>
      <div style={{marginBottom: '10px'}}>
     
      <ResponsiveList  items={countryList} rows={3} render={ ( c, k) => {
        return <CountryCard key={k} { ...c }/>
      } } />
      </div>

         <Modal title='Frequently Asked Questions'>
            <ResponsiveList items={q} rows={2} render={ ( q, k ) => 
                <Faq key={k} {...q} /> } 
              />
         </Modal>
     
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

       {
         Object.keys(BUTTON_TYPES)
            .map( ( k ) => (
                <Button key={k} text={k} type={BUTTON_TYPES[k]} />
            ))
       }
      </div>

        <ResponsiveList rows={3} items={steps} render={ ( item, k ) => (
            <StepCard  key={k} id={k} { ...item } />
        ) } />
     
       <ResponsiveList items={q} render={ ( item, k ) => ( 
              <Faq key={k} { ...item }/>
        )} 
       />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
