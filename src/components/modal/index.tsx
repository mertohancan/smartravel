import { Modal, Image, Box } from 'native-base';
import React from 'react';
import { View } from 'react-native';

import Robot from '../../assets/img/icone-robot-violet.png';
import { Seperator } from '../commons';
import { C1 } from '../typography';

interface Props {
  visible: boolean;
  onClose(): void;
  title?: string;
  description?: string;
}

const MyModal = ({ visible, onClose, title, description }: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isOpen={visible}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          {title ? <Modal.Header>{title}</Modal.Header> : null}
          {description ? (
            <Modal.Body>
              <Box alignItems="center">
                <Seperator mt={20} />
                <Image alt="robot" source={Robot} width={100} height={100} />
                <Seperator mb={20} />
              </Box>
              <C1>{description}</C1>
            </Modal.Body>
          ) : null}
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default MyModal;
