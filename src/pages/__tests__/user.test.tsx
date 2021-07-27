import React, { Component } from "react";
import {shallow, mount, configure} from "enzyme";

import User from "../User";
import App from "../../App";



describe("rendering  components", () => {
    it("renders App without crashing", () => {
        shallow(<App />)
    });
    it("renders User component div class without crashing", () => {
      const wrapper = shallow(<User />);
      const header = (<div className="search-box" />);
      expect(wrapper.contains(header)).toBe(true);
    });
 })
