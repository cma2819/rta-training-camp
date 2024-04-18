import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Scenes } from '../nodecg/generated';

type Replicants = {
  scenes: Scenes;
};

export const ReplicantContext = createContext<Partial<Replicants>>({});

type Props = {
  children: ReactNode;
};

export const ReplicantProvider = ({ children }: Props) => {
  const [
    scenes, setScenes,
  ] = useState<Scenes>();

  useEffect(() => {
    nodecg.Replicant('scenes').on('change', (newVal) => {
      setScenes(clone(newVal));
    });
  }, []);

  return (
    <ReplicantContext.Provider value={{ scenes }}>
      { children }
    </ReplicantContext.Provider>
  );
};
