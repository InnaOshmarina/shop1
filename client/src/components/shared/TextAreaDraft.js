import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState} from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import classnames from "classnames";

class TextAreaDraft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = editorState => this.setState({editorState});
    }
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }

}

export default TextAreaDraft;