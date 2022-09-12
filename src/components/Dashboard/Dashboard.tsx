import React from 'react';
import { Section } from './style'

import Sidebar from '../Sidebar';

import Customers from '../Customers/Customers'
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
      <Sidebar />
      <div className="grid">
        <div className="row-one single">
          <Analytics />
        </div>
        <div className="row-two">
          <Transaction />
          <Properties />
        </div>
        <div className="row-three single">
          <Stock />
        </div>
        <div className="row-four">
          <Order />
        </div>
        <div className="row-five">
          <Messages />
          <Agents />
        </div>
        <div className="six single">
          <Customers />
        </div>
      </div>
    </Section>
  )
}

export default Dashboard