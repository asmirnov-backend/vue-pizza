import AxiosProvider from "./AxiosProvider";
import { useUserStore } from "../../stores/user";

export const httpProvider = new AxiosProvider();
httpProvider.addInterceptor({
  onError: async (status) => {
    // Если с сервиса приходит ошибка 401 Unauthorized, выполняем выход из системы
    if (status === 401) {
      const authStore = useUserStore();
      if (authStore.isAuthenticated) await authStore.logout();
    }
  },
});
export default httpProvider;
