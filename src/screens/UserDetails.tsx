import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={{ width: 220, height: 220 }}
          source={{
            uri: userData?.user.avatar,
          }}
        />
        <Text style={styles.text}>
          {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
        </Text>
        <Text style={styles.text}>{userData?.user.email ?? ""}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Leave</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B",
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#fff"
  },
  button: {
    width: "20%",
    height: 50,
    backgroundColor: "#3D737F",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    borderRadius: 10,
    top: 40
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
});

export default UserDetails;