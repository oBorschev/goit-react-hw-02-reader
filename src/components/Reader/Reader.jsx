import React, { Component } from 'react';
import propTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    id: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
  };
  state = {
    indexCurrentPage: 1,
  };

  handleTogglePublications = ({ currentTarget: { name } }) => {
    this.setState(state => ({
      indexCurrentPage:
        name === 'next'
          ? state.indexCurrentPage + 1
          : state.indexCurrentPage - 1,
    }));
  };

  render() {
    const { indexCurrentPage } = this.state;
    const lengthOfPublications = this.props.items.length;
    const articleIndex = this.props.items[indexCurrentPage - 1];

    return (
      <div className={styles.reader}>
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
          publicationTitle={articleIndex.title}
          publicationText={articleIndex.text}
        />
      </div>
    );
  }
}
