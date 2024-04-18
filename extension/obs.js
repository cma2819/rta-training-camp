"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.default = (nodecg) => {
    const logger = new nodecg.Logger('obs');
    const scenesReplicant = nodecg.Replicant('scenes', {
        defaultValue: [],
    });
    nodecg.listenFor('obs:init-scenes', (scenes) => {
        logger.info(`Scenes initialized with ${JSON.stringify(scenes)}`);
        scenesReplicant.value = scenes.filter((name) => name.startsWith('sw:')).map((name) => {
            const exists = (0, lodash_1.clone)(scenesReplicant.value.find(scene => scene.name === name));
            return exists ?? { name, label: name };
        });
    });
};
