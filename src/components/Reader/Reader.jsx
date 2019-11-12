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
    lengthOfPublications: this.props.items.length,
  };

  handleTogglePublications = e => {
    e.currentTarget.name === 'next'
      ? this.setState(state => ({
          indexCurrentPage: state.indexCurrentPage + 1,
        }))
      : this.setState(state => ({
          indexCurrentPage: state.indexCurrentPage - 1,
        }));
  };

  render() {
    const { indexCurrentPage } = this.state;
    const { lengthOfPublications } = this.control;
    return (
      <div className="reader">
        <Controls
          onTogglePublication={this.handleTogglePublications}
          indexOfPage={indexCurrentPage}
          lengthOfPublications={lengthOfPublications}
        />
        <Counter
          currentIndex={indexCurrentPage}
          lengthOfPublications={lengthOfPublications}
        />

        <Publication
          publicationTitle={this.props.items[indexCurrentPage - 1].title}
          publicationText={this.props.items[indexCurrentPage - 1].text}
        />
      </div>
    );
  }
}
