import React, { FC } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { TimeLineShool } from './TimeLineShool'
import { TimeLine } from './TimeLine'


export const CurriculumVitae: FC = () => {
  return (
    <>
      <h2 className="center">
        詳細は
        <a
          href="https://github.com/TakaShinoda/curriculum-vitae"
          target="_black"
          rel="noopener noreferrer"
        >
          こちら
        </a>
      </h2>
      <br />
      <VerticalTimeline>
          <TimeLineShool date="2014/04 - 2018/03" title="宮崎大学" subtitle="工学部 情報システム工学科" />
          <TimeLineShool date="2018/04 - 2020/03"  title="宮崎大学大学院" subtitle="機械・情報系コース 情報システム工学分野" content="画像処理(プロジェクションマッピング)の研究に取り組んでいました。" />
          <TimeLine date="2020/04 - present" title="株式会社イデア・レコード" subtitle="エンジニア" content="主にHTML, CSS, CakePHPを用いたwebページの作成" />
      </VerticalTimeline>
    </>
  )
}
