import {
  CreateNodecgInstance,
  CreateNodecgConstructor,
} from 'ts-nodecg/browser';
import { ReplicantMap } from '../nodecg/replicants';
import { MessageMap } from '../nodecg/messages';

type BundleNodecgInstance = CreateNodecgInstance<
'rta-training-camp',
Configschema,
ReplicantMap,
MessageMap
>;

type BundleNodecgConstructor = CreateNodecgConstructor<
'rta-training-camp',
Configschema,
ReplicantMap,
MessageMap
>;

declare global {
  const nodecg: BundleNodecgInstance;

  const NodeCG: BundleNodecgConstructor;
}
