import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    textAlign: 'center',
    marginTop: '2%',
  },
  card: {
    maxWidth: 345,
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '1%',
    marginBottom: '1%',
  },
  media: {
    height: 320,
  },
  text: {
    textAlign: 'left',
    color: '#303030',
  },
  noupper: {
    textTransform: 'none',
    color: '#2196f3',
  },
})

export const Development: FC = () => {
  const classes = useStyles()
  return (
    <>
      <h2 className="center">個人開発</h2>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea onClick={() => window.open('https://sketchy-kitchen.com/')}>
            <CardMedia className={classes.media} image="../../sketchy-kitchen.png" title="kitchen" />
            <CardContent>
              <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                レシピ投稿サイト
              </Typography>
              <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                自炊のレシピ投稿サイトです。キーワードで検索、レシピを全て一覧表示、レシピ投稿の3つの機能があります。
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button 
              className={classes.noupper}
              size="small"
              color="primary"
              onClick={() => window.open('https://github.com/TakaShinoda/sketchy-kitchen')}
            >
              GitHub
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}
