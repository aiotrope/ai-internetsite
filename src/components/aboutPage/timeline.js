import * as React from "react"
//import { Link } from "gatsby"
import "./timeline.css"
import { WindupChildren } from "windups"

const Timeline = () => (
  <>
    <WindupChildren>
      <h2>Details</h2>
      <div className="container">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>{new Date().getFullYear()} - 2017</h3>
            <span>Spasso & Coding</span>
            <p>
              Since 2017, I've been working at Spasso and dabbling with coding.
              Thrive in the face of the Covid-19 pandemic that shook the world
              in 2019 and adjust to the new normal.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016</h3>
            <span>Part-time work</span>
            <p>
             {/*  I decided to work as a freelance cook after four years of working
              in the bustling Amarillo. */}
              I decided to work as a freelance cook. (And thhhhthhhh)
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2012</h3>
            <span>Amarillo & La Tomatina</span>
            <p>
              I left from Radisson Blu Royal for my second workplace in
              Amarillo, Helsinki. Attended a world festival of throwing smashed
              tomatoes in Spain.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011</h3>
            <span>Expanding my horizons</span>
            <p>
              One of the personnel hired to Finland. My first assignment was to
              the Radisson Blu Royal Hotel in Helsinki.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010</h3>
            <span>Palawan and Packing up</span>
            <p>
              Le Bistro Vert was my last employment in the Philippines. Then, in
              preparation for working overseas, I attended survival Finnish
              language instruction. During my brief stay at Premium Gold Cafe,
              we visited Palawan. The beaches, on the other hand, are stunning.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008 - 2009</h3>
            <span>Rough years</span>
            <p>
              Admitted to a graduate program in Food Science but had to withdraw
              due to financial difficulties and work obligations. I left Chelsea
              Cafe in late 2009.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2007</h3>
            <span>Grunt work</span>
            <p>
              I finished my Culinary Arts certificate program. I was looking for
              an internship at the time but was fortunate enough to get employed
              as a casual worker and started working in the kitchen at M Cafe
              and Chelsea Market & Cafe. After a few years as a food
              technologist, I decided to change careers.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2006</h3>
            <span>Vocational</span>
            <p>
              I started to attend a short-term vocational training certification
              to become a culinarian while working as an R&D technologist in a
              flavor company.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2004</h3>
            <span>Research & Development work</span>
            <p>
              I was hired into a flavor company's Research & Development
              department, where I was responsible with developing dehydrated
              foodstuffs and blended flavors for food manufacturers.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2002</h3>
            <span>Laboratory Analyst</span>
            <p>
              Analyzing the physico-chemical, microbiological, and organoleptic
              properties of food products, as well as documenting the company's
              sanitary requirements are two of my key responsibilities.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2001</h3>
            <span>Real world</span>
            <p>
              I completed my bachelor's degree and got my first work as a
              processing supervisor in a poultry processing facility, but I left
              after a few months.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1997</h3>
            <span>College</span>
            <p>
              Accepted into a food technology program and enrolled. Interned in
              different food manufacturing companies as well as a government
              research institute.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1995 - 1996</h3>
            <span>Decide</span>
            <p>
              I'm only starting to think about what major I'll pursue in
              college. My parents want me to attend a computer science program,
              but I prefer food technology instead.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1980</h3>
            <span>Youngster</span>
            <p>Born and raised in the Philippines.</p>
          </div>
        </div>
      </div>
    </WindupChildren>

</> 
)

export default Timeline
