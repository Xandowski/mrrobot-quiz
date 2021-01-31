import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';
import Lottie from 'react-lottie'
import homeAnimationData from '../../../homeIcon.json'

const StyledLink = styled(Link)`
  transition: .3s;
  &:hover {
    opacity: .5;
  }
`;

const BackLinkArrow = ({ href }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5,
  }
  return (
    <StyledLink href={href} style={{ width: '24px', height: '24px', display: 'inline-block' }}>
      <Lottie
        options={defaultOptions}
        height={20}
        width={20}
      />
    </StyledLink>
  );
}

export default BackLinkArrow

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};