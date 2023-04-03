import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

export function ItemListContainer() {
  const [data, setData] = useState();
  //const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      `}
    >
      {data?.map((pers) => {
        return (
          <Card key={pers.id} sx={{ maxWidth: 300, margin: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={`../images/${data.id}.png`}
                alt={pers.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pers.title.slice(0, 10)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pers.body.slice(0, 90)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link style={{ textDecoration: "none" }} to="/details">
                  {" "}
                  Details ...
                </Link>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
