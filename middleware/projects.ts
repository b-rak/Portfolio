export default defineNuxtRouteMiddleware(async (to, from) => {
  const projects = [
    "mastering-nuxt-3",
    "new-dashboard",
    "cooksphere",
    "bar-sync",
    "uplift",
  ];
  if (!projects.includes(to.params["project"] as string)) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  } else {
    navigateTo(to);
  }
});
