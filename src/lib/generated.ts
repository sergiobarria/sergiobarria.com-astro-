// Generated by Xata Codegen 0.26.3. Please do not edit.
import { buildClient } from '@xata.io/client';
import type { BaseClientOptions, SchemaInference, XataRecord } from '@xata.io/client';

const tables = [
    {
        name: 'posts',
        columns: [
            { name: 'slug', type: 'string', unique: true },
            { name: 'views', type: 'int', notNull: true, defaultValue: '0' },
            { name: 'lang', type: 'string', notNull: true, defaultValue: 'en' }
        ]
    }
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes['posts'];
export type PostsRecord = Posts & XataRecord;

export type DatabaseSchema = {
    posts: PostsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
    databaseURL: 'https://Sergio-s-workspace-j88unm.us-east-1.xata.sh/db/sergiobarria_dev'
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
    constructor(options?: BaseClientOptions) {
        super({ ...defaultOptions, ...options }, tables);
    }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
    if (instance) return instance;

    instance = new XataClient();
    return instance;
};
