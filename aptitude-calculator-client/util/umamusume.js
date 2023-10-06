export async function getUmamusume(id) {
  const umamusume = await require(`@/public/data/umamusume/${id}.json`);

  return umamusume;
}
