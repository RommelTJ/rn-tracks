import React from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = (props) => {
  const { title, navigation, routeName } = props;

  return (
    <>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
          <Text style={styles.link}>{title}</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
  link: { color: 'blue' }
});

export default withNavigation(NavLink);
