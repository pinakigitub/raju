cube(`Surveys`, {
  sql: `SELECT * FROM public.rpt_ivvsurveys`,

  joins: {},

  segments: {
    allConcerns: {
      sql: `${CUBE}.concern_easeofuse = 0 OR ${CUBE}.concern_video = 0 OR ${CUBE}.concern_audio = 0 OR ${CUBE}.survey_rating < 4`,
    },
    videoConcerns: {
      sql: `${CUBE}.concern_video = 0 `,
    },
    audioConcerns: {
      sql: `${CUBE}.concern_audio = 0 `,
    },
    hasComments: {
      sql: `${CUBE}.survey_comments is not null `,
    },
    easeofuseConcerns: {
      sql: `${CUBE}.concern_easeofuse = 0 `,
    },
    providerRole: {
      sql: `${CUBE}.userrole = 'PROVIDER' `,
    },
    memberRole: {
      sql: `${CUBE}.userrole != 'PROVIDER' `,
    },
    belowParRating: {
      sql: `${CUBE}.survey_rating < 4 `,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        allConcerns,
        audioConcerns,
        videoConcerns,
        easeofuseConcerns,
        providerRole,
        memberRole,
        rating,
      ],
    },
  },

  dimensions: {
    userRole: {
      sql: `userrole`,
      type: `string`,
      description: "User Role",
    },

    easeOfUseConcern: {
      sql: `concern_easeofuse`,
      type: `number`,
    },

    audioConcern: {
      sql: `concern_audio`,
      type: `number`,
    },

    videoConcern: {
      sql: `concern_video`,
      type: `number`,
    },

    rating: {
      sql: `survey_rating`,
      type: `number`,
    },

    browserVersion: {
      sql: `survey_browser_v`,
      type: `string`,
    },

    comments: {
      sql: `survey_comments`,
      type: `string`,
    },

    appointmentDateTime: {
      sql: `appointmentdatetime`,
      type: `time`,
    },

    os: {
      sql: `survey_os_n`,
      type: `string`,
    },

    browser: {
      title: `Browser Name`,
      sql: `survey_browser_n`,
      type: `string`,
    },

    osVersion: {
      sql: `survey_os_v`,
      type: `string`,
    },
  },
});
