import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const NewsCard = (props) => {
  return (
    <div>
        <Card sx={{ maxWidth: 700 }}>
            {props.article.urlToImage && 
                <CardMedia
                sx={{ height: 140 }}
                image={props.article.urlToImage}
                title="green iguana"
                />
            }
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.article.description}
                </Typography>
                { props.article.source &&
                    <Typography variant="body2" color="text.secondary">
                    {props.article.source.name}
                    </Typography>
                }
                
            </CardContent>
            <CardActions>
                <Link href={props.article.url} underline="none">
                    Learn More
                </Link>
            </CardActions>
        </Card>
    </div>
  )
}

export default NewsCard