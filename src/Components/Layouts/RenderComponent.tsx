import React from 'react'

interface WrapperComponentProps {
  children: React.ReactElement;
}

export const RenderComponent = ({ children }: WrapperComponentProps) => {
  return <div>{children}</div>;
};
