import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import WithAuth from '../components/Auth/WithAuth';
import styled from 'styled-components';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Signin from './Signin';
import Valani from './Valani';
import Rendering from './Rendering';
import HighendPage from './Highend';

import './index.css';

const Wrapper = styled.div`
    .fade-enter {
      opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
  }

  .fade-exit {
      opacity: 1;
  }

  .fade-exit.fade-exit-active {
      opacity: 0.01;
      transition: opacity 500ms ease-in;
  }
  div.transition-group {
           position: relative;
      }
  section.route-section {
        position: absolute;
        width: 100%;
        top: 200px;
        left: 0;
      }
`;

const RouteList = ({location, match}) => {
              return (
          <Wrapper>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={{enter:1000, exit:1000}}>
              <section className="route-section">
                <Switch location={location}>
                  <Route exact path="/" component={WithAuth(Home)} />
                  <Route path="/resume" component={WithAuth(Resume)} />
                  <Route exact path="/projects" component={WithAuth(Projects)} />
                  <Route path="/projects/highend" component={WithAuth(HighendPage)} />
                  <Route path="/projects/valani" component={WithAuth(Valani)} />
                  <Route path="/projects/rendering" component={WithAuth(Rendering)} />
                  <Route path="/contact" component={WithAuth(Contact)} />
                  <Route path="/signin" component={Signin} />
                </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          </Wrapper>
                )
};

export default withRouter(RouteList)

