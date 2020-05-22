import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TopPage } from './components/TopPage'
import { CurriculumVitae } from './components/CurriculumVitae'
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
          <Route exact path="/social">
            <Social />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
