import React from "react"
import * as LibraryComponents from "@df/library/components"

const FullScreenLoader = () => (
  <div className="min-h-screen flex justify-center items-center">
    <LibraryComponents.Icons.Spinner type="solid" />
  </div>
)

export default FullScreenLoader
