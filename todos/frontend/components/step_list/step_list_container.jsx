import React from 'react'
import {connect} from 'react-redux'
import { stepsByTodoId } from '../../reducers/selectors'
import StepList from "./step_list"

const mapStateToProps = ( state ) => ({ //redux sends data to react. 
    steps: stepsByTodoId(state, state) // can call .map now since its an array
    // sends slice of state to react component
})

const mapDispatchToProps = (dispatch) => ({//react communicates to redux
    //this allows react compnents to communicate with store and change state, or req info of state
    receiveStep: step => dispatch(receiveStep(step)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);