import axios from "axios";
import { useQuery } from "react-query";

export const QUERY_KEY_POST = {
  LIST: "LIST_POST",
};

const getListPost = () =>
  axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
export const useQueryListPost = () =>
  useQuery({
    queryFn: getListPost,
    queryKey: [QUERY_KEY_POST.LIST],
  });
