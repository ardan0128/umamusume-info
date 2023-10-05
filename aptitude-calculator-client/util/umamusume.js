export async function getUmamusume(id) {
  const umamusume = await require(`@/public/data/${id}.json`);

  return umamusume;
}
