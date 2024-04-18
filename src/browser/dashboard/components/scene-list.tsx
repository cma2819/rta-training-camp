import { Container, List, ListItem, ListItemText, ListItemIcon, TextField, Tooltip, IconButton } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ReplicantContext } from '../../ReplicantProvider';
import InfoIcon from '@mui/icons-material/Info';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Scene } from '../../../nodecg/replicants';

const SceneListRow = ({ scene }: { scene: Scene }) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [editingLabel, setEditingLabel] = useState<string>(scene.label);

  const confirmLabel = () => {
    scene.label = editingLabel;
  };

  const transitionTo = () => {
    nodecg.sendMessage('obs:transition', scene.name)
      .catch((e) => { console.error(e); });
  };

  return (
    <ListItem key={scene.name}
      secondaryAction={(
        <Tooltip title='OBS上でスイッチ' placement='right'>
          <IconButton color='primary' onClick={transitionTo}>
            <SwitchVideoIcon />
          </IconButton>
        </Tooltip>
      )}
    >
      <ListItemIcon>
        <Tooltip title={scene.name} placement='left'>
          <InfoIcon />
        </Tooltip>
      </ListItemIcon>
      <ListItemText
        primary={(isEditing
          ? (
            <TextField
              value={editingLabel}
              onChange={(e) => {
                setEditingLabel(e.currentTarget.value);
              }}
              fullWidth
            />)
          : (
            <>
              { scene.label }
            </>)
        )}
      />
      <ListItemIcon>
        {
          !isEditing && (
            <Tooltip title='名前を変更' placement='left'>
              <IconButton color='primary' onClick={() => {
                setEditing(true);
              }}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          )
        }
        {
          isEditing && (
            <Tooltip title='決定' placement='left'>
              <IconButton color='primary' onClick={() => {
                confirmLabel();
                setEditing(false);
              }}>
                <CheckIcon />
              </IconButton>
            </Tooltip>
          )
        }
      </ListItemIcon>
    </ListItem>
  );
};

export const SceneList = () => {
  const { scenes } = useContext(ReplicantContext);

  return (
    <Container>
      <List>
        {
          scenes?.map((scene) => (
            <SceneListRow key={scene.name} scene={scene} />
          ))
        }
      </List>
    </Container>
  );
};
