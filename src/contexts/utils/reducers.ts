import React from "react";

type Reducer<S> = (state: S, ...args: any) => S;
type Dispatch = (...args: any) => void;

export function GetDispatches<S>(state: S, setState: React.Dispatch<React.SetStateAction<S>>, reducers: Record<string, Reducer<S>>): Record<string, Dispatch> {
    return Object.fromEntries(Object.entries(reducers).map(([key, reducer]) =>
        [key, (args: any) =>
            setState({
                ...state,
                ...reducer(state, args)
            })
        ]
    ));
}
