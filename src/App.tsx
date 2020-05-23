import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TopPage } from './components/TopPage'
import { CurriculumVitae } from './components/CurriculumVitae'
import { Development } from './components/Development'
import { Social } from './components/Social'
import './App.css'


export const App: FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route exact path="/curriculum">
            <CurriculumVitae />
          </Route>
          <Route exact path="/development">
            <Development />
          </Route>
          <Route exact path="/social">
            <Social />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
