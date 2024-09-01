import { useState, useEffect } from "react";
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
} from "axios";

interface FetchDataParams {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  data?: any;
  params?: any;
  headers?: Record<string, string>;
}

interface UseAxiosReturn {
  response: any;
  error: string;
  loading: boolean;
  fetchData: (params: FetchDataParams) => Promise<void>;
}

const useAxios = (): UseAxiosReturn => {
  const [response, setResponse] = useState<any>([null]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const axiosInstance: AxiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_BASE_API_URL,
    baseURL:"",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config: any) => {
      // const token = localStorage.getItem("X-TOKEN");
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();
    return () => {
      source.cancel("Component unmounted: Request cancelled.");
    };
  }, []);

  const fetchData = async ({
    url,
    method,
    data = {},
    params = {},
    headers = {},
  }: FetchDataParams): Promise<void> => {
    setLoading(true);
    try {
      const result: AxiosResponse = await axiosInstance({
        url,
        method,
        data: method.toLowerCase() === "get" ? undefined : data,
        params: method.toLowerCase() === "get" ? data : params,
        cancelToken: axios.CancelToken.source().token,
        headers,
      });
      setResponse(result.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled", (error as AxiosError).message);
      } else {
        setError(
          (error as AxiosError).response
            ? (error as any).response.data
            : (error as AxiosError).message
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;
