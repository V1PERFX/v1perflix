import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  text-decoration: none;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 7px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: all .3s;
  &:hover,
  &:focus {
		transform: scale(0.98);
		outline: none;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  .tituloVideo {
		background: rgba(0, 0, 0, .8);
		width: 100%;
		height: 80px;
		color: var(--white);
		display: flex;
		align-items: center;
		padding: 8px;
		transform: translateY(60px);
		transition: transform linear 200ms;
		opacity: 0;
	}

	&:hover .tituloVideo,
	&:focus .tituloVideo {
		transform: translateY(0);
		opacity: 1;
	}
`;
