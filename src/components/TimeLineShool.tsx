import React, { FC } from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

type Props = {
    date: string
    title: string;
    subtitle: string;
    content?: string;
}

export const TimeLineShool: FC<Props> = ({date, title, subtitle, content}) => {
  return (
    <>
        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          contentStyle={{ background: '#2196f3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
          date={date}
          iconStyle={{ background: '#2196f3', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>{content}</p>
        </VerticalTimelineElement>
    </>
  )
}
