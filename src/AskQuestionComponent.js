import React, {Component} from 'react';
import TextEditorComponent from "./TextEditorComponent";
import HeaderComponent from "./HeaderComponent";

class AskQuestionComponent extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <div className="submit-article-form">
                    <form onSubmit={()=>{alert("question submitted!")}}>
                        <input className="standard-input" name="title" type="text" placeholder="Enter title here" />
                        <TextEditorComponent/>
                        <br/>
                        <input className="standard-button" type="submit" value="Submit Question" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AskQuestionComponent;