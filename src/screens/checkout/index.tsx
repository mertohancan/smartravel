import { Badge, Button, FlatList, FormControl, Image, Row } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Seperator } from '../../components/commons';
import Input from '../../components/input';
import Layout from '../../components/layout';
import { H2, P2 } from '../../components/typography';
import { COLORS } from '../../constants/colors';
import { PAYMENT_METHODS } from '../../mock-data/payment';

export interface PaymentMethods {
  id: number;
  name: string;
  icon: any;
}

const renderPaymentMethod = ({ name, icon, id }: PaymentMethods) => {
  return (
    <View key={id} style={styles.listItem}>
      <Badge
        background="white"
        borderColor="#EBEBEB"
        borderWidth={0.5}
        borderRadius="5px"
        padding="16px"
        alignSelf="center"
        color="black"
        variant="solid">
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 85,
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            alt="payment"
            width={id === 0 ? '24px' : '70px'}
            height="12px"
            resizeMode={id === 0 ? 'cover' : 'contain'}
            source={icon}
          />
          {id === 0 ? <P2 style={{ width: 50 }}>{name}</P2> : null}
        </View>
      </Badge>
    </View>
  );
};

const Checkout = () => {
  return (
    <Layout title="Checkout" goBack={() => null}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <H2>Select a payment method</H2>
          <Seperator mb={20} />
          <FlatList
            data={PAYMENT_METHODS}
            renderItem={(props) => renderPaymentMethod(props.item)}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <View style={styles.payment}>
          <View style={styles.formElements}>
            <FormControl isInvalid={false}>
              <FormControl.Label>Card Holder Name</FormControl.Label>
              <Input value="Steven Gerrard" />
              {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage> */}
            </FormControl>
            <Seperator mt={10} />
            <FormControl isInvalid={false}>
              <FormControl.Label>Card Number</FormControl.Label>
              <Input value="123 456 789 012 345" />
            </FormControl>
            <Seperator mt={10} />
            <Row>
              <FormControl marginRight={5} maxWidth="1/3" isInvalid={false}>
                <FormControl.Label>Expire Date</FormControl.Label>
                <Input value="10/25" />
              </FormControl>

              <FormControl width="100%" maxWidth={165} isInvalid={false}>
                <FormControl.Label>CVV</FormControl.Label>
                <Input value="123" />
              </FormControl>
            </Row>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button height="56px" borderRadius="15px" background={COLORS.secondary}>
            Proceed
          </Button>
        </View>
      </View>
    </Layout>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  wrapper: {
    width: '100%',
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 12,
  },
  payment: {
    flex: 1,
    marginTop: 24,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  listItem: {
    marginRight: 12,
  },
  formElements: {
    backgroundColor: COLORS.white,
    padding: 24,
    borderRadius: 10,
  },
  buttonWrapper: {
    padding: 24,
    backgroundColor: COLORS.primary,
  },
});
