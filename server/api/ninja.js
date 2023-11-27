export default defineEventHandler(async (event) => {
  // handle query params

  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_SLYIjXIpOmaN4LeQJokTmI9cMqrS6gHnAi2bS1dC"
  );
  return data;
});
