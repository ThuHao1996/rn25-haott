import React, { useState } from "react";
import "./IconTab.css";

type Props = {};

function IconTab({}: Props) {
  const arrContent = [
    {
      heading: "HISTORY",
      icon: "ti-layers",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      icon: "ti-package",
      heading: "APPROACH",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      icon: "ti-stats-up",
      heading: "CULTURE",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    },
    {
      icon: "ti-layout-media-center-alt",
      heading: "METHOD",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    },
  ];

  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="tab-list">
        <div className="header-tab">ICON TABS</div>
        <div className="tab2">
          {arrContent?.map((item: any, index: number) => {
            const isTab = index === tab;
            return (
              <div
                className="tab3"
                key={index}
                onClick={() => setTab(index)}
                style={{
                  color: isTab ? "green" : "#cdc7c7",
                }}
              >
                <i className={`icon-name ${item.icon}`}></i>
                <div className="content-tab">{item.heading}</div>
              </div>
            );
          })}
          ;
        </div>
        <div className="tab2">
          {arrContent?.map((item: any, index: number) => {
            if (index === tab) {
              return <div className="desc1">{item.description}</div>;
            } 
          })}
        </div>
      </div>
    </>
  );
}

export default IconTab;
