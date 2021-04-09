require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "Portfolio",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Portfolio Michał Okrasa",
                short_name: "WebDev M.O.",
                start_url: "/",
                background_color: "#FDFDFD",
                theme_color: "#FFBE57",
                display: "standalone",
                icon: "src/images/icon.png",
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "data",
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
    ],
};
