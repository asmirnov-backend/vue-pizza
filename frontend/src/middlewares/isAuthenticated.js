import { useUserStore } from "../stores/user";

export function isAuthenticated() {
  const userStore = useUserStore();
  if (!userStore.isAuthenticated) {
    return { path: "/" };
  }
  return true;
}
