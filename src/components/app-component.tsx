import * as React from 'react'
import { connect } from 'react-redux';
import { AppState } from '../store';

type Props = {
    gameState: string
}

const render = (props: Props) => <div>{props.gameState}</div>

const connectToStore = connect((store: AppState) => ({gameState: store.gameState}))
export default connectToStore(render)