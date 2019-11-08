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
    indexCurrentPage: 1,
  };

  control = {
    numOfPublications: this.props.items.length,
    disabledButtonNext: false,
    disabledButtonPrev: true,
  };

  handleNextPublication = () => {
    this.control.disabledButtonPrev = false;
    if (this.state.indexCurrentPage === this.control.numOfPublications - 1) {
      this.control.disabledButtonNext = true;
      console.log(this.state.indexCurrentPage);
    }
    this.setState(state => ({
      indexCurrentPage: state.indexCurrentPage + 1,
    }));
  };

  handlePrevPublication = () => {
    this.control.disabledButtonNext = false;
    if (this.state.indexCurrentPage - 1 === 0) {
      this.control.disabledButtonPrev = true;
    }
    this.setState(state => ({
      indexCurrentPage: state.indexCurrentPage - 1,
    }));
  };

  render() {
    const { indexCurrentPage } = this.state;
    const {
      disabledButtonPrev,
      disabledButtonNext,
      numOfPublications,
    } = this.control;
    return (
      <div className="reader">
        <Controls
          onNextPublication={this.handleNextPublication}
          onPrevPublication={this.handlePrevPublication}
          stateBtnPrev={disabledButtonPrev}
          stateBtnNext={disabledButtonNext}
        />
        <Counter
          currentIndex={indexCurrentPage}
          lengthOfPublications={numOfPublications}
        />

        <Publication
          publicationTitle={this.props.items[indexCurrentPage - 1].title}
          publicationText={this.props.items[indexCurrentPage - 1].text}
        />
      </div>
    );
  }
}
