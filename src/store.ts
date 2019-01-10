import { AnyAction } from 'redux'

export type AppState = {
    gameState: 'In Lobby'
}

const intialStore: AppState = {
    gameState: 'In Lobby'
}

export const reducer = (store = intialStore, action: AnyAction) => store 