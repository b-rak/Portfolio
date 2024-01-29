export default defineNuxtRouteMiddleware(async (to, from) => {
  const projects = [
    "nutrition-calculator",
    "mastering-nuxt-3",
    "js-challenges",
    "new-dashboard",
  ];
  if (!projects.includes(to.params["project"] as string)) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  } else {
    navigateTo(to);
  }
});
