import React from 'react'

const resume = [
  {
    company: 'The Couch',
    url: 'https://thecouch.nyc/',
    roles: 'Dev',
    dates: 'Aug 2017 - present'
  },
  {
    company: 'Freelance',
    roles: 'React, GraphQL, Node.js, Shopify',
    dates: 'May 2017 - present'
  },
  {
    company: 'Barrel',
    url: 'https://barrelny.com/',
    roles: 'Dev',
    dates: 'Jan 2015 - May 2017'
  },
  {
    company: 'Sculpt',
    url: 'https://wearesculpt.com/',
    roles: 'Design, Social, Photo, Dev',
    dates: 'July 2013 - Dec 2014'
  }
]

export default function Resume (props) {
  return (
    <div className='resume'>
      <h2 className='h6 caps cb track pb1'><em>Résumé</em></h2>
      <ul className='mt1 f fw'>
        {resume.map(r => (
          <li key={r.dates} className='rel'>
            <h4 className='black rel'>
              {r.url && <sup className='h6 abs left b'>↳</sup>}
              {r.company}
            </h4>
            <p className='h5 my0'>{r.roles}</p>
            <p className='h6 mt025'>{r.dates}</p>
            {r.url && <a href={r.url} target='_blank' className='abs fill z1' />}
          </li>
        ))}
      </ul>
    </div>
  )
}
