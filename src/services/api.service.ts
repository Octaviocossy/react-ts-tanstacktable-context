import { Result } from '../models';

const api = {
  get: async <T>(url: string): Promise<Result<T>> => {
    try {
      const req = await fetch(url);

      return { type: 'success', value: await req.json() };
    } catch (err) {
      const error = err as Error;

      if (error.message === 'Failed to fetch') {
        // window.location.reload();
      }

      return { type: 'error', value: error };
    }
  },
};

export default api;
