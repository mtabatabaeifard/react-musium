import { BASE_INSTANCE } from 'api/constant';
import { useCookies } from 'react-cookie';

export default function useLogin() {
    const [cookies] = useCookies();
    // eve.holt@reqres.in
    BASE_INSTANCE.defaults.headers.common.Authorization = cookies?.accessToken;
}
