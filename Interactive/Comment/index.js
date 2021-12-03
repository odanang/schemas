const { Text, Relationship } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { content } = require("./hook");
const config = require("@itoa/schemas/config");
const comment = {
  active: config[process.env.GROUP].includes("InteractiveComment"),
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
  },
  // ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: content,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};

if (config[process.env.GROUP].includes("Interactive")) {
  comment.fields.interactive = {
    type: Relationship,
    ref: "Interactive.comments",
    many: false,
  };
  comment.fields.my_interactive = {
    type: Relationship,
    ref: "Interactive",
    many: false,
  };
}
module.exports = comment;
