import api from '.';

export async function authentication(userEmail: string) {
  const result = await api.get(`/start/${userEmail}`);
  return result.data.token;
}
