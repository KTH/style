import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tab, ContentTabs } from "../components/Tabs";

import "../../scss/globals.scss";
import "../../scss/components/content-tabs.scss";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "KTH Style/Content Tabs",
  component: ContentTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof ContentTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const ComplexPanel = (
  <main style={{ padding: "2rem" }}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus id
      nulla blandit commodo. Donec congue sapien auctor ipsum blandit, posuere
      bibendum mauris tincidunt. Quisque ligula turpis, faucibus id est at,
      euismod accumsan nibh. Fusce eu ullamcorper libero, et egestas odio.
      Vivamus porttitor dolor ac tellus semper, nec faucibus tortor feugiat.
      Morbi ultricies dolor eros, eu molestie libero vulputate non. Sed nec
      hendrerit est. Morbi varius, dolor non tincidunt hendrerit, dui nulla
      pulvinar orci, vitae imperdiet eros nisl at dui. Maecenas volutpat ante
      eget rutrum dignissim. Suspendisse et scelerisque orci. Donec maximus orci
      quis risus varius mollis.
    </p>
    <p>
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus
      aliquet dui quis nisl rutrum, id maximus quam commodo. Donec sed efficitur
      lorem. Aenean luctus tristique egestas. Proin mollis leo vitae nibh
      facilisis, nec fermentum urna ultricies. Nullam ac velit non eros ultrices
      lacinia. Maecenas varius euismod orci quis efficitur. Aenean euismod
      porttitor sem, in pharetra lacus volutpat semper. Donec vel sapien tortor.
      Vivamus ut ex in nunc porta egestas placerat et nulla. Vivamus erat eros,
      iaculis ut semper eget, convallis quis neque. Nunc eu finibus nisl, eget
      tincidunt dolor. Donec dapibus tristique est, vitae posuere nulla rutrum
      ut.
    </p>
    <p>
      Quisque suscipit tincidunt elit. Morbi lobortis ligula ut nulla venenatis,
      vel malesuada purus lacinia. Duis massa nulla, accumsan nec suscipit eu,
      mollis in sem. Integer et ante et nulla varius consectetur. Nam odio
      ligula, lobortis ut commodo sed, dapibus sed neque. Sed porta massa vitae
      leo auctor lobortis. Ut vel sem laoreet, fermentum metus a, eleifend
      sapien. Nulla laoreet ac libero id tincidunt. Vivamus ullamcorper, nibh
      non pharetra ultrices, enim urna convallis orci, pulvinar congue mauris
      ligula blandit augue. Ut eu blandit risus. Morbi condimentum, velit non
      consectetur vulputate, lectus mi molestie massa, sit amet mattis est
      lectus vel eros. Proin dictum est in leo pulvinar, varius porttitor ipsum
      viverra.
    </p>
    <p>
      Aenean vitae posuere orci. Vestibulum pellentesque arcu mauris, quis
      faucibus justo dapibus quis. Curabitur accumsan nunc ut faucibus
      pellentesque. Cras rhoncus elit eu felis ultricies semper. Nam porta nulla
      ut velit consequat venenatis. Nulla facilisi. Integer vitae urna ut mauris
      auctor consequat in porta enim. Vivamus orci sem, vestibulum auctor varius
      vitae, pulvinar nec dolor. Pellentesque vel ligula nisi. Quisque consequat
      tincidunt dui. Suspendisse vitae purus ac ante consequat vehicula. Donec
      nec dignissim mi.
    </p>
    <p>
      Praesent magna quam, pharetra non purus luctus, eleifend ultrices augue.
      Sed in malesuada sem. Aenean quis massa arcu. Mauris vitae ligula ut felis
      rutrum commodo vel mollis mi. Aliquam nec sem quam. Ut sem elit, efficitur
      quis dui id, congue finibus quam. Praesent arcu sem, placerat ut enim nec,
      vestibulum cursus orci.
    </p>
  </main>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: "my-tabs",
    url: "hash",
    children: [
      <Tab id="tab1" title="Innehåll och lärandemål" children="Tab 1" />,
      <Tab id="tab2" title="Förberedelser inför kursstart" children="Tab 1" />,
      <Tab id="tab3" title="Examination och slutförande" children="Tab 1" />,
      <Tab id="tab4" title="Ytterligare information" children="Tab 1" />,
      <Tab id="tab5" title="Kontakter" children="Tab 1" />,
    ],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Secondary: Story = {
  args: {
    id: "my-tabs",
    url: "hash",
    children: [
      <Tab id="tab1" title="Innehåll och lärandemål" children={ComplexPanel} />,
      <Tab id="tab2" title="Förberedelser inför kursstart" children="Tab 1" />,
      <Tab id="tab3" title="Examination och slutförande" children="Tab 1" />,
      <Tab id="tab4" title="Ytterligare information" children="Tab 1" />,
      <Tab id="tab5" title="Kontakter" children="Tab 1" />,
    ],
  },
};
