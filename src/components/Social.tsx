/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

export const Social: FC = () => {
  const liStyle = css({
    color: "#fff"
  })

  const linkStyle = css({
    color: '#2196f3',
    textDecoration: 'underline',
  })

  

  return (
    <React.Fragment>
      <ul>
        <li css={liStyle}>
          <a
            css={linkStyle}
            href="https://github.com/TakaShinoda"
            target="_black"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li css={liStyle}>
          <a
            css={linkStyle}
            href="https://takashinoda.hatenablog.com/archive"
            target="_black"
            rel="noopener noreferrer"
          >
            技術ブログ(はてな)
          </a>
        </li>
        <li css={liStyle}>
          <a
            css={linkStyle}
            href="https://speakerdeck.com/takashinoda"
            target="_black"
            rel="noopener noreferrer"
          >
            Speaker Deck
          </a>
        </li>
        <li css={liStyle}>
          <a
            css={linkStyle}
            href="https://twitter.com/tttttt_621_s"
            target="_black"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </React.Fragment>
  )
}
