import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import PaginatorButton from './_PaginatorButton';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page, Selects 1st page when no value is provided.
   */
  selectedPage: PropTypes.number,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

const InfiniteProgressivePaginator = (props) => {
    const { selectedPage, onPageChange, intl } = props;

    const [selectedPageIndex, setSelectedPageIndex] = useState((selectedPage) ? selectedPage : 1); //defaults to 1st page
    const [showReducedPaginator, setShowReducedPaginator] = useState(false);

  const setPaginator = (event) => {
    const isTinyViewport = event === 'tiny';
    if (showReducedPaginator !== isTinyViewport) {
      setShowReducedPaginator(isTinyViewport);
    }
  }

  const handlePageChange = (index) => {
    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();
      }

      onPageChange(index);
      setSelectedPageIndex(index);
    };
  }

  const defaultProgressivePaginator = () => {
    const theme = React.useContext(ThemeContext);
    const selectedPage = selectedPageIndex;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage + 1;

    return (
      <div className={cx('paginator', 'progressive', theme.className)} role="navigation" aria-label="pagination">
        <div>
          {intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}
        </div>
        <div>
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
            className={cx(['nav-link', 'previous', selectedPage === 1 ? 'is-disabled' : null])}
            disabled={selectedPage === 1}
            onClick={handlePageChange(previousPageIndex)}
            onKeyDown={handlePageChange(previousPageIndex)}
          >
            <span className={cx('icon')} />
            {intl.formatMessage({ id: 'Terra.paginator.previous' })}
          </PaginatorButton>
          <PaginatorButton
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
            className={cx(['nav-link', 'next'])}
            onClick={handlePageChange(nextPageIndex)}
            onKeyDown={handlePageChange(nextPageIndex)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.next' })}
            <span className={cx('icon')} />
          </PaginatorButton>
        </div>
      </div>
    );
  }

  const reducedProgressivePaginator = () => {
    const theme = React.useContext(ThemeContext);
    const selectedPage = selectedPageIndex;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage + 1;

    return (
      <div className={cx('paginator', theme.className)} role="navigation" aria-label="pagination">
        <div>
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
            className={cx(['nav-link', 'previous', 'icon-only', selectedPage === 1 ? 'is-disabled' : null])}
            disabled={selectedPage === 1}
            onClick={handlePageChange(previousPageIndex)}
            onKeyDown={handlePageChange(previousPageIndex)}
          >
            <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />
            <span className={cx('icon')} />
          </PaginatorButton>
        </div>
        <div>
          {intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}
        </div>
        <div>
          <PaginatorButton
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
            className={cx(['nav-link', 'next', 'icon-only'])}
            onClick={handlePageChange(nextPageIndex)}
            onKeyDown={handlePageChange(nextPageIndex)}
          >
            <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />
            <span className={cx('icon')} />
          </PaginatorButton>
        </div>
      </div>
    );
  }

    return (
      <ResponsiveElement
        onChange={setPaginator}
      >
        { showReducedPaginator ? reducedProgressivePaginator() : defaultProgressivePaginator()}
      </ResponsiveElement>
    );
}

InfiniteProgressivePaginator.propTypes = propTypes;

export default injectIntl(InfiniteProgressivePaginator);
