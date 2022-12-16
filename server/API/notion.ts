import { Client } from '@notionhq/client';

export default defineEventHandler((event) => {
  
  const config = useRuntimeConfig();
  const notion = new Client({ auth: config.apiKey });

  const result = notion.databases.query({
    database_id: config.public.databaseURL
  });
  return result;
});
