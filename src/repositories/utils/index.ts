import { FindOptions } from "sequelize/types";

export const paginate = <T>(query: FindOptions<T>, page: number, perPage: number): (
    FindOptions<T>
) => {
    return {
        ...query,
        limit: perPage,
        offset: page * perPage
    }
}