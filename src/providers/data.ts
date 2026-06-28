import {createDataProvider, CreateDataProviderOptions} from "@refinedev/rest";
import {BACKEND_BASE_URL} from "@/constants";
import {ListResponse} from "@/types";

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({resource}) => resource,

    buildQueryParams: async ({filters, pagination}) => {
      const query: Record<string, unknown> = {};

      if (pagination) {
        query.page = pagination.currentPage;
        query.limit = pagination.pageSize;
      }

      filters?.forEach((filter) => {
        if ("field" in filter) {
          if (filter.field === "name") {
            query.search = filter.value;
          }

          if (filter.field === "department") {
            query.department = filter.value;
          }
        }
      });

      return query;
    },

    mapResponse: async (response) => {
      const payload: ListResponse = await response.json();

      return payload.data ?? [];
    },

    getTotalCount :async(response) => {
      const payload: ListResponse = await response.json();

      return payload.pagination?.total ?? payload.data?.length ?? 0;
    }
  }
}

const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };
