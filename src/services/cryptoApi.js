import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'de9d222d50msh58db576c1354483p178e24jsn772c4a514364'
}

const baseUrl ='https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:() => createRequest('/coins')
        })
    })


});
export const{
    useGetCryptosQuery,
} = cryptoApi;