cube(`Players`, {
  sql: `SELECT * FROM public.players`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstname, lastname, country, lastname, birthdate]
    }
  },
  
  dimensions: {
    firstname: {
      sql: `firstname`,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}."Lastname"`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    birthdate: {
      sql: `birthdate`,
      type: `time`
    }
  }
});
