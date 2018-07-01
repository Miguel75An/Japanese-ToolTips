import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Twitter Bootstrap 
import './Language.css'

class Language extends Component{
    // This class contains the header and are part
    // of the web page and calls instances of the
    // <ToolTip> and <Furi> tags
    render(){
        return(
            <div>
            {/* Header */}
            <div className="header">
		        <div className="holder">
			    <p className="logo">Reading Furigana</p>
			    <div className="row">
				<strong>by Migs</strong>
			    </div>
		        </div>
	        </div>
            
            {/* Area with big character and information */}
            <div className="area">
		    <div className="area-holder">
			<div className="visual">
				<div className="big-character">
                    <p style={{fontSize:"145px"}}>
                    <Furi kanji="漢" reading="かん" />
                    <Furi kanji="字" reading="じ" /></p>
				</div>
			</div>
			<div className="info-block">
                <p>In Japanese, reading the kanji is a challenge.
                   To help the student, kanji readings are placed 
                   on top of the character. This is called Furigana. 
                </p>

                {/* Sentence 1: What kind of dictionary you want? */}
                <p>どんな
                    <ToolTip text="辞書「じしょ」: dictionary">
                    <Furi kanji="辞" reading="じ" />
                    <Furi kanji="書" reading="しょ" />
                    </ToolTip> 
                    が
                    <ToolTip text="欲しい「ほしい」: wanted, need of, desire">
                    <Furi kanji="欲" reading="ほ" />しい
                    </ToolTip>んですか</p>

                {/* Sentence 2: I wonder if it will rain tomorrow */}
                <p><ToolTip text="明日「あした」: tomorrow">
                    <Furi kanji="明" reading="あ" />
                    <Furi kanji="日" reading="した" /></ToolTip>は
                    <ToolTip text="雨「あめ」: rain">
                    <Furi kanji="雨" reading="あめ" />
                    </ToolTip>かしら</p>
			</div>
            </div>
            </div>
            </div>
        );
    }
}

class ToolTip extends Component{
    constructor(props){
        super(props);

        this.state={opacity:false};

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        // Toggle to display or hide tool-tip
        const tooltipNode = ReactDOM.findDOMNode(this); //Gets access to HTML element
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        });
    }

    render(){
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity, //binary operator '+' converts from Boolean to binary
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        };

        return(
            <div style={{display: 'inline'}}>
            <span style={{color: '#A7E2E6'}}
                  onMouseEnter={this.toggle}
                  onMouseOut={this.toggle}>
            {/* Line below outputs any text passed as content of ToolTip */}
            {this.props.children} 
            </span>
            {/* Code for text */}
            <div className="tooltip bottom" style={style} role="tooltip">
                <div className="tooltip-arrow"></div>
                <div className="tooltip-inner">
                {this.props.text}
                </div>
            </div>
            </div>
        );
    } 
}

class Furi extends Component{
    //Applies <ruby> and <rt> tags to display
    // furigana readings on top of kanji characters
    render(){
        return(
            <ruby>{this.props.kanji}<rt>{this.props.reading}</rt></ruby>
        );
    }
}

export default Language;