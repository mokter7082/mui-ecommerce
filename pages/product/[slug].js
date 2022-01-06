import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import Layout from "../../Components/Layout";
import data from "../../utility/data";
import useStyle from "../../utility/styles";
import Image from "next/image";

const ProductScreen = () => {
  const classes = useStyle();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/">
          <Link>Back to Product</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xm={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                Category: {product.category}
              </Typography>{" "}
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating {product.rating} stars {product.numReviews} review
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In a Stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;
