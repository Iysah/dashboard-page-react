import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Section, Top, Bottom, Earnings } from './style';

const data = [
  {
    "id": "Paypal",
    "label": "Paypal",
    "value": 38,
    "color": "hsl(48, 70%, 50%)"
  },
  {
    "id": "Stripe",
    "label": "Bank",
    "value": 145,
    "color": "hsl(94, 70%, 50%)"
  },
  {
    "id": "Bank",
    "label": "Transfer",
    "value": 492,
    "color": "hsl(286, 70%, 50%)"
  },
  {
    "id": "Cash",
    "label": "Cash",
    "value": 547,
    "color": "hsl(145, 70%, 50%)"
  },
  {
    "id": "Binance pay",
    "label": "Binance Pay",
    "value": 68,
    "color": "hsl(177, 70%, 50%)"
  }
]

const Transfer = () => {
  return (
    <Section>
      {/* <h4 title='Transfer History'>Transfer History</h4>
      <div className="history">
        <Top>
          <div className="pie-chart">
            <ResponsivePie
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          0.2
                      ]
                  ]
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          2
                      ]
                  ]
              }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'ruby'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'c'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'go'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'python'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'scala'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          id: 'lisp'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          id: 'elixir'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          id: 'javascript'
                      },
                      id: 'lines'
                  }
              ]}
              legends={[
                  {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 16,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 16,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ]
                  }
              ]}
            />
          </div>
          <h1 className='total'><span>Total</span>$100,000</h1>
        </Top>

        <Bottom>
          <h4>This month earning</h4>
          <Earnings className='earning'>
            <div className="detail">
              <h3>Transfer to Paypal</h3>
              <span>03 January 2022, </span>
            </div>
            <div className="amount">
              <h6>$5,000</h6>
            </div>
          </Earnings>
        </Bottom>
      </div> */}
    </Section>
  )
}

export default Transfer