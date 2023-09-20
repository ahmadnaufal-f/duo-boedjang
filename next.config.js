module.exports = {
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"))
        config.resolve.extensions = [".mjs", ".ts", ".tsx", ".js", ".jsx", ".json"]

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                use: ["@svgr/webpack"],
            }
        )

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return config
    },

    output: "export",
    images: {
        unoptimized: true,
    },
    modularizeImports: {
        "react-icons/?(((\\w*)?/?)*)": {
            transform: "@react-icons/all-files/{{ matches.[1] }}/{{ member }}",
            skipDefaultConversion: true,
        },
    },
    // ...other config
}
