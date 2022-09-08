import React from 'react';
import styled from 'styled-components';

import Customers from '../Customers/Customers'
import Navbar from '../Navbar/Navbar';
import Analytics from '../Analytics/Analytics';
import Transaction from '../Transaction/Transaction';
import Properties from '../Properties/Properties';
import Stock from '../Stocks/Stock';
import Order from '../Order/Order';
import Messages from '../Messages/Messages';
import Agents from '../Agents/Agents';

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row-one">
          <Analytics />
        </div>
        <div className="row-two">
          <Transaction />
          <Properties />
        </div>
        <div className="row-three">
          <Stock />
        </div>
        <div className="row-four">
          <Order />
        </div>
        <div className="row-five">
          <Messages />
          <Agents />
        </div>
        <div className="six">
          <Customers />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  
`
export default Dashboard