module.exports = {
  siteMetadata: {
    title: `Sh*ts&Gigs Podcast`,
    description: `Life is full of shit and full of giggles. Join two entertainers, who are long life friends, that push through life, living the dream with giggles and laughter. You will learn, you will be shocked, you will definitely have a laugh with two of the worlds most irresponsible, out there, entertaining people in the business. Join Noel, Omar and guests as they learn, love and laugh. Enjoy fools!!!!!`,
    author: `shitsngigspodcast`,
    twitter: `https://www.twitter.com/omargodotcom/`,
    instagram: `https://www.instagram.com/omargodotcom/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1490737643?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3NoaXRhbmRnaWdzcG9kY2FzdC9mZWVkLnhtbA==`,
    pocket: `https://pca.st/itunes/1490737643`,
    spotify: `https://open.spotify.com/show/38xYK7sDyjnIuoH2Oz9P3r`,
    overcast: `https://overcast.fm/itunes1490737643`,
    castbox: `https://castbox.fm/vic/1490737643`,
    castro: `https://castro.fm/itunes/1490737643`,
    podbean: `https://shitandgigspodcast.podbean.com/`,
    beaker: `https://www.iheart.com/podcast/from-podnews-56956443/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://feed.podbean.com/shitandgigspodcast/feed.xml`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
