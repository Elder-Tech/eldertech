import React, {Component} from 'react';
import TextEditorComponent from "./TextEditorComponent";
import HeaderComponent from "./HeaderComponent";

class NewArticleComponent extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <div className="submit-article-form">
                <form>
                    <input className="standard-input" name="title" type="text" placeholder="Enter title here" />
                    <TextEditorComponent/>
                    <br/>
                    <input className="standard-button" type="submit" value="Submit article for review" />
                </form>
                </div>
            </div>
        );
    }
}

export default NewArticleComponent;