import React, { useEffect } from 'react';

export const ObsControlCore = () => {
  useEffect(() => {
    obsstudio.getScenes(scenes => {
      nodecg.sendMessage('obs:init-scenes', scenes)
        .catch(e => { console.error(e); });
    });
  }, [obsstudio]);

  useEffect(() => {
    const changeScene = (name: string) => {
      obsstudio.setCurrentScene(name);
    };
    nodecg.listenFor('obs:transition', changeScene);

    return () => {
      nodecg.unlisten('obs:transition', changeScene);
    };
  }, [nodecg]);

  return <div>
  </div>;
};
