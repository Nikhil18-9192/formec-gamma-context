import React, { useReducer } from 'react'
import GlobaleContext from './createContext'
import initialState from './initalState'
import reducer from './reducer'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobaleContext.provider values={{ state, dispatch }}>
            {{ children }}
        </GlobaleContext.provider>

    )
}

export default Provider
