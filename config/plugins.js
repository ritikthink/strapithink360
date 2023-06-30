module.exports = () => {
  return {
    ckeditor: {
      enable: true,
    },
    transformer: {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms: {
          wrapBodyWithDataKey: true,
        },
      },
    },
    ezforms: {
      config: {
        captchaProvider: {
          name: "none",
          config: {},
        },
        enableFormName: false,
        notificationProviders: [
          {
            name: "email",
            enabled: true,
            config: {
              from: "noreply@strapi.io",
              subject: "New Contact Form Submission",
            },
          },
        ],
      },
    },
  };
};
