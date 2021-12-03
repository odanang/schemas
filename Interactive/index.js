const { Relationship } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const config = require("@itoa/schemas/config");
const { hook } = require("./hook");
const interactive = {
  active: models[process.env.GROUP].includes("Interactive"),
  fields: {},
  // ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: hook,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};

if (models[process.env.GROUP].includes("InteractiveReaction")) {
  interactive.fields.reactions = {
    type: Relationship,
    ref: "InteractiveReaction.interactive",
    many: true,
  };
}

if (models[process.env.GROUP].includes("InteractiveComment")) {
  interactive.fields.comments = {
    type: Relationship,
    ref: "InteractiveComment.interactive",
    many: true,
  };
}
if (models[process.env.GROUP].includes("Post")) {
  interactive.fields.post = {
    type: Relationship,
    ref: "Post.interactive",
    many: false,
  };
}
module.exports = interactive;
