export const profileBody = {
  type: "object",
  required: ["url"],
  properties: {
    url: {
      type: "string",
      format: "uri",
      description: "LinkedIn public profile URL",
    },
  },
};