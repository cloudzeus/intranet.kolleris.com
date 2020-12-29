import { getProducts, updateProduct } from '../../api/products';

export const dataProvider = {
    getList: async (resource, params) => {
        const { pagination, filter } = params;
        const response = await getProducts(
            pagination.page,
            pagination.perPage,
            filter.q
        );
        return response.data;
    },
    getOne: (resource, params) => Promise.resolve({ data: { id: 1 } }),
    getMany: (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create: (resource, params) => Promise,
    update: async (resource, params) => {
        // const response = await updateProduct(params.data);

        // console.log(response);
        // return response.data;
        return Promise.resolve();
    },
    updateMany: (resource, params) => Promise,
    delete: (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,
};
