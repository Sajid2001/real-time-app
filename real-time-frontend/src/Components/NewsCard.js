import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const NewsCard = (props) => {

    const font = "'Kanit', sans-serif"
    
  return (
    <div>
        <Card sx={{ maxWidth: 600 }}>
            {props.article.urlToImage && 
                <CardMedia
                sx={{ height: 200 }}
                image={props.article.urlToImage}
                title="green iguana"
                />
            }
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" fontFamily={font}>
                {props.article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.article.description}
                </Typography>
                { props.article.source &&
                    <Typography fontWeight={'bold'}  fontFamily={font} marginTop={1} variant="body2" color="text.secondary">
                    {props.article.source.name}
                    </Typography>
                }
                
            </CardContent>
            <CardActions>
                <Link paddingLeft={1} paddingBottom={1} href={props.article.url} underline="none">
                    Link To Article
                </Link>
            </CardActions>
        </Card>
    </div>
  )
}

export default NewsCard