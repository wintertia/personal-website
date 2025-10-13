import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("posts");
const postPages = Object.fromEntries(
  collectionEntries.map(({ id, data }) => [id, data]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",

  pages: {
    index: {
      title: "Wintertia",
    },
    dev: {
      title: "Dev - Wintertia",
    },
    blog: {
      title: "Blog - Wintertia",
    },
    ...Object.fromEntries(
      Object.entries(postPages).map(([id, data]) => [
        `blog/${id}`,
        {
          title: data.title,
          description: data.description,
        },
      ]),
    ),
  },

  getImageOptions: (path, page) => ({
    title: page.title,
    logo: {
      path: "./src/images/logo.png",
      size: [200],
    },
    bgGradient: [
      [35, 33, 54],
      [57, 53, 82],
    ],
    fonts: [
      "./node_modules/@fontsource/iosevka-aile/files/iosevka-aile-latin-800-normal.woff",
    ],
    font: {
      title: {
        families: ["Iosevka Aile"],
        weight: "Normal",
        color: [224, 222, 244],
      },
    },
  }),
});
