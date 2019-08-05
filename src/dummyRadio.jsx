import React from 'react';

export class DummyRadio extends React.Component {
    constructor (pros) {
        super(pros);
        this.state = {
            selected: null,
        };
    }
    render() {
        return (
            <React.Fragment>
                    <div>
                        Hello, please choose an option:
                    </div>
                <div>
                Yes
                <input data-testid="yesRadio" type="radio" value="yes" checked={this.state.selected==="yes"} onChange={() => this.changeSelection("yes")}/>
                </div>
                <div>
                    No
                <input data-testid="noRadio" type="radio" value="no"
                        checked={this.state.selected==="no"}
                        onChange={() => this.changeSelection("no")} />
                </div>
            </React.Fragment>
        )
    }
    changeSelection(answer) {
        this.setState({selected:answer})
    }
}