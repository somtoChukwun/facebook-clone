import React from 'react'
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
        <iframe
         src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIamlazyprogrammer%2F&amp;tabs=timeline&amp;width=340&amp;height=1500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
         width="340"
         height="100%"
         style={{border: "none", overflow: "hidden"}}
         scrolling="no"
         frameborder="0"
         allowTransparency="true"
         allow="encrypted-media"
         ></iframe>


    </div>
  )
}

export default Widgets