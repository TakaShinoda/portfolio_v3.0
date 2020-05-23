import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export const TopPage: FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Shinoda Takahiro</h1>
      <ul>
        <li>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 className="link" onClick={() => history.push('/curriculum')}>Info</h2>
          </Button>
        </li>
        <li>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 className="link" onClick={() => history.push('/development')}>Dev</h2>
          </Button>
        </li>
        <li>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 className="link" onClick={() => history.push('/social')}>SNS</h2>
          </Button>
        </li>
      </ul>
    </>
  )
}
