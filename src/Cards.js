import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    margin: '0 auto',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  //const [values, setValues] = useState([1,2,3]);
  return (
    [{
      img: "http://4.bp.blogspot.com/-ZPiBd8dhaXs/UgksRE6whcI/AAAAAAAAA-I/TPd9BZvKGY0/s1600/flor1.jpg",
      title: 'Flores de Irlanda',
      desc: 'Hay varios cientos de especies de flores silvestres que crecen en Irlanda. Las flores pueden...'
    },
    {
      img: "https://i1.wp.com/azwanderlust.com/blog/wp-content/uploads/2017/05/DSCN0120.jpg?resize=1024,768",
      title: 'Flores de Holanda',
      desc: 'A Holanda la llaman ‘la mayor floristería del mundo’, y con razón. Los holandeses se toman sus flores muy en serio, y no sólo los tulipanes. Hay mercados de flores en todas las grandes ciudades y sus...'
    },

    {
      img: "http://img.fotocommunity.com/cardo-flor-preciosa-yseca-estupenda-para-decoracion-041c7681-98ff-4f8f-8864-63b8c3bfdf9f.jpg?height=1080",
      title: 'Flores de Escocia',
      desc: 'A pesar de no ser la mas abundante en Escocia, se considera al cardo como la flor nacional del pais...'
    }
  ].map(o => {
      return (
        <>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={o.img}
          title="Contemplative Reptile"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {o.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {o.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Marcar como Favorito
        </Button>
        <Button size="small" color="primary">
          Seguir Leyendo
        </Button>
      </CardActions>
    </Card>
    <br/>
</>
      );
    })
    

  )
    }
