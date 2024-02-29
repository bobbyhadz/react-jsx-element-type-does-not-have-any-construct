import React from 'react';

interface Props {
  comp: React.ElementType; // 👈️ type it as React.ElementType
}

const Wrapper: React.FunctionComponent<Props> = props => {
  // 👇️ component names must start with a capital letter
  const {comp: Comp} = props;
  return (
    <div>
      <Comp name="Bobby" />
    </div>
  );
};

const App: React.FunctionComponent = () => {
  // 👇️ takes a name prop
  const heading = ({name}: {name: string}) => (
    <h2>Hello {name}</h2>
  );

  return (
    <div>
      <Wrapper comp={heading} />
    </div>
  );
};

export default App;
