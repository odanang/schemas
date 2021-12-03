const { Uuid, Checkbox, Relationship } = require("@itoa/fields");
const { roleSimple } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const relationship = {
  active: !process.env.AUTH,
  fields: {
    to: {
      type: Relationship,
      ref: "User",
    },
    isAccepted: {
      type: Checkbox,
      default: false,
    },
  },
  ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), , byTracking()],
};

module.exports = relationship;
