import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  Link,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PostContext } from "../Context/PostContext";

const Cards = () => {
  const { post } = useContext(PostContext);

  return (
    <div>
      <ImageList cols={4} rowHeight={300}>
        {post.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://picsum.photos/id/${item.id}/345`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">
                <Link href="https://kun.uz" target="_blank" underline="none">
                  Learn more
                </Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </ImageList>
    </div>
  );
};

export default Cards;
