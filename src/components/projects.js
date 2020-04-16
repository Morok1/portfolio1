import React, {Component} from 'react';
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}
              }>Java Project #1</CardTitle>
              <CardText>
              </CardText>
              <CardActions border>
                <Button colored href={"https://www.google.com/"}>GitHub</Button>
                <Button colored href={"https://www.google.com/"}>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>
          </div>

            /* Project 2 */
            /* Project 3 */



      )
    } else if (this.state.activeTab === 1) {
      return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}
              }>Kotlin project </CardTitle>
              <CardText>
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>
          </div>


      )
    } else if (this.state.activeTab === 2) {
      return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}
              }>Python project</CardTitle>
              <CardText>
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>
          </div>

      )
    }
  }

  render() {
    return (
        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>Java</Tab>
            <Tab>Kotlin</Tab>
            <Tab>Python</Tab>
          </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


        </div>
    )
  }
}

export default Projects;
