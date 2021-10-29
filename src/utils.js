// helper function for generating avatar link (powered by avatars.dicebear.com)
export function getAvatarLink(seed) {
  seed = seed || Math.floor(seed || Math.random() * 1000000)
  return `https://avatars.dicebear.com/api/personas/${encodeURIComponent(
    seed
  )}.svg?background=%23ffffff`
}
