import React from 'react';
import { StyledLoader } from './styles';

interface IProps {
  size?: string;
}

const Loader: React.FC<IProps> = (props: IProps) => {
  const { size } = props;
  return <StyledLoader animating={true} size={size || 'small'} />;
};

export default Loader;
