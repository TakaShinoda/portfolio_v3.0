/** @jsx jsx */
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { css, jsx } from '@emotion/core'

export const TopPage: FC = () => {
  const history = useHistory()

  const liStyle = css({
    color: "#fff"
  })

  const linkStyle = css({
    color: '#2196f3',
  })

  return (
    <React.Fragment>
      <h1>Shinoda Takahiro</h1>
      <ul>
        <li css={liStyle}>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 css={linkStyle} onClick={() => history.push('/curriculum')}>Info</h2>
          </Button>
        </li>
        <li css={liStyle}>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 css={linkStyle} onClick={() => history.push('/development')}>Dev</h2>
          </Button>
        </li>
        <li css={liStyle}>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
          >
            <h2 css={linkStyle} onClick={() => history.push('/social')}>SNS</h2>
          </Button>
        </li>
      </ul>
    </React.Fragment>
  )
}
