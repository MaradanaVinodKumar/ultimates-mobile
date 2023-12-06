import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import FlipCard from "react-native-flip-card";
import support from "../assets/support.png";
import vision from "../assets/eye.png";
import mission from "../assets/target.png";
import value from "../assets/diamond.png";

export default function Cards1() {
  return (
    <SafeAreaView>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.view}>
          <Image source={vision} style={styles.image} />
          <Text style={{ fontSize: 20, color: "white", fontWeight: "900" }}>
            OUR VISION
          </Text>
        </View>
        <View style={styles.view_black}>
          <Text style={styles.backText}>
            Our vision is simple. We strive to over-deliver in every area that
            we serve the Central Ohio market. This includes how we deal with
            homeowners and the quality we deliver both in materials and
            workmanship.
          </Text>
        </View>
      </FlipCard>

      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.view_white}>
          <Image source={mission} style={styles.image} />
          <Text style={{ fontSize: 20, color: "black", fontWeight: "900" }}>
            OUR MISSION
          </Text>
        </View>
        <View style={styles.view_mission_black}>
          <Text style={styles.backText}>
            Provide our service in such a way to respect the homeowner the same
            way as you would a close family member.
          </Text>
        </View>
      </FlipCard>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.view}>
          <Image source={value} style={styles.image} />
          <Text style={{ fontSize: 20, color: "white", fontWeight: "900" }}>
            OUR VALUE
          </Text>
        </View>
        <View style={styles.view_black}>
          <Text style={styles.backText}>
            Value is not merely defined by price. Value is the combination of
            competitive pricing coupled with superior quality and that’s the
            value you can expect.
          </Text>
        </View>
      </FlipCard>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "red",
  },
  view_white: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "white",
  },
  view_mission_black: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 3,
  },
  view_black: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 3,
  },
  image: {
    width: 50, // set the width of the image as needed
    height: 50, // set the height of the image as needed
    resizeMode: "cover", // or 'contain' based on your preference
    marginRight: 10, // add margin for spacing between image and text
  },
  backText: {
    color: "white",
    fontSize: 15,
    width: "80%",
    textAlign: "center",
  },
  backText_black: {
    color: "black",
    fontSize: 15,
    width: "80%",
    textAlign: "center",
  },
});
