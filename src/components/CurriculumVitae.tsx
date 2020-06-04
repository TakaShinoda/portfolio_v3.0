/** @jsx jsx */
import React, { FC } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { TimeLineShool } from './TimeLineShool'
import { TimeLine } from './TimeLine'
import { css, jsx } from '@emotion/core'

export const CurriculumVitae: FC = () => {
  const linkStyle = css({
    color: '#2196f3',
  })

  const hStyle = css({
    textAlign: 'center',
    color: '#fff'
  })

  return (
    <React.Fragment>
      <h2 css={hStyle}>
        詳細は
        <a
          css={linkStyle}
          href="https://github.com/TakaShinoda/curriculum-vitae"
          target="_black"
          rel="noopener noreferrer"
        >
          こちら
        </a>
      </h2>
      <br />
      <VerticalTimeline>
        <TimeLine
          date="2020/04 - present"
          title="株式会社イデア・レコード"
          subtitle="エンジニア"
          content="主にHTML, CSS, CakePHP, Vue.jsを用いたフロントエンド開発"
        />
        <TimeLineShool
          date="2018/04 - 2020/03"
          title="宮崎大学大学院"
          subtitle="機械・情報系コース 情報システム工学分野"
          content="画像処理(プロジェクションマッピング)の研究に取り組んでいました。"
        />
        <TimeLineShool
          date="2014/04 - 2018/03"
          title="宮崎大学"
          subtitle="工学部 情報システム工学科"
        />
      </VerticalTimeline>
    </React.Fragment>
  )
}
