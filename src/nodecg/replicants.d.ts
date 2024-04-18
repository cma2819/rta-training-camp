import { Assets } from './asset';
import { Scenes } from './generated';

type Commentator = CommentatorArray[number];

type ReplicantMap = {
  scenes: Scenes;
};

type Scene = Scenes[number];

export type {
  Assets,
  Scene,
  Scenes,
  ReplicantMap,
};
