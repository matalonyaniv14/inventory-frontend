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
import ContactForm from './Components/ContactForm/ContactForm';
import Layout from './Components/Layout/Layout';
import ScrollByRender from './Components/ScrollByRender/ScrollByRender';
import { isMobile, isTablet } from './Utils/matchDevice';
import Alert from './Components/Alert/Alert';
import Carousel from './Containers/Caraousel/Caraousel';

export const q = [
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

    <div className="App" style={{overflow: 'hidden'}}>
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
                  <Button 
                    type={BUTTON_TYPES.RED} 
                    text={'Secure Yourself Today'}
                  />
                  <Button 
                    type={BUTTON_TYPES.RED_BORDER} 
                    text={'How Does This Work?'}
                  />
                </div>
              </div>
           </div>
           <div className="bannerRight">

           </div>
         </div>

         {/* banner */}


         {/* whats-the-big-deal */}

          <div className="wtbd-wrap">
            <div id='bigDealAnchor' className="pageTitle">
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
            <ScrollByRender>
              <div className="percentWrap">
                <ResponsiveList rows={2}>
                  <ProgressCircle 
                    percent={26} 
                    message={"Renters that dont receive their security deposit back when they move out"}
                  />
                  <ProgressCircle 
                    percent={36} 
                    message={"Percent of those renters received no explantion from their landlord"}
                  />
                </ResponsiveList>
              </div>
            </ScrollByRender>
            <div className="wtbdCTA">
              <div className="wtbdCTAText">
                <Text type={types.SMALL} black bold>
                    By not having a valid 3rd party unbiased company do your inventory, 
                    you risk your security deposit when moving out
                </Text>
              </div>
              <div className="wtbdCTAButton">
                <Button 
                  type={BUTTON_TYPES.RED} 
                  text={"Contact Us"} 
                />
              </div>
            </div>
          </div>

         {/* whats-the-big-deal */}


         {/* how-does-this-work */}

          <div className="hdtwWrap">
            <div>
              <div id='hdtwAnchor' className="hdtwTitle">
                <Text type={types.LARGE} block bold>
                  How Does This Work?
                </Text>
              </div>
              <div className="hdtwSteps">
              {
                isMobile() ? (
                  <ScrollByRender>
                    <Carousel component='StepCard'>
                      <ResponsiveList 
                        rows={3} 
                        items={steps} 
                        render={ ( data, key ) => (
                          <StepCard 
                            key={key} 
                            id={key} 
                            {...data} 
                          />
                        )}
                      />
                    </Carousel>
                  </ScrollByRender>
                )     : (
                  <ResponsiveList 
                        rows={3} 
                        items={steps} 
                        render={ ( data, key ) => (
                          <StepCard 
                            key={key} 
                            id={key} 
                            {...data} 
                          />
                        )}
                    />
                )
              }

              </div>
            </div>
            <div className="faqSample">
              <div className="faqSampleFaq">
                <ResponsiveList  
                  rows={2} 
                  items={q} 
                  render={ (data, key) => {
                    if ( key > 3 ) return;
                    return <Faq key={key} {...data}/>
                  }} 
                />
              </div>
              <div className="faqModal">
                <Modal 
                  initiatorText={"View All Frequently Asked Questions"} 
                  title={"Frequently Asked Questions"}
                  >
                    <ResponsiveList  
                      rows={2} 
                      items={q} 
                      render={ (data, key) => <Faq key={key} {...data}/> } 
                    />
                </Modal>
              </div>
            </div>
          </div>

         {/* how-does-this-work */}


         {/* what-will-my-report-include */}

          <div className="wwmriWrap">
              <div className="banner">
                <div className="bannerLeft">
                  <div className="wwmriBannerLeftContent">
                    <div id='wwmriAnchor' className="wwmriTitle">
                      <div className="wwmriHeader">
                        <Text type={types.LARGE} black bold>
                          What Will My Report Include?
                        </Text>
                      </div>
                      <div className="wwmriSubHeader">
                        <Text type={types.SMALL} grey bold>
                          Just like with letting agents, you don’t want to use just any 
                          inventory company or you won’t be guaranteed quality results.
                        </Text>
                      </div>
                    </div>
                    <div className="wwmriList">
                      <div className="listTitle">
                        <Text type={types.SMALL} style={{textDecoration: 'underline'}} black bold>
                          What our inventories include
                        </Text>
                        <div className="listTitleul">
                          <ul>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                Full names and addresses of the landlord, tenants and letting agents
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                The date when the inventory was conducted and the person who conducted it
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                A thorough list of the interior and exterior, décor/fixtures and fittings
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                The condition of these items
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                Meter readings/serial numbers/key lists
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                Embedded photographs 
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                Any relevant receipts (e.g. end of tenancy cleaning performed before the tenant has moved in)
                              </Text>
                            </li>
                            <li>
                              <Text type={types.XSMALL} black bold >
                                Signatures from the landlord and tenant/s including date/s agreeing to the inventory
                              </Text>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {
                    isMobile() && (
                      <div style={{width: '95%', margin: '0 auto'}}>
                        <Modal
                          initiatorText='View Example Report'
                          exitText='Close Report'
                          title='Example Report'
                        >
                          <div className="wwmriExampleReport"></div>
                        </Modal>
                      </div>
                    )
                  }
                </div>
                <div className="bannerRight">
                  <div className="wwmriBannerRightContentWrap">
                    <div className="wwmriRightTitle">
                      <Text type={types.LARGE} white bold>
                        Example Inventory Report
                      </Text>
                    </div>
                    <div className="wwmriExampleReport"></div>
                    <div className="wwmriRightCTA">
                      <Text type={types.LARGE} white bold>
                        Let's Get Started
                      </Text>
                      <div className="wwmriCtaWrap">
                        <Button 
                          type={BUTTON_TYPES.WHITE} 
                          text={'Get A Qoute'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         {/* </Layout> */}
         {/* what-will-my-report-include */}


         {/* countries */}

         <Layout>
          <div className="countriesWrap">
              <div className="countriesTitle">
                <div  id='countriesAnchor' className="countriesHeader">
                  <Text type={types.LARGE} black bold>
                    Why Have I Not Heard About This Before?
                  </Text>
                </div>
                <div className="countriesSubHeader">
                  <Text type={types.SMALL} grey bold>
                    We’re not sure! While most countries require an inventory to be done,  
                    here In israel it seems tenant protection still has a long way to go
                  </Text>
                </div>
              </div>
              <div className="countriesContent">
                <ScrollByRender>
                  <ResponsiveList 
                    rows={3} 
                    items={countryList} 
                    render={ ( data, key ) => <CountryCard key={key} { ...data } /> }
                  />
                </ScrollByRender>
              </div>
            </div>
         </Layout>

         {/* countries */}


         {/*  reviews*/}
   
            <div className="reviewWrap">
                  <ContactForm />
              <div className="reviewRight">
                <div className="reviews">
                    <Text types={types.MEDIUM} black bold > 
                        What The Community Has To Say
                    </Text>
                    <Review author="this author" content="this would be a review, wow what a review"/>
                    <Review author="this author" content="this would be a review, wow what a review" left/>
                    <Review author="this author" content="this would be a review, wow what a review"/>
                </div>
              </div>
            </div>

         {/*  reviews*/}
       <Footer />
    </div>
  );
}

export default App;
