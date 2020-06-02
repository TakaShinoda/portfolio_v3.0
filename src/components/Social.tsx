/** @jsx jsx */
import { FC, Fragment } from 'react'
import { css, jsx } from '@emotion/core'

export const Social: FC = () => {
  const liStyle = css({
    color: "#fff"
  })

  const socialLink = css({
    color: '#2196f3',
    textDecoration: 'underline',
  })

  

  return (
    <Fragment>
      <ul>
        <li css={liStyle}>
          <a
            css={socialLink}
            href="https://github.com/TakaShinoda"
            target="_black"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li css={liStyle}>
          <a
            css={socialLink}
            href="https://takashinoda.hatenablog.com/archive"
            target="_black"
            rel="noopener noreferrer"
          >
            技術ブログ(はてな)
          </a>
        </li>
        <li css={liStyle}>
          <a
            css={socialLink}
            href="https://speakerdeck.com/takashinoda"
            target="_black"
            rel="noopener noreferrer"
          >
            Speaker Deck
          </a>
        </li>
        <li css={liStyle}>
          <a
            css={socialLink}
            href="https://twitter.com/tttttt_621_s"
            target="_black"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </Fragment>
  )
}
