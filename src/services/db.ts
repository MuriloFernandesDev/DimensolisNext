import axios from "axios";
import { GetServerSidePropsContext } from "next/types";

export function setupAPIClient(
    endpoint: string,
    ctx?: GetServerSidePropsContext
) {
    const api = axios.create({
        baseURL: `https://api.${endpoint}.com.br/`,
    });

    return api;
}
