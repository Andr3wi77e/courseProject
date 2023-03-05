import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicReducerLoader = (
    reducersList: ReducersList,
    keepAfterUnmount: boolean = true
) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducersList).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        );

        return () => {
            Object.entries(reducersList).forEach(
                ([name]: ReducersListEntry) => {
                    if (!keepAfterUnmount) {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    }
                }
            );
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
