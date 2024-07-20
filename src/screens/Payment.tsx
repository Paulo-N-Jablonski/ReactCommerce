import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerData}>
          <Text style={styles.title}>
            Delivery Adress
          </Text>
          <View>
            <Text style={styles.text}>
              Adress
            </Text>
            <TextInput
              style={styles.inputBig}
              //onChangeText={onChangeNumber}
              //value={text}
              placeholder=""
              keyboardType="default"
            />
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>
                City
              </Text>
              <TextInput
                style={styles.inputMedium}
                //onChangeText={onChangeNumber}
                //value={text}
                placeholder=""
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.text}>
                State
              </Text>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder=""
                keyboardType="default"
              />
            </View>
          </View>
          <Text style={styles.title}>
            Payment Data
          </Text>
          <View>
            <Text style={styles.text}>
              Card Number
            </Text>
            <TextInput
              style={styles.inputBig}
              //onChangeText={onChangeNumber}
              //value={number}
              placeholder=""
              keyboardType="default"
            />
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>
                Expiration Date
              </Text>
              <TextInput
                style={styles.inputMedium}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder=""
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.text}>
                CVV
              </Text>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder=""
                keyboardType="default"
              />
            </View>
          </View>
          <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("OrderStatus")}
              >
                <Text style={styles.text}>
                  Finish Order
                </Text>
              </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B",
    padding: 10,
  },
  containerData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2d31",
    borderWidth: 1,
    borderRadius: 5,
    margin: 6,
    width: 800,
    height: 450
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    height: 32,
    width: 100,
    margin: 6,
    borderWidth: 1,
    padding: 6,
    borderRadius: 2,
    backgroundColor: "#ffffff"
  },
  inputMedium: {
    height: 32,
    width: 270,
    margin: 6,
    borderWidth: 1,
    padding: 6,
    borderRadius: 2,
    backgroundColor: "#ffffff"
  },
  inputBig: {
    height: 32,
    width: 380,
    margin: 6,
    borderWidth: 1,
    padding: 6,
    borderRadius: 2,
    backgroundColor: "#ffffff"
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    height: 40,
    width: 120,
    borderRadius: 5,
    backgroundColor: '#07161B',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "semibold",
  },
});