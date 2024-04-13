import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  collections: {
    posts: collection({
      label: "Posts",
      path: "./src/content/posts/*",
      format: { contentField: "content" },
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
        }),
        content: fields.mdx({
          label: "Content",
        }),
      },
    }),
    blocks: collection({
      label: "Blocks",
      path: "./src/content/blocks/*",
      format: { data: "json" },
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
        }),
        blocks: fields.blocks(
          {
            section: {
              label: "Section",
              schema: fields.object({
                title: fields.text({ label: "Section title" }),
                cards: fields.array(
                  fields.object({
                    title: fields.text({ label: "Card title" }),
                    text: fields.mdx({ label: "Text" }),
                  }),
                  {
                    label: "Cards",
                    itemLabel(props) {
                      return props.fields.title.value;
                    },
                  }
                ),
              }),
            },
          },
          {
            label: "Blocks",
            validation: { length: { min: 1 } },
          }
        ),
      },
    }),
  },
});
