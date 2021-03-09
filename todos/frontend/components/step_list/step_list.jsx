import stepListContainer from "./step_list_container";
import React from "react";

class StepList extends React.Component {
    constuctor(props){
        super(props);
    }

    render () {
        return (
            <ul>
                <li>{step}</li>
            </ul>
        )
    }
}

