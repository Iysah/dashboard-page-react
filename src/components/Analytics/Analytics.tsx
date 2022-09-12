import React from 'react';

import { Section } from './style';
import {FiArrowDownLeft, FiArrowUpRight} from 'react-icons/fi';

const Analytics = () => {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <div className='rate'>
            <h2>$12.05</h2>
            <span>+2.5%</span>
          </div>
          <h3>Pontential growth</h3>
        </div>
        <FiArrowUpRight />
      </div>

      <div className="analytic">
        <div className="content">
          <div className='rate'>
            <h2>$23.01</h2>
            <span>+11.4%</span>
          </div>
          <h3>Revenue Current</h3>
        </div>
        <FiArrowUpRight />
      </div>

      <div className="analytic">
        <div className="content">
          <div className='rate'>
            <h2>$8.23</h2>
            <span>-1.5%</span>
          </div>
          <h3>Daily income</h3>
        </div>
        <FiArrowDownLeft />
      </div>

      <div className="analytic">
        <div className="content">
          <div className='rate'>
            <h2>$19.48</h2>
            <span>+5.67%</span>
          </div>
          <h3>Expenses current</h3>
        </div>
        <FiArrowUpRight />
      </div>
    </Section>
  )
}

export default Analytics