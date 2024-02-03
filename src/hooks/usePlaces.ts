import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { Place } from '../types/Place';

const API_URL = 'http://192.168.15.120:3000';

const axiosClient = axios.create({
    baseURL: API_URL,
});

const getPlaces = (): AxiosPromise<Place[]> => axiosClient.get('/places');

export const usePlaces = () => {

    const { data } = useQuery({
        queryFn: async () => await getPlaces(),
        queryKey: ['places'],
        enabled: true
    });

    return { places: data?.data }
};