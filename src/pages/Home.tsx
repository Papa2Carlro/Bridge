import React, { FC } from 'react';
import { HomeProps } from '../utils/interface';

import Button from '../components/UI/Button';

const Home: FC<HomeProps> = ({}): React.ReactElement => {
  return (
    <div>
      <Button label='Offline Game' link='/game' />
      <Button label='Create the room' />
      <Button label='Enter the room' />
    </div>
  );
};

export default Home;
