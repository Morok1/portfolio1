import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import img from "../img/SmaginImg.jpg";

class Resume extends Component {
  render() {
    return (
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                <img
                    src={img}
                    alt="avatar"
                    style={{
                      alignSelf: 'center',
                      flex:1
                    }}
                />
              </div>

              <h2 style={{paddingTop: '2em'}}>Evgeniy Smagin</h2>
              <h4 style={{color: 'grey'}}>Full stack developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Moscow</h5>
              <p>1 Hacker Way Menlo Park, 94025</p>
              <h5>Email</h5>
              <p>zhenyasmagin@yandex.ru</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              <Education
                  startYear={2013}
                  endYear={2017}
                  schoolName="Moscow institute of physics and technology"
                  schoolDescription="Department of control and applied mathematics. Bachelor's degree"
              />

              <Education
                  startYear={2017}
                  endYear={2019}
                  schoolName="Moscow institute of physics and technology"
                  schoolDescription="Department of innovation and high technology. Master's degree"
              />
              <hr style={{borderTop: '3px solid #e22947'}}/>

              <h2>Experience</h2>

              <Experience
                  startYear={2016}
                  endYear={2017}
                  jobName={"Keldysh's institute"}
                  // jobDescription={["as" , "da"] ["asdas"] [""]}
                  jobDescription="Development and improvement algorithms for modelling of social economic systems.', 'Improvement and adoption previous algorithms and realization these in python using numpy, scipy, matplotlib, sklearn libraries"
              />

              <Experience
                  startYear={2017}
                  endYear={2020}
                  jobName="Sberbank"
                  jobDescription="Creation of variety components on React JS.
                Increased quality gate of testing from 56 to 80 percents using JUnit, Mockito, Hamcrest.
                Created about 20 percent of converters in our sysmem from database com.techprimers.springbatchexample1.model to domain com.techprimers.springbatchexample1.model using ModelMapper.
                Development domain com.techprimers.springbatchexample1.model of our system based of database denormalization com.techprimers.springbatchexample1.model.
                Development 2 integration of other system.
                Development of utilite for detection and exchange some patterns of bytecode using ASM library.
                Creation Jenkins tasks.
              Help of teaching students of Multiprocessing Computing, Java optimization, Backend development courses."
              />

              <hr style={{borderTop: '3px solid #e22947'}}/>
              <h2>Skills</h2>
              <Skills
                  skill="Java"
                  progress={15}
              />
              <Skills
                  skill="Spring"
                  progress={10}
              />
              <Skills
                  skill="React"
                  progress={10}
              />
              <Skills
                  skill="Python"
                  progress={5}
              />

            </Cell>
          </Grid>
        </div>
    )
  }
}

export default Resume;
