import React from "react";
import { storiesOf } from "@storybook/react";

import DjLogo from "./index";

storiesOf("atoms/logo", module).add("DjLogo", () => (
  <>
    <DjLogo size='25' /> <DjLogo size='50' /> <DjLogo size='100' />{" "}
    <DjLogo size='200' />{" "}
  </>
));
