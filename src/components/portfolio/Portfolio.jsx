import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port.PNG'
import IMG2 from '../../assets/IPL-score--prediction.png'
import IMG3 from '../../assets/post-sphere.png'
import IMG5 from '../../assets/LeetCode.png'
import IMG6 from '../../assets/route-spotter.png'
import IMG7 from '../../assets/automated-essay.png'

// we r going to generate portfolio dynamically using array map method
const data = [
  {
    id: 1,
    image: IMG6,
    techstack : 'React.js | Node.js | Express.js | MongoDB | Redux | Material UI',
    title: 'RouteSpotter',
    github: 'https://github.com/vgirkar/Route-Spotter',
    demo: 'https://github.com/vgirkar/Route-Spotter'

  },
  {
    id: 2,
    image: IMG7,
    techstack : 'Java | scikit-learn | NLTK | Transformers | TensorFlow | Flask | PostgreSQL',
    title: 'Automated Essay Evaluation',
    github: 'https://github.com/vgirkar/Essay_Grading',
    demo: 'https://github.com/vgirkar/Essay_Grading'

  },

  {
    id: 3,
    image: IMG1,
    techstack : 'React.js | HTML | CSS ',
    title: 'Portfolio',
    github: 'https://github.com/vgirkar/My_Portfolio',
    demo: 'https://github.com/vgirkar/My_Portfolio'

  },

  {
    id: 4,
    image: IMG2,
    techstack : 'Python | pandas | NumPy | scikit-learn | XGBoost | Flask | SQLite',
    title: 'IPL Prediction System',
    github: 'https://github.com/vgirkar/IPL-Prediction-System',
    demo: 'https://github.com/vgirkar/IPL-Prediction-System'

  },

  {
    id: 5,
    image: IMG3,
    techstack : 'Java | Android | OkHttp | RecyclerView | JSON Parsing | Alert Dialogs | Background Threads | Main Thread Updates | Postman',
    title: 'PostSphere – A simple and modern name reflecting a posts-based app.',
    github: 'https://github.com/vgirkar/Mobile-Application-Development',
    demo: 'https://github.com/vgirkar/Mobile-Application-Development'

  },

  // {
  //   id: 6,
  //   image: IMG4,
  //   techstack : 'React.js | HTML | CSS ',
  //   title: 'Travel Guide',
  //   github: 'https://github.com/akansha2002/SIH',
  //   demo: 'https://travel-guide-rho.vercel.app/'

  // },
  {
    id: 7,
    image: IMG5,
    techstack : 'Java | Python ',
    title: 'Leetcode',
    github: 'https://leetcode.com/u/hazelsnake02/',
    demo: 'https://leetcode.com/u/hazelsnake02/'

  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Crypto Currency Dashboard & Financial Visulaization',
  //   github: 'https://github.com',
  //   demo: 'https:dribble.com/shots/16673735-Crypto-currency-dashboards-and-financial-data-visualization'

  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,techstack, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                  <h3>{title}</h3>
                  <div className='techstack'>
                  <p>{techstack}</p>
                  </div>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
