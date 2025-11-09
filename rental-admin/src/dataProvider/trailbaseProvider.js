// src/dataProvider/trailbaseProvider.js
import { fetchUtils } from "react-admin";

const apiUrl = "YOUR_CODESPACE_URL/api/records/v1"; // CHANGE THIS

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  options.headers.set(
    "Authorization",
    "Bearer YOUR_TRAILBASE_BEARER"
  );

  return fetchUtils.fetchJson(url, options);
};

const buildFilterQuery = (filter) => {
  const params = new URLSearchParams();

  for (const key in filter) {
    const value = filter[key];
    if (value === undefined || value === null || value === "") continue;

    if (key === "q") {
      params.append("filter[name][$like]", `%${value}%`);
      continue;
    }

    if (key.endsWith("_gte")) {
      params.append(`filter[${key.replace("_gte","")}][$gte]`, value);
      continue;
    }

    if (key.endsWith("_lte")) {
      params.append(`filter[${key.replace("_lte","")}][$lte]`, value);
      continue;
    }

    params.append(`filter[${key}][$eq]`, value);
  }

  return params.toString();
};

const buildListQuery = (params) => {
  const { pagination, sort, filter } = params;
  const query = new URLSearchParams();

  if (pagination) {
    const { page, perPage } = pagination;
    query.append("limit", perPage);
    query.append("offset", (page - 1) * perPage);
  }

  if (sort) {
    const { field, order } = sort;
    query.append("order", `${order === "DESC" ? "-" : ""}${field}`);
  }

  if (filter) {
    const filterQuery = new URLSearchParams(buildFilterQuery(filter));
    filterQuery.forEach((v, k) => query.append(k, v));
  }

  query.append("count", "true");
  return query.toString();
};

const dataProvider = {
  getList: async (resource, params) => {
    const q = buildListQuery(params);
    const { json } = await httpClient(`${apiUrl}/${resource}?${q}`);

    return {
      data: (json.records || []).map((x) => ({ ...x, id: x.id })),
      total: json.total_count ?? json.records?.length ?? 0,
    };
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    return { data: { ...json, id: json.id } };
  },

  getMany: async (resource, params) => {
    const records = await Promise.all(
      params.ids.map((id) => dataProvider.getOne(resource, { id }))
    );
    return { data: records.map((r) => r.data) };
  },

  getManyReference: async (resource, params) => {
    const filter = { ...params.filter, [params.target]: params.id };
    const q = buildListQuery({ ...params, filter });

    const { json } = await httpClient(`${apiUrl}/${resource}?${q}`);

    return {
      data: (json.records || []).map((x) => ({ ...x, id: x.id })),
      total: json.total_count ?? json.records?.length ?? 0,
    };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });

    const id = json.ids?.[0] ?? json.id;
    const { json: record } = await httpClient(`${apiUrl}/${resource}/${id}`);

    return { data: { ...record, id } };
  },

  update: async (resource, params) => {
    const payload = { ...params.data };

    delete payload.id;
    delete payload.created_at;
    delete payload.updated_at;

    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });

    return { data: params.data };
  },

  delete: async (resource, params) => {
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });

    return { data: { id: params.id } };
  },
};

export default dataProvider;
