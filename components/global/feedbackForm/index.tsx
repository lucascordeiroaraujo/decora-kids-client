import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import applicationState from '~/store/interfaces';

import FeedBackForm from './style';

const cpFeedBackForm: React.FC = () => {
  const { showModal, showLoader, loaderLabel } = useSelector(
    (state: applicationState) => ({
      showModal: state.global.feedbackForm.showModal,
      showLoader: state.global.feedbackForm.showLoader,
      loaderLabel: state.global.feedbackForm.loaderLabel
    })
  );

  const dispatch = useDispatch();

  const closeFeedBackUser = () => {
    dispatch({
      type: 'SET_FEEDBACK_FORM',
      payload: {
        showModal: false,
        showLoader: false,
        loaderLabel: ''
      }
    });
  };

  return (
    <FeedBackForm className={showModal ? 'active' : ''}>
      {showLoader ? <div /> : ''}
      <p dangerouslySetInnerHTML={{ __html: loaderLabel }} />
      <button onClick={() => closeFeedBackUser()} />
    </FeedBackForm>
  );
};

export default cpFeedBackForm;
