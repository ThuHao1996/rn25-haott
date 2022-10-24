import React, { useState } from "react";
import "./ButtonTab.css";

type Props = {};

function ButtonTab({}: Props) {
  const arrContent = [
    {
      heading: "HISTORY",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      heading: "APPROACH",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      heading: "CULTURE",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    },
    {
      heading: "METHOD",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    },
  ];

  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="main">
        <div className="header">BUTTON TABS</div>
        <div className="tab1">
          {arrContent?.map((item: any, index: number) => {
            const isTab = index === tab;
            return (
              <button
                className="button1"
                key={index}
                onClick={() => setTab(index)}
                style={{
                  backgroundColor: isTab ? "green" : "#cdc7c7",
                  color: isTab ? "white" : "rgb(126 122 122)",
                }}
              >
                {item.heading}
              </button>
            );
          })}
          ;
        </div>
        <div className="tab1">
          {arrContent?.map((item: any, index: number) => {
            if (index === tab) {
              return <div className="desc">{item.description}</div>;
            } else {
            }
          })}
        </div>
      </div>
    </>
  );
}

export default ButtonTab;
