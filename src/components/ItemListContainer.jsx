import { useFetch } from "../hooks/useFecth";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { css } from "@emotion/css";

export function ItemListContainer() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      `}
    >
      {loading && <li>is Loading....</li>}
      {data?.map((pers) => {
        return (
          <Card key={pers.id} sx={{ maxWidth: 200, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={`/images/${pers.id}.png`}
                alt={pers.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pers.title.slice(0, 10)}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {pers.body.slice(0, 90)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link style={{ textDecoration: "none" }} to={`/detail/${pers.id}`}>
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
