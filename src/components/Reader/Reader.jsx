import React, { Component } from 'react';
import propTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    id: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
  };
  state = {
    indexItem: 0,
    startPosition: this.props.items[0],
    currentPosition: this.props.items[0],
    numOfPublications: this.props.items.length - 1,
    disabledButtonNext: false,
    disabledButtonPrev: true,
  };
  test = () => {
    console.log(this.props.items);
    console.log(this.state.currentPosition);
  };

  handleNextPublication = () => {
    this.setState({ disabledButtonPrev: false });
    if (this.state.indexItem + 1 >= this.state.numOfPublications) {
      this.setState({ disabledButtonNext: true });
    }

    this.setState(state => ({
      indexItem: state.indexItem + 1,
      currentPosition: this.props.items[this.state.indexItem],
    }));
  };
  handlePrevPublication = () => {
    this.setState({ disabledButtonNext: false });
    if (this.state.indexItem - 1 === 0) {
      this.setState({ disabledButtonPrev: true });
    }
    this.setState(state => ({
      indexItem: state.indexItem - 1,
      currentPosition: this.props.items[this.state.indexItem],
    }));
  };
  handleStateOfButton = () => {
    if (this.state.indexItem === 0) {
      this.setState({ disabledButtonPrev: true });
    } else {
      this.setState({ disabledButtonPrev: false });
    }
  };

  render() {
    return (
      <div className="reader">
        <Controls
          onNextPublication={this.handleNextPublication}
          onPrevPublication={this.handlePrevPublication}
          stateBtnNext={this.state.disabledButtonNext}
          stateBtnPrev={this.state.disabledButtonPrev}
        />
        <Counter
          currentIndex={this.state.indexItem}
          lengthOfPublications={this.state.numOfPublications}
        />

        <Publication
          publicationTitle={this.props.items[this.state.indexItem].title}
          publicationText={this.props.items[this.state.indexItem].text}
        />
      </div>
    );
  }
}
