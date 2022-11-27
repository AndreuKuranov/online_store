import { $authHost, $host } from "./index";

// ----------------------- Type -----------------------
export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
}

export const getTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
}

export const putTypes = async (id, item) => {
  const { data } = await $authHost.put(`api/type/${id}`, {
    name: item
  });
  return data;
}

export const deleteTypes = async (id) => {
  const { data } = await $authHost.delete(`api/type/${id}`);
  return data;
}

// ----------------------- ---- -----------------------
// ----------------------- Brand -----------------------

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
}

export const getBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
}

export const putBrands = async (id, item) => {
  const { data } = await $authHost.put(`api/brand/${id}`, {
    name: item
  });
  return data;
}

export const deleteBrands = async (id) => {
  const { data } = await $authHost.delete(`api/brand/${id}`);
  return data;
}

// ----------------------- ---- -----------------------
// ----------------------- Device -----------------------

export const createDevice = async (device) => {
  const { data } = await $authHost.post('api/device', device);
  return data;
}

export const getDevices = async (typeId, brandId, page, limit = 4) => {
  const { data } = await $host.get('api/device', { params: { typeId, brandId, page, limit }});
  return data;
}

export const getOneDevice = async (id) => {
  const { data } = await $host.get(`api/device/${id}`);
  console.log(data);
  return data;
}

export const putDevices  = async (id, name, price, img, brandId, typeId, info) => {
  const { data } = await $authHost.put(`api/device/${id}`, {
    name: name,
    price: price,
    img: img,
    brandId: brandId,
    typeId: typeId,
    info: info
  });
  return data;
}

export const deleteDevices = async (id) => {
  const { data } = await $authHost.delete(`api/device/${id}`);
  return data;
}
// ----------------------- ---- -----------------------