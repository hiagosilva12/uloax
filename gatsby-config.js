module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "uloax",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckxac7wdf286i01yz10206khz/master",
      },
    },
  ],
};
