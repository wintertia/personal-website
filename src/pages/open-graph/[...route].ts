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
      description: "Amoes Noland",
    },
    dev: {
      title: "Wintertia - Dev",
      description: "Wintertia's personal projects",
    },
    blog: {
      title: "Wintertia - Blog",
      description: "Wintertia's personal blog",
    },
    ...Object.fromEntries(
      Object.entries(postPages).map(([id, data]) => [
        `blog/${id}`,
        {
          title: data.title,
        },
      ]),
    ),
  },

  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
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
      description: {
        families: ["Iosevka Aile"],
        weight: "Normal",
        color: [144, 140, 170],
      },
    },
    padding: 90,
  }),
});
