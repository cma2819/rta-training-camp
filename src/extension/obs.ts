import { clone } from 'lodash';
import { NodeCG } from './nodecg';

export default (nodecg: NodeCG): void => {
  const logger = new nodecg.Logger('obs');
  const scenesReplicant = nodecg.Replicant('scenes', {
    defaultValue: [],
  });

  nodecg.listenFor('obs:init-scenes', (scenes) => {
    logger.info(`Scenes initialized with ${JSON.stringify(scenes)}`);
    scenesReplicant.value = scenes.filter(
      (name) => name.startsWith('sw:'),
    ).map((name) => {
      const exists = clone(scenesReplicant.value.find(
        scene => scene.name === name,
      ));

      return exists ?? { name, label: name };
    });
  });
};
