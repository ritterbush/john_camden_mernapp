import React from "react";
import { storiesOf } from "@storybook/react";

import DjLogoName from "./index";

storiesOf("molecules/logo", module).add("DjLogoName", () => (
  <>
    <DjLogoName size='25' text='Djinndex' />
    <DjLogoName size='50' text='Djinndex' />
    <DjLogoName size='100' text='Djinndex' />
    <DjLogoName size='200' text='Djinndex' />
  </>
));
