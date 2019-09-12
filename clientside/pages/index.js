import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../layouts";
import Home from "./../src/pages/Home/index";
import "./../less/style.less";
import fetch from "isomorphic-unfetch";

const HomePage = props => (
  <Layout>
    <Home products={props.products}></Home>
  </Layout>
);

export default HomePage;

HomePage.getInitialProps = async function() {
  const res = await fetch("http://localhost:4000/beers");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data}`);

  return {
    products: data.map(entry => entry)
  };
};
