cube(`Surveytemp`, {
  sql: `SELECT * FROM public.surveytemp`,

  joins: {},
  segments: {
    providerRole: {
      sql: `${CUBE}.userrole = 'PROVIDER' `,
    },

    belowParRating: {
      sql: `${CUBE}.survey_rating < 4 `,
    },
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [providerRole, rating],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
    rating: {
      sql: `survey_rating`,
      type: `number`,
    },
    userrole: {
      sql: `userrole`,
      type: `string`,
    },
  },
});
